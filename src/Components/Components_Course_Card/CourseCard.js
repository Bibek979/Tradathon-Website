import Button from "react-bootstrap/Button";
import cartImg from "./cart-icon.png";
import Container from "react-bootstrap/Container";
import React from "react";
import Card from "react-bootstrap/Card";
const CourseCard = ({userData}) => {
    return(
        <Card className="w-25">
            <Card.Img variant="top" src={userData.course_Img}></Card.Img>
            <Card.Header className="h4">{userData.course_Name}</Card.Header>
            <Card.Body>
                <Card.Text>{userData.course_Desc}</Card.Text>
            </Card.Body>
            <Card.Title className="px-3">&#8377;{userData.course_amount}</Card.Title>
            <Container className="">
                <Button variant="primary">Buy Now</Button>
                <a href="www.google.com" className="p-3"><img width="15%" src={cartImg} alt="Buy Now"></img></a>
            </Container>
        </Card>
    )
}

export default CourseCard;