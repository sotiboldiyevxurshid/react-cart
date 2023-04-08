import React from 'react'
import {  Col, Container,  Nav,  Navbar, Row } from 'react-bootstrap'
import "./navbar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function NavbarRouter() {

    const data = [
        {
            name:"Роллы",
            id:1
        },
        {
            name:"Запеченные роллы",
            id:2
        },
        {
            name:"Горячие роллы",
            id:3
        },
        {
            name:"Роллы 1+1",
            id:4
        },
        {
            name:"Сеты",
            id:5
        },
        {
            name:"Пицца",
            id:6
        },
        {
            name:"WOK",
            id:7
        },
        {
            name:"Салаты & Супы",
            id:8
        },
        {
            name:"Бизнес-ланчи",
            id:9
        },
        {
            name:"Десерты",
            id:10
        },
        {
            name:"Соусы",
            id:11
        }
    ]

  return (
    <>
    <Container>
        <Row className='justify-content-center mt-5'>

        <Col xs={3}>
                <h1 className='nav_logo'>LOGO</h1>
            </Col>
            <Col xs={8}>
                <h1 className='nav_tel'>8 (917) 446-46-12</h1>
            </Col>
          <Col xs={1}>
          <FavoriteBorderIcon/>
          <AddShoppingCartIcon/>
          </Col>

        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
         data.map(({name}) => (
             <>
            <Col xs={1}>
            <button className='search-box'>
                <h4 className="search">{name}</h4>
              </button>
       </Col>
            </>
        ))
     }
         
          </Nav>
        
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
        </Row>
        <Row>
    
       
             
        </Row>


    </Container>
    </>
  )
}
