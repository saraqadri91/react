import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function BrandExample() {
  return (
    <>
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">
        
         <p className="text">Product Page</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
  )
}
