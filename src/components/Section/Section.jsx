import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import "./section.css"
const card = require("../img/pitsa.png")

export default function Section() {

    const [items, setItems] = useState([
        { id:1,
            title:"Сальваторе пицца",
            text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
        },
        { id:2,
            title:"Сальваторе пицца",
            text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
        },
        { id:3,
            title:"Сальваторе пицца",
            text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
        },
        { id:4,
            title:"Сальваторе пицца",
            text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
        }
    ])

    const removeItem = id => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
      };
    
      const filterItem = name => {
        const filteredItems = items.filter(item => item.name !== name);
        setItems(filteredItems);
      };

const pitsa = [
   { id:1,
    title:"Сальваторе пицца",
    text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
},
{ id:2,
    title:"Сальваторе пицца",
    text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
},
{ id:3,
    title:"Сальваторе пицца",
    text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
},
{ id:4,
    title:"Сальваторе пицца",
    text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
}
]


const pitsa1 = [
    { id:1,
     title:"Сальваторе пицца",
     text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
 },
 { id:2,
     title:"Сальваторе пицца",
     text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
 },
 { id:3,
     title:"Сальваторе пицца",
     text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
 },
 { id:4,
     title:"Сальваторе пицца",
     text:" Соус томатный, томаты свежие, ветчина, крем-соус с куриной грудкой, моцарелла, пармезан, чеддер, маасдам, соленые огурчики, анчоусы чеддер, маасдам, соленые огурчики"
 }
 ]


const [get, setGet] = useState("");

  return (
    <>
<Container>
    <Row className='mb-5'>
        <input type="text" className='mt-5'  onChange={(e) => setGet(e.target.value)} />

        {
         pitsa.filter((item) => {
            return get.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(get);
          }).map(({title,text}) => (
             <>
           <Col md={3} xs={12}>

        <Card className='mt-5' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={card} />
      <Card.Body>
        <Card.Title  className='card_section1'>{title}</Card.Title>
        <Card.Text className='card_section'>
{text}
        </Card.Text>
       <div className="div_section">
       <h6  className='salom'>26 см</h6>
        <h6 className='salom'>36 см</h6>
       </div>
       <div className="div_section1">
       <h6  className='salom'>Сыр пармезан</h6>
        <h6 className='salom'>Перчик халапеньо </h6>
       </div>
       
         


      
      </Card.Body>
    </Card>
    <div className="div_div">
    <h6 className='section_h1'>1220Р </h6>
    <h6 className='section_h2'>320Р</h6>

    <div className='div_div1'>
    <button  className='section_btn'>-</button>
    <h6>1</h6>
    <button className='section_btn'>+</button>
    </div>

    </div>

        </Col> 
            </>
        ))
     }




{
         pitsa1.filter((item) => {
            return get.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(get);
          }).map(({title,text}) => (
             <>
           <Col md={3} xs={12}>

        <Card className='mt-5' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={card} />
      <Card.Body>
        <Card.Title  className='card_section1'>{title}</Card.Title>
        <Card.Text className='card_section'>
{text}
        </Card.Text>
       <div className="div_section">
       <h6  className='salom'>26 см</h6>
        <h6 className='salom'>36 см</h6>
       </div>
       <div className="div_section1">
       <h6  className='salom'>Сыр пармезан</h6>
        <h6 className='salom'>Перчик халапеньо </h6>
       </div>
       
         


      
      </Card.Body>
    </Card>
    <div className="div_div">
    <h6 className='section_h1'>1220Р </h6>
    <h6 className='section_h2'>320Р</h6>

    <div className='div_div1'>
    <button  className='section_btn1'>korzinka</button>
   
    </div>

    </div>

        </Col> 
            </>
        ))
     }





    
    </Row>
</Container>
    </>
  )
}
