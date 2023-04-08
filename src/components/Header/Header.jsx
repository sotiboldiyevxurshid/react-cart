import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import "./header.css"
const abc = require("../img/navbar.png")

export default function Header() {



  return (
    <div>
        <Container>
            <Row>
                <Col>
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={abc}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 className='carusel'>Роллы из-под ножа</h3>
          <p className='carusel1'>Вы можете быть уверенными, что наши роллы будут <br />
           приготовлены исключительно из свежей рыбы. <br />
Мы не готовим заранее. Приступаем к приготовлению <br /> блюд только после Вашего заказа.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={abc}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='carusel'>Роллы из-под ножа</h3>
          <p className='carusel1'>Вы можете быть уверенными, что наши роллы будут <br />
           приготовлены исключительно из свежей рыбы. <br />
Мы не готовим заранее. Приступаем к приготовлению <br /> блюд только после Вашего заказа.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={abc}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='carusel'>Роллы из-под ножа</h3>
          <p className='carusel1'>Вы можете быть уверенными, что наши роллы будут <br />
           приготовлены исключительно из свежей рыбы. <br />
Мы не готовим заранее. Приступаем к приготовлению <br /> блюд только после Вашего заказа.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
