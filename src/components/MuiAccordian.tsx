import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordian = () => {
  const [isExpanded, setIsExpanded] = useState<string | boolean>(false);
  const handleExpanded = (isExpanded: boolean, panel: string) => {
    setIsExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <Accordion
        expanded={isExpanded === "panel1"}
        onChange={(event: any, isExpanded: boolean) =>
          handleExpanded(isExpanded, "panel1")
        }
      >
        <AccordionSummary
          id="panel1-header"
          aria-control="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            accusantium quos eveniet aliquam laboriosam porro repellendus a aut
            atque molestiae possimus perferendis nam illum, magni vitae
            obcaecati! Quam, quo eos!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={isExpanded === "panel2"}
        onChange={(event: any, isExpanded: boolean) =>
          handleExpanded(isExpanded, "panel2")
        }
      >
        <AccordionSummary
          id="panel2-header"
          aria-control="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            accusantium quos eveniet aliquam laboriosam porro repellendus a aut
            atque molestiae possimus perferendis nam illum, magni vitae
            obcaecati! Quam, quo eos!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={isExpanded === "panel3"}
        onChange={(event: any, isExpanded: boolean) =>
          handleExpanded(isExpanded, "panel3")
        }
      >
        <AccordionSummary
          id="panel-header"
          aria-control="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            accusantium quos eveniet aliquam laboriosam porro repellendus a aut
            atque molestiae possimus perferendis nam illum, magni vitae
            obcaecati! Quam, quo eos!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={isExpanded === "panel4"}
        onChange={(event: any, isExpanded: boolean) =>
          handleExpanded(isExpanded, "panel4")
        }
      >
        <AccordionSummary
          id="panel4-header"
          aria-control="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            accusantium quos eveniet aliquam laboriosam porro repellendus a aut
            atque molestiae possimus perferendis nam illum, magni vitae
            obcaecati! Quam, quo eos!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordian;
