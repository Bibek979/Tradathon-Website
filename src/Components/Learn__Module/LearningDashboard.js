import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import pdf from "../../samplePDF/sample3.pdf";
import "./styles.css"

const LearningDashboard = () => {

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
    
    
  return (
    <React.Fragment>
        <Document file={pdf} options={{ workerSrc: "pdf.worker.js"}}
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