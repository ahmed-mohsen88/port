import React from "react";
import ProgressLine from "./ProgressLine";
import Jump from "react-reveal/Jump";
import { Zoom } from "react-reveal";

import "./ProgressLine.css";
import { Container } from "reactstrap";

function ProgressBaar() {
  return (
    <>
      <Zoom>
        <Container className="bg-dark text-info mt-5 progress_container pt-5 pb-4">
          <Jump forever={true}>
            <div>
              <h1 className="ps-3 pb-4">MY Skills</h1>
            </div>
          </Jump>
          <div>
            <ProgressLine
              label="HTML"
              visualParts={[
                {
                  percentage: "100%",
                  color: "blue",
                },
              ]}
            />
            <ProgressLine
              label="CSS"
              visualParts={[
                {
                  percentage: "95%",
                  color: "blue",
                },
              ]}
            />
            <ProgressLine
              label="JS"
              visualParts={[
                {
                  percentage: "90%",
                  color: "blue",
                },
              ]}
            />{" "}
            <ProgressLine
              label="BootStrap"
              visualParts={[
                {
                  percentage: "91%",
                  color: "blue",
                },
              ]}
            />
            <ProgressLine
              label="React"
              visualParts={[
                {
                  percentage: "88%",
                  color: "blue",
                },
              ]}
            />
          </div>
        </Container>
      </Zoom>
    </>
  );
}

export default ProgressBaar;
