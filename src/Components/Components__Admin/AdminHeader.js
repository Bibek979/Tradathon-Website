import React, { useState,useContext } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import adminIcon from "../../Images/admin.png"
import Dropdown from "react-bootstrap/Dropdown"
import { AdminLoggedIn } from '../../Helper/Context'
import { ActiveContext } from './Admin'
const AdminHeader = () => {
    const { setAdminLogin } = useContext(AdminLoggedIn);
    var {active, setActive} = useContext(ActiveContext);
    const logOut = () => {
        setAdminLogin(false);
    }
  return (
    <Container fluid>
        <Row className='m-0'>
            <Col xl={11} className="p-0 m-0"><h1 className='text-center m-0'>Admin Dashboard</h1></Col>
            <Col xl={1} className="p-0 m-0 text-center">
                <Dropdown>
                    <Dropdown.Toggle id='dropdown-basic' style={{backgroundColor: "none", padding: 1, border: "0px"}}>
                        <img src={adminIcon} alt="Admin icon" height="10%"></img>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {setActive(1);console.log(active);}}>Edit Content</Dropdown.Item>
                        <Dropdown.Item onClick={() => {setActive(2);console.log(active);}}>Manage Users</Dropdown.Item>
                        <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    </Container>
  )
}

export default AdminHeader