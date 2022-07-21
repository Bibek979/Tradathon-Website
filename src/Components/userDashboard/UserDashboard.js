import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import GetCourses from "../Components_UserDashboard/GetCourses";
import UserDashboardSetting from "./userDashboardSetting";
import Container from "react-bootstrap/Container";
import UserDashboardNav from "./userDashboardNav";

const UserDashboard = () => {
    const location = useLocation();
    const currUser = location.state.currName;
    const [dashboard, setDashboard] = useState(true);
    if(dashboard){
        return(
            <>
            <UserDashboardNav stateChange={[setDashboard, currUser]} />
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