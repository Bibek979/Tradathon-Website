import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import adminIcon from "../../Images/admin.png"
import Dropdown from "react-bootstrap/Dropdown"
const AdminHeader = () => {
    const navigate = useNavigate();
    const handleContentEdit =() => {
        navigate("contentedit", { replace: true })
    }
    const handleManageUsers = () => {
        navigate("manageusers", { replace: true});
    }
  return (
    <Container fluid style={{}}>
        <Row className='m-0'>
            <Col xl={11} className="p-0 m-0"><h1 className='text-center m-0'>Admin Dashboard</h1></Col>
            <Col xl={1} className="p-0 m-0 text-center">
                <Dropdown>
                    <Dropdown.Toggle id='dropdown-basic' style={{backgroundColor: "none", padding: 1, border: "0px"}}>
                        <img src={adminIcon} alt="Admin icon" height="20%"></img>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={handleContentEdit}>Edit Content</Dropdown.Item>
                        <Dropdown.Item onClick={handleManageUsers}>Manage Users</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    </Container>
  )
}

export default AdminHeader