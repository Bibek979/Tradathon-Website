import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import LearningDashboard from './LearningDashboard'


const LearnMap = ({ moduleData }) => {
    const navigate = useNavigate();
    const handleReadClicked = (moduleData) => {
        navigate('/learning', {state: { id: moduleData }})
        // alert(moduleData.id)
    
    }

  return (
    <Row style={{height: "250px", padding: "0", background: "lightpink", borderRadius: "10px", marginBottom: "2em",  overflow: "hidden"}}>
                    <Col style={{padding: '0', margin: '0'}} lg={4} xl={4}>
                        <img src={moduleData.img} width="100%" height="100%" style={{maxHeight: "100%", borderRadius: "10px", maxHeight: "644px"}}></img>
                    </Col>
                    <Col lg={5} xl={5}>
                        <h4 style={{marginTop: "0.8em", marginBottom: "0.8em"}}>* {moduleData.header}</h4>
                        <p>{moduleData.describe}</p>
                    </Col>
                    <Col><Button style={{position: "relative", top: "70px", left: "50px"}}
                    onClick={ () => handleReadClicked(moduleData)}>Read Now</Button></Col>
                </Row>
  )
}

export default LearnMap