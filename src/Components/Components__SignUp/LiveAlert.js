import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function LiveAlert(props) {
  let show;
  if (props.setDisplay === "true") show = true;
  else {
    show = false;
  }

  if (show) {
    return (
      <>
        <Alert
          variant="danger"
          onClose={() => {
            show = false;
          }}
          dismissible
        >
          <Alert.Heading>Check Field {props.errorIn}</Alert.Heading>
          <p>Please Enter values in {props.errorIn}</p>
        </Alert>

        {!show && <></>}
      </>
    );
  } else {
    return <></>;
  }
}
