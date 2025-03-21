import { ChevronDown, ChevronLeft, SidebarIcon } from "lucide-react";
import { useState } from "react";

const Container = ({
  offsetHeight,
  ref,
  children,
}: {
  offsetHeight?: number;
  ref?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      ref={ref}
      style={{ marginTop: offsetHeight + "px" }}
      className={`fixed inset-0 border-border h-screen w-0 transition-all ${
        open && "w-[20vw] border-r"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`hover:bg-foreground/20 cursor-pointer absolute left-[100%] rounded-md p-1.5 ml-2 mt-2 transition-all duration-300 ${
          open && "scale-x-[-1]"
        }`}
      >
        <SidebarIcon color="white" size={20}/>
      </button>
      <section
        className={`transition-opacity pb-20 ${
          !open && "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </section>
    </div>
  );
};

const Header = ({text} : {text : string}) => {
  return (
    <div className="text-foreground font-semibold py-1 pt-5 px-4">
      {text}
    </div>
  )
}

const ListItem = ({
  text,
  iconLeft,
  onClick,
}: {
  text: string;
  iconLeft?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="text-foreground cursor-pointer hover:bg-foreground/10 rounded-lg py-1 px-4 mt-1 mx-2 text-nowrap"
    >
      {text}
    </div>
  );
};

const DropdownItem = ({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="text-foreground cursor-pointer hover:bg-foreground/10 rounded-lg py-1 px-4 mt-1 mx-2 text-nowrap flex justify-between items-center"
      >
        {text}
        <ChevronDown size={20} className={`transition-all ${open && " scale-y-[-1]"}`} />
      </div>
      <div
        className={`mx-6 border-l border-border transition-transform overflow-hidden ${
          !open && "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Sidebar = {
  Container,
  ListItem,
  DropdownItem,
  Header
};

export default Sidebar;
