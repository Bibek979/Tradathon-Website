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
        </Card>
    )
}

export default CourseCard;