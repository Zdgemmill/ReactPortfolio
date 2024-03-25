import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// function NavMenu() {
//     return (
//         <Navbar expand="lg" className="bg-body-tertiary">
//             <Container>
//                 <Navbar.Brand href="#home">Zachary Gemmill</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link href="#home">About Me</Nav.Link>
//                         <Nav.Link href="#link">Portfolio</Nav.Link>
//                         <Nav.Link href="#link">Contact</Nav.Link>
//                         <Nav.Link href="#link">Resume</Nav.Link>

//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }
function NavMenu({ setActivePage }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Zachary Gemmill</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setActivePage('about')}>About Me</Nav.Link>
                        <Nav.Link onClick={() => setActivePage('projects')}>Portfolio</Nav.Link>
                        <Nav.Link onClick={() => setActivePage('contact')}>Contact</Nav.Link>
                        <Nav.Link onClick={() => setActivePage('resume')}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavMenu;