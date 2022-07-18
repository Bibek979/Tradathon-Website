import React, { useEffect, useState } from "react";
import './stylesheet.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CourseCard from "../Components_Course_Card/CourseCard";
import axios from "axios";


export default function Course(){
    const [responseData, setResponseData] = useState([]);

    const getApi = async () => {
        const url = await axios.get("http://192.168.1.10:5500/course");
        console.log(url.data); //To display all the data returned from the server
        setResponseData(url.data);
    }

    useEffect(() => {
        getApi();
    }, []);
    return(
        <div className="d-flex" style={{justifyContent: "center"}}>
            {responseData.map((user, index) =>(
                <CourseCard key={index} userData={user}/>
            ))}
        </div> 
    )
}