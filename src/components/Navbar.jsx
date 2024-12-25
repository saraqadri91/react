import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function BrandExample() {
  return (
    <>
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
         <p className="text">Product Page</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
  )
}