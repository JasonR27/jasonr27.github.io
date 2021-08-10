import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


export const NavBar = () => {
    return (
      <Navbar bg="dark" expand="lg" id="Navbar" className="NavbarRJ">
        <Navbar.Brand href="#home" id="name">
          Rob.Jason
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#welcome-section" id="navButton">
              - Welcome Section -
            </Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#projectsstand" id="navbutton">
                {" "}
                See Stand{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="https://jasonr27.github.io/JSCalculator.github.io/">
                Javascript Calculator
              </NavDropdown.Item>
              <NavDropdown.Item href="https://jasonr27.github.io/DrumMachine.github.io/">
                Drum Machine
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="https://jasonr27.github.io/RandomQuoteMachine.github.io/">Random Quote Machine</NavDropdown.Item> */}
              <NavDropdown.Item href="#action/3.3">
                Markdown Previewer
              </NavDropdown.Item>
              <NavDropdown.Item href="https://jasonr27.github.io/LandingPage.github.io/">
                Landing Page
              </NavDropdown.Item>
              <NavDropdown.Item href="https://jasonr27.github.io/SurveyPage.github.io/">
                Survey Page
              </NavDropdown.Item>
              <NavDropdown.Item href="https://jasonr27.github.io/TechnicalDocumentationPage.github.io/">
                Technical Documentation Page
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Contact_Info">
                Make a Request
              </NavDropdown.Item>
              <Nav.Link
                href="https://codepen.io/collection/MggGVy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Collection in Codepen.io
              </Nav.Link>
            </NavDropdown>
            <Nav.Link href="#Contact_Info" id="navButton">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBar;