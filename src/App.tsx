import Navbar from "./components/navbar"

function App() {
  return (
    <Navbar.Container>
  <Navbar.Item>
    <Navbar.Link>Link 1</Navbar.Link>
  </Navbar.Item>
  
  <Navbar.Item>
    <Navbar.DropdownTrigger id="dropdown1">
      Open Dropdown 1
    </Navbar.DropdownTrigger>
    <Navbar.DropdownContent id="dropdown1">
      <p>test1</p>
    </Navbar.DropdownContent>
  </Navbar.Item>
  
  <Navbar.Item>
    <Navbar.DropdownTrigger id="dropdown2">
      Open Dropdown 2
    </Navbar.DropdownTrigger>
    <Navbar.DropdownContent id="dropdown2">
      <p>test2</p>
    </Navbar.DropdownContent>
  </Navbar.Item>
</Navbar.Container>
  )
}

export default App
