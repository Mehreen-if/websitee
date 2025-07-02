
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './App.css';

const cardData = [
  {
    title: "Grace Rooted in Heritage",
    text: "A bold blend of minimalism and sparkle — crafted for the woman who owns every room she walks into. Modern beauty, made eternal.",
    img: "/1.jpg",
    btnText: "Learn More"
  },
  {
    title: "Here Elegance Meets the Now",
    text: "Echoes of tradition meet timeless artistry. Inspired by royal elegance, this piece captures the essence of stories passed down through generations.",
    img: "/2.jpg",
    btnText: "Read More"
  },
  {
    title: "For Moments That Last Forever",
    text: "Celebrate beginnings with a touch of classic opulence. Designed to complement your most cherished moments with grace and grandeur.",
    img: "/3.jpg",
    btnText: "Explore"
  }
];

function Cards() {
  return (
    <>
    <div id='forWomen' className="p-4 mt-4 text-center flex">
      <Row className="g-4" >
        {cardData.map((card, idx) => (
          
          <Col key={idx} md={4} >
            <Card className="hover-card h-100" style={{background:"none", color:"white", border:"1px solid gray"}}>
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Button variant="primary">{card.btnText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    
    </div>
    </>
  )
}

export default Cards