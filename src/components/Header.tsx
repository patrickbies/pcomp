import Navbar from "./navbar";
import IconButton from "./IconButton";
import {
  AppWindowIcon,
  Book,
  BookCheckIcon,
  BookCopy,
  Box,
  Braces,
  Brackets,
} from "lucide-react";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen">
      <Navbar.Container>
        <Navbar.Item>
          <Navbar.Link>About Us</Navbar.Link>
        </Navbar.Item>

        <Navbar.Item>
          <Navbar.DropdownTrigger id="dropdown1">
            Experiments
          </Navbar.DropdownTrigger>
          <Navbar.DropdownContent id="dropdown1" width={500} height={300}>
            <ul className="w-full h-full overflow-hidden grid grid-flow-col grid-cols-2 gap-0 p-0 m-0">
              <li className="w-fit">
                <IconButton
                  icon={
                    <BookCopy additive="replace" color="lightgrey" size={30} />
                  }
                  title="Lorem Ipsum"
                  desc="Lorem ipsum dolor sit amet."
                />
              </li>
              <li className="w-fit">
                <IconButton
                  icon={<Book additive="replace" color="lightgrey" size={30} />}
                  title="Lorem Ipsum"
                  desc="Lorem ipsum dolor sit amet."
                />
              </li>
              <li className="w-fit">
                <IconButton
                  icon={
                    <AppWindowIcon
                      additive="replace"
                      color="lightgrey"
                      size={30}
                    />
                  }
                  title="Lorem Ipsum"
                  desc="Lorem ipsum dolor sit amet."
                />
              </li>
              <li className="w-fit">
                <IconButton
                  icon={
                    <BookCheckIcon
                      additive="replace"
                      color="lightgrey"
                      size={30}
                    />
                  }
                  title="Lorem Ipsum"
                  desc="Lorem ipsum dolor sit amet."
                />
              </li>
              <li className="row-span-4">
                <div className="bg-foreground/10 cursor-pointer h-full flex ml-10 rounded-lg"></div>
              </li>
            </ul>
          </Navbar.DropdownContent>
        </Navbar.Item>

        <Navbar.Item>
          <Navbar.DropdownTrigger id="dropdown2">
            Community
          </Navbar.DropdownTrigger>
          <Navbar.DropdownContent id="dropdown2" width={300} height={220}>
            <ul className="w-full h-full overflow-hidden grid">
              <li className="w-fit">
                <IconButton
                  icon={
                    <Brackets additive="replace" color="lightgrey" size={30} />
                  }
                  title="Lorem Ipsum"
                />
              </li>
              <li className="w-fit">
                <IconButton
                  icon={
                    <Braces additive="replace" color="lightgrey" size={30} />
                  }
                  title="Lorem Ipsum"
                  desc="This one has a description."
                />
              </li>
              <li className="w-fit">
                <IconButton
                  icon={<Box additive="replace" color="lightgrey" size={30} />}
                  title="Lorem Ipsum"
                />
              </li>
            </ul>
          </Navbar.DropdownContent>
        </Navbar.Item>
      </Navbar.Container>
    </header>
  );
};

export default Header;
