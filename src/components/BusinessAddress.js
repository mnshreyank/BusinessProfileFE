import { TextField, Typography } from "@mui/material";
import React from "react";

export default function BusinessAddress({
  businessAddress,
  handleBusinessAddressLine1Change,
  handleBusinessAddressLine2Change,
  handleBusinessAddressCityChange,
  handleBusinessAddressZipChange,
  handleBusinessAddressStateChange,
  handleBusinessAddressCountryChange,
}) {
  return (
    <>
      <Typography sx={{ textAlign: "left" }}>Business Address</Typography>
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Line1"
        value={businessAddress.line1}
        onChange={handleBusinessAddressLine1Change}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Line2"
        value={businessAddress.line2}
        onChange={handleBusinessAddressLine2Change}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="City"
        value={businessAddress.city}
        onChange={handleBusinessAddressCityChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Zip Code"
        value={businessAddress.zip}
        onChange={handleBusinessAddressZipChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="State"
        value={businessAddress.state}
        onChange={handleBusinessAddressStateChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Country"
        value={businessAddress.country}
        onChange={handleBusinessAddressCountryChange}
      />
    </>
  );
}
