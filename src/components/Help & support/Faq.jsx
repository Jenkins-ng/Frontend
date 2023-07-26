import React from "react";
import Head from "../components/Landing page/Header/Head";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import Foot from "../components/Landing page/Footer/foot";
// import { ExpandMoreIcon } from "@mui/icon-material";

const Faq = (props) => {
  return (
    <>
      <Head />
      <Box
        style={{
          top: "90px",
          position: "absolute",
          width: "100%",
        }}
      >
        <Box
          style={{
            textAlign: "center",
            color: "dodgerblue",
            display: "grid",
            gap: "5px",
            marginBottom: "40px",
            lineHeight: "20",
          }}
        >
          <Typography variant="h4">FAQs</Typography>
          <Typography variant="body1" className="capitalise">
            Find answers to all your questions from our carefully curated list
            of frequently asked questions.
          </Typography>
        </Box>
        <Box style={{ margin: "20px auto", width: "80%", color: "dodgerblue" }}>
          <Accordion>
            <AccordionSummary id="panel1-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                {props.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{props.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Foot />
      </Box>
    </>
  );
};

export default Faq;
