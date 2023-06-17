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

const Faq = () => {
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
            marginBottom: "40px",
            lineHeight: "20",
          }}
        >
          <Typography variant="h4">FAQs</Typography>
          <Typography variant="body1">
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
                Can I purchase my ticket onsite on the day of the event?{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, you can but it's also dependent on the organizers of the
                event with exemption with events with registration deadlines.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel2-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                Does the tickets sales have time limit?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, ticket sales ends on the day of the event.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel3-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                Can i promote my events here?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, but there will be added service charge for advert.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel4-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                What is the procedure for ticket purchase?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                The procedure for ticket purchase entails going to the website,
                finding event that catches your interest amongst different
                categories we have, registering and securing your spot.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel5-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                What forms of payment are accepted?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Bank transfer, Paystack, Selar, and virtual cards.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel6-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                Can i use my phone or mobile device for ticket purchase?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, but it has to be smartphone.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel7-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                Can i get a refund if the event is cancelled?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Even though this is a very rare occurence, but in the case of an
                event cancellation, the organizers of the event can choose to
                refund you or you can use the ticket to access another event
                organized by them.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel8-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                Do i get a confirmation email after my ticket purchase?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Yes, a confirmation message will be sent to your email
                immediately you purchase a ticket.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel9-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                Can this site be my online ticket store?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">Yes.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary id="panel10-header">
              <Typography
                style={{
                  color: "dodgerblue",
                }}
              >
                Can i purchase more than one ticket for one event?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">Absolutely.</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Foot />
      </Box>
    </>
  );
};

export default Faq;
