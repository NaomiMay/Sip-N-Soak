import "../styles/FAQ.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

//Accordion component using MUI styled appropriatly to the design of website
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

// Styled AccordionSummary component
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(() => ({
  backgroundColor: "#D8D2C2",
  color: "#4A4947",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "8px", // Adjust spacing as needed
  },
}));

// Styled AccordionDetails component
const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "16px",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#D8D2C2",
  color: "#4A4947",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="accordion">
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Orders & Shipping</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>How much does shipping cost?</h4>
            Shipping costs vary based on your location, the size of your order,
            and the shipping method you choose at checkout. Standard shipping
            rates start at $5, while expedited options are available for an
            additional fee.
            <h4>How long does shipping take?</h4>
            Orders are typically processed within 1-2 business days. Standard
            shipping usually takes 3-7 business days, depending on your
            location. Expedited shipping is also available, which can reduce
            delivery time to 1-3 days.
            <h4>Do you offer International shipping?</h4>
            At this time, we do not offer international shipping. We currently
            only ship within Australia, but we are exploring options for future
            expansion.
            <h4>How can i track my parcel?</h4>
            Once your order has been shipped, you’ll receive a tracking number
            via email. You can use this number on the courier's website to track
            your parcel’s progress.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="accordion">
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Products & Advice</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Do Sip 'N' Soak products have an expiry date?</h4>
            Yes, each of our Sip 'N' Soak products has an expiry date printed on
            the packaging. We recommend using the products before this date to
            ensure their full potency and freshness.
            <h4>How should i store my Sip 'N' Soak products?</h4>
            For optimal freshness, we recommend storing your Sip 'N' Soak
            products in a cool, dry place, away from direct sunlight and
            moisture. For tea, keep it in an airtight container to maintain its
            flavor. Bath bombs should be kept sealed in their packaging to
            prevent them from absorbing moisture.
            <h4>Are all products safe to use during pregnancy?</h4>
            Yes! All of our products are formulated with natural ingredients
            that are safe to use during pregnancy. However, if you have any
            concerns or specific medical conditions, we recommend consulting
            your healthcare provider before use.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="accordion">
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Gift Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Do you offer gift wrapping?</h4>
            Yes, we offer gift wrapping for a small fee of $2. Simply select the
            gift wrapping option at checkout, and we’ll take care of the rest!
            <h4>Do you sell gift cards?</h4>
            Yes, we sell gift cards! They are available in various denominations
            and can be used online or in-store. Perfect for a thoughtful gift!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="accordion">
        <AccordionSummary aria-controls="panel3d-content" id="panel4d-header">
          <Typography>Payment & Returns</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>What are your payment options?</h4>
            We accept Visa, Mastercard, American Express, and Apple Pay for
            secure and convenient payments.
            <h4>Is my payment seccure?</h4>
            Yes, your payment is completely secure. We use industry-standard
            encryption to protect your payment information, ensuring that all
            transactions are safe and confidential.
            <h4>What is Sip 'N' Soaks Privacy Policy?</h4>
            Your privacy is important to us. We collect personal information
            only to process your orders and improve your shopping experience.
            For full details, please review our Privacy Policy, where we outline
            how your information is collected, used, and protected.
            <h4>What is your return/exchange policy?</h4>
            We do not currently accept returns or exchanges unless the request
            is deemed suitable. Please contact us with any concerns, and we will
            evaluate each situation on a case-by-case basis.
            <h4>How do I make a return?</h4>
            If a return is approved, we will provide you with the return
            address. Please contact us to confirm the return, and we’ll guide
            you through the process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="accordion">
        <AccordionSummary aria-controls="panel3d-content" id="panel5d-header">
          <Typography>Other</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Can I change or cancel my order after placing it?</h4>
            Once an order is placed, we begin processing it right away to ensure
            quick delivery. Unfortunately, we are unable to make changes or
            cancellations once the order has been confirmed. If you have any
            issues, please contact us as soon as possible, and we'll do our best
            to assist you.
            <h4>Do you offer discounts or promotions?</h4>
            We occasionally offer discounts and promotions! To stay updated on
            any special offers, be sure to subscribe to our newsletter or follow
            us on social media.
            <h4>How can I contact customer service?</h4>
            You can contact us via our Contact Us page. Our customer service
            team is available Monday to Friday and will get back to you as soon
            as possible.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
