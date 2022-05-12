import { TextField, Typography } from "@mui/material";
import React from "react";

export default function TaxIndentifiers({
  pan,
  ein,
  handlePanChange,
  handleEinChange,
}) {
  return (
    <>
      <Typography sx={{ textAlign: "left" }}>Tax Identifiers</Typography>
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="PAN"
        value={pan}
        onChange={handlePanChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="EIN"
        value={ein}
        onChange={handleEinChange}
      />
    </>
  );
}
