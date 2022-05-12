import { TextField, Typography } from "@mui/material";
import React from "react";

export default function LegalAddress({
  legalAddress,
  handleLegalAddressLine1Change,
  handleLegalAddressLine2Change,
  handleLegalAddressCityChange,
  handleLegalAddressZipChange,
  handleLegalAddressStateChange,
  handleLegalAddressCountryChange,
}) {
  return (
    <>
      <Typography sx={{ textAlign: "left" }}>Legal Address</Typography>
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Line1"
        value={legalAddress.line1}
        onChange={handleLegalAddressLine1Change}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Line2"
        value={legalAddress.line2}
        onChange={handleLegalAddressLine2Change}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="City"
        value={legalAddress.city}
        onChange={handleLegalAddressCityChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Zip Code"
        value={legalAddress.zip}
        onChange={handleLegalAddressZipChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="State"
        value={legalAddress.state}
        onChange={handleLegalAddressStateChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Country"
        value={legalAddress.country}
        onChange={handleLegalAddressCountryChange}
      />
    </>
  );
}
