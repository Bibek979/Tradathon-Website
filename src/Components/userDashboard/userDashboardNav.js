import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { PersonFill } from "react-bootstrap-icons";
import { IsLoggedIn } from "../../Helper/Context";

const UserDashboardNav = ({ stateChange }) => {
    const { setUserLogin } = useContext(IsLoggedIn);
    const handleLogOut = () => {
        setUserLogin(false);
    }
    return(
        <>
            <Container fluid={true} className="px-5" style={{padding: "0px", margin: "0px", display: "flex", justifyContent: "space-between"}}>
                <div style={{fontSize: "25px", margin: "0px", alignSelf: "center"}}>Welcome { stateChange[1] }</div> {/* Mod this to load value from login component */}
                <Dropdown>
                    <Dropdown.Toggle style={{background: "white", borderColor: "white"}}>
                        <PersonFill color="blue" size={"25px"} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={()=>stateChange(false)}>Change Password</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={()=>stateChange(false)}>Change Email</Dropdown.Item>
                        <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </>
    )
}


export default UserDashboardNav;