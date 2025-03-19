import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

type NavbarContextType = {
  activeDropdown: string | null;
  position: DOMRect | null;
  setActiveDropdown: (id: string | null) => void;
  setPosition: (rect: DOMRect | null) => void;
  registerContent: (id: string, content: React.ReactNode) => void;
  unregisterContent: (id: string) => void;
};

const NavbarContext = createContext<NavbarContextType | null>(null);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) throw new Error('Navbar compound components must be wrapped in <Navbar.Container>');
  return context;
};

const Container = ({ children }: { children: React.ReactNode }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [position, setPosition] = useState<DOMRect | null>(null);
  const [dropdownContent, setDropdownContent] = useState<Record<string, React.ReactNode>>({});

  const registerContent = useCallback((id: string, content: React.ReactNode) => {
    setDropdownContent(prev => ({ ...prev, [id]: content }));
  }, []);

  const unregisterContent = useCallback((id: string) => {
    setDropdownContent(prev => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  }, []);

  return (
    <NavbarContext.Provider value={{ activeDropdown, position, setActiveDropdown, setPosition, registerContent, unregisterContent }}>
      <nav className="flex items-center space-x-4 p-4 bg-white shadow-sm">
        {children}
      </nav>
      
      {activeDropdown && ReactDOM.createPortal(
        <div
          className="absolute bg-white border rounded-lg shadow-lg p-4"
          style={{
            top: position?.bottom,
            left: position?.left,
          }}
        >
          {dropdownContent[activeDropdown]}
        </div>,
        document.body
      )}
    </NavbarContext.Provider>
  );
};

const Item = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative">{children}</div>;
};

const Link = ({ children }: { children: React.ReactNode }) => {
  return (
    <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">
      {children}
    </a>
  );
};

const DropdownTrigger = ({ children, id }: { children: React.ReactNode; id: string }) => {
  const { setActiveDropdown, setPosition } = useNavbar();
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (ref.current) {
      setActiveDropdown(id);
      const rect = ref.current.getBoundingClientRect();
      setPosition(rect);
    }
  };

  return (
    <div
      ref={ref}
      className="cursor-pointer text-gray-600 hover:text-gray-900 px-3 py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {children}
    </div>
  );
};

const DropdownContent = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { registerContent, unregisterContent } = useNavbar();

  useEffect(() => {
    registerContent(id, children);
    return () => unregisterContent(id);
  }, [id, children, registerContent, unregisterContent]);

  return null;
};

const Navbar = {
  Container,
  Item,
  Link,
  DropdownTrigger,
  DropdownContent,
};

export default Navbar;