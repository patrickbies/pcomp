import { AppWindow, AppWindowIcon, Book, BookAudio, BookCheckIcon, BookCopy } from "lucide-react";
import IconButton from "./components/IconButton";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="bg-background relative flex h-screen overflow-x-hidden">
      <header className="w-screen">
        <Navbar.Container>
          <Navbar.Item>
            <Navbar.Link>Link 1</Navbar.Link>
          </Navbar.Item>

          <Navbar.Item>
            <Navbar.DropdownTrigger id="dropdown1">
              Dropdown 1
            </Navbar.DropdownTrigger>
            <Navbar.DropdownContent id="dropdown1" width={500} height={300}>
              <ul className="w-full overflow-hidden grid grid-flow-col grid-rows-4 gap-0 h-full">
                <li>
                  <IconButton
                    icon={<BookCopy additive="replace" color="lightgrey" size={30}/>}
                    title="Lorem Ipsum"
                    desc="Lorem ipsum dolor sit amet."
                  />
                </li>
                <li>
                  <IconButton
                    icon={<Book additive="replace" color="lightgrey" size={30}/>}
                    title="Lorem Ipsum"
                    desc="Lorem ipsum dolor sit amet."
                  />
                </li>
                <li>
                  <IconButton
                    icon={<AppWindowIcon additive="replace" color="lightgrey" size={30}/>}
                    title="Lorem Ipsum"
                    desc="Lorem ipsum dolor sit amet."
                  />
                </li>
                <li>
                  <IconButton
                    icon={<BookCheckIcon additive="replace" color="lightgrey" size={30}/>}
                    title="Lorem Ipsum"
                    desc="Lorem ipsum dolor sit amet."
                  />
                </li>
                <li>
                  <div className="bg-red-500 h-full flex">

                  </div>
                </li>
              </ul>
            </Navbar.DropdownContent>
          </Navbar.Item>

          <Navbar.Item>
            <Navbar.DropdownTrigger id="dropdown2">
              Dropdown 2
            </Navbar.DropdownTrigger>
            <Navbar.DropdownContent id="dropdown2" width={300} height={200}>
              <p>test2</p>
            </Navbar.DropdownContent>
          </Navbar.Item>
        </Navbar.Container>
      </header>
    </main>
  );
}

export default App;
