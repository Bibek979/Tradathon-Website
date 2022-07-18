import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CoursesEnrolled from "./CoursesEnrolled";

const GetCourses = () => {
    const [responseData, setResponseData] = useState([]);
    const getApi = async () => {
        const url = await axios.get("http://192.168.1.10:5500/userdashboard");
        console.log(url.data); //To display all the data returned from the server
        setResponseData(url.data);
        console.log("Hello Get Courses")
    }

    useEffect(() => {
        getApi();
    }, []);
    return(
        <div className="d-flex" style={{justifyContent: "center", paddingBottom: "50px"}}>
            {responseData.map((courses, index) => (
                <CoursesEnrolled key={index} courseData={courses} />
            ))}
        </div>
    )
}

export default GetCourses;