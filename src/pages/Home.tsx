import { useLayoutEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/sidebar";
import {
  Apple,
  Baby,
  Book,
  Carrot,
  Code,
  Code2,
  Computer,
  File,
  Keyboard,
  Laptop,
  Monitor,
  Phone,
} from "lucide-react";
import ScrollTo from "../components/ScrollTo";

const Home = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  useLayoutEffect(() => {
    const headerEl = headerRef.current;
    const sidebarEl = sidebarRef.current;

    if (!headerEl || !sidebarEl) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === headerEl) {
          setHeaderHeight(entry.contentRect.height);
        }
        if (entry.target === sidebarEl) {
          setSidebarWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(headerEl);
    resizeObserver.observe(sidebarEl);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <main>
      <Header ref={headerRef} />
      <Sidebar.Container offsetHeight={headerHeight} ref={sidebarRef}>
        <Sidebar.Header text="Page Headings" />

        <Sidebar.DropdownItem text="First Section" iconLeft={<Monitor size={18} />}>
          <Sidebar.ListItem href="#sub1" text="Subheading 1" iconLeft={<File size={18} />} />
          <Sidebar.ListItem href="#sub2" text="Subheading 2" iconLeft={<Phone size={18} />} />
        </Sidebar.DropdownItem>
        
        <Sidebar.DropdownItem text="New Section" iconLeft={<Keyboard size={18} />}>
          <Sidebar.ListItem href="#asub" text="Another Subheading" iconLeft={<File size={18} />} />
        </Sidebar.DropdownItem>


        <Sidebar.Header text="Title Here" />
        <Sidebar.ListItem text="Item 1" iconLeft={<Book size={18} />} />
        <Sidebar.ListItem text="Item 2" iconLeft={<Code size={18} />} />
        <Sidebar.DropdownItem text="Drop 1" iconLeft={<Apple size={18} />}>
          <Sidebar.ListItem text="Lorem" iconLeft={<File size={18} />} />
          <Sidebar.DropdownItem text="Drop 2" iconLeft={<Carrot size={18} />}>
            <Sidebar.ListItem text="Lorem" iconLeft={<Baby size={18} />} />
          </Sidebar.DropdownItem>
          <Sidebar.ListItem text="Ipsum" iconLeft={<Phone size={18} />} />
        </Sidebar.DropdownItem>
        <Sidebar.ListItem text="Item 4" iconLeft={<Computer size={18} />} />
        <Sidebar.Header text="Some Title" />
        <Sidebar.ListItem text="Item 1" iconLeft={<Laptop size={18} />} />
        <Sidebar.DropdownItem text="Large Drop" iconLeft={<Code2 size={18} />}>
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
          <Sidebar.ListItem text="Lorem" iconLeft={<Book size={18} />} />
        </Sidebar.DropdownItem>
      </Sidebar.Container>
      <div style={{ marginLeft: sidebarWidth / 2 + "px" }}>
        <section className="py-[20vh] ml-[20vw] w-[60vw]">
          <h1 className="text-foreground text-5xl font-bold">First Section</h1>
          <div className="h-[1px] w-full bg-foreground/10 mt-[4vh]" />
          <h3 className="text-foreground/90 text-3xl font-semibold mt-[6vh]">
            <ScrollTo headerHeight={headerHeight} id="sub1" />
            Subheading 1
          </h3>
          <p className="text-foreground/80 mt-[4vh]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum
            magnam inventore assumenda consequuntur ex incidunt sapiente
            repudiandae a, minus quia vel ratione, cupiditate temporibus cumque
            asperiores eligendi dolore numquam, dignissimos reprehenderit
            molestiae. Neque, et explicabo voluptas modi itaque veniam totam
            fuga doloribus laborum nihil recusandae nam quas non reiciendis.
          </p>
          <h3 className="text-foreground/90 text-3xl font-semibold mt-[6vh]">
            <ScrollTo headerHeight={headerHeight} id="sub2" />
            Subheading 2
          </h3>
          <p className="text-foreground/80 mt-[4vh]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum
            magnam inventore assumenda consequuntur ex incidunt sapiente
            repudiandae a, minus quia vel ratione, cupiditate temporibus cumque
            asperiores eligendi dolore numquam, dignissimos reprehenderit
            molestiae. Neque, et explicabo voluptas modi itaque veniam totam
            fuga doloribus laborum nihil recusandae nam quas non reiciendis.
          </p>
          <h1 className="text-foreground text-5xl font-bold mt-[8vh]">
            New Section
          </h1>
          <div className="h-[1px] w-full bg-foreground/10 mt-[4vh]" />
          <h3 className="text-foreground/90 text-3xl font-semibold mt-[6vh]">
            <ScrollTo headerHeight={headerHeight} id="asub" />
            Another Subheading
          </h3>
          <p className="text-foreground/80 mt-[4vh]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum
            magnam inventore assumenda consequuntur ex incidunt sapiente
            repudiandae a, minus quia vel ratione, cupiditate temporibus cumque
            asperiores eligendi dolore numquam, dignissimos reprehenderit
            molestiae. Neque, et explicabo voluptas modi itaque veniam totam
            fuga doloribus laborum nihil recusandae nam quas non reiciendis.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
