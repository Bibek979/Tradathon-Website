import React, { useState } from "react";
import GetCourses from "../Components_UserDashboard/GetCourses";
import UserDashboardSetting from "./userDashboardSetting";
import Container from "react-bootstrap/Container";
import UserDashboardNav from "./userDashboardNav";

const UserDashboard = () => {
    const [dashboard, setDashboard] = useState(true);
    if(dashboard){
        return(
            <>
            <UserDashboardNav stateChange={setDashboard} />
            <Container>
                <div>
                    <p>Enrolled Courses</p>
                    <GetCourses />
                </div>
            </Container>
        </>
        )
    }
    else{
        return(<><UserDashboardNav stateChange={setDashboard}/><UserDashboardSetting /></>)
    }
    
}

export default UserDashboard;