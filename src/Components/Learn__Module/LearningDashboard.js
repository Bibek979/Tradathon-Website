import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import { useNavigate } from 'react-router-dom';
import "./styles.css"

import pdf1 from "../../samplePDF/module1.pdf"
import pdf2 from "../../samplePDF/module2.pdf"
import pdf3 from "../../samplePDF/module3.pdf"
import pdf4 from "../../samplePDF/module4.pdf"
import pdf5 from "../../samplePDF/module5.pdf"
// with this function I wanted to edit the location of the file 
// const locationFixer = (str) => {
//     console.log(str);
//     var newLocation = "";
//     var flipper = true;
//     for(var i = 0;i<str.length; i++)
//     {
//         if(flipper === true) {
//             if(str[i] === '.')
//             {
//                 if(flipper === true)
//                 {
//                     flipper = false;
//                 }
//                 else {
//                     flipper = true;
//                 }
//             }
//             else {
//                 newLocation = newLocation+str[i];
//             }
//         }
//         else {
//             flipper = true;
//         }
//     }
//     newLocation = newLocation+".pdf";
//     console.log(newLocation);
//     return newLocation;
// }   

// const searchPdf = (str) => {
//     var i = 1;
//     while(i < 5){
//         if(str.indexOf(i) != -1){
//             continue;
//         }
//         else
//         {
//             return i;
//         }
//     }

// }

const LearningDashboard = (state) => {
    const location = useLocation();
    console.log(location.state.id.pdflocation)
    const navigate = useNavigate();
    // console.log(location.state.id.pdflocation)
    // var b = location.state.id.pdflocation;
    // var newLocation = locationFixer(b);
    // console.log(newLocation);
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