import React from "react";
import Card from "react-bootstrap/Card";
const CoursesEnrolled = ({courseData}) => {
    return(
        <>
            <Card className="w-25">
                <Card.Img variant="top" src={courseData.course_Img}></Card.Img>
                <Card.Header style={{fontSize: "20px"}}>{courseData.course_Name}</Card.Header>
            </Card>
        </>
    )
}

export default CoursesEnrolled;