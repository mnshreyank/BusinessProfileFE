import { TextField, Typography } from "@mui/material";
import React from "react";

export default function CompanyDetails({
  companyName,
  companyLegalName,
  email,
  website,
  handleCompanyNameChange,
  handleCompanyLegalNameChange,
  handleEmailChange,
  handleWebsiteChange,
}) {
  return (
    <>
      <Typography sx={{ textAlign: "left" }}>Company Details</Typography>
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Company Name"
        value={companyName}
        onChange={handleCompanyNameChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Company Legal Name"
        value={companyLegalName}
        onChange={handleCompanyLegalNameChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        sx={{ marginTop: "16px", marginRight: "32px", marginBottom: "16px" }}
        label="Website"
        value={website}
        onChange={handleWebsiteChange}
      />
    </>
  );
}
