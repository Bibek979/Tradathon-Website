import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import "./styles.css"
import pdf1 from "../../samplePDF/pdf1.pdf"
import pdf2 from "../../samplePDF/pdf2.pdf"
import pdf3 from "../../samplePDF/sample1.pdf"

const LearningDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.id.pdflocation)
    const [numPages, setNumPages] = useState(null);
    const [ pageNumber, setPageNumber ] = useState(1);

    function onDocumentLoadSuccess({ numPages }){
        setNumPages(numPages);
        setPageNumber(1);
        console.log(numPages+" is the number of pages");
    }
    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset)
    }
    function previousPage(){
        changePage(-1);
    }

    function nextPage () {
        changePage(1);
    }

    const handleBackBtn = () =>{
        navigate(-1);
    }
    
    
  return (
    <React.Fragment>
        <Button onClick={handleBackBtn} style={{position: "relative", left: "2em", top: "2em"}}>Go back</Button>
        <h2 style={{textAlign: "center", fontWeight: 800}}>{location.state.id.header}</h2>
        <Document file={pdf1} options={{ workerSrc: "pdf.worker.js"}} 
            onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} 
            renderAnnotationLayer={false} 
            style={{display: "flex", justifyContent: "center"}}
            />
    </Document>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <p>
            Page {pageNumber || (numPages ? 1: "--")} of {numPages || "--"}
        </p>
        <div style={{width: "200px",display: "flex", justifyContent: "space-evenly"}}>
            <Button disabled={pageNumber === 1} onClick={previousPage}>Prev</Button>
            <Button disabled={pageNumber > numPages} onClick={nextPage}>Next</Button>
        </div>
    </div>
    </React.Fragment>

  )
}

export default LearningDashboard 