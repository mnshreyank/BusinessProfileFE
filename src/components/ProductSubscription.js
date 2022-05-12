import { TextField, Typography } from "@mui/material";
import React from "react";

export default function ProductSubscription({ profileData }) {
  return (
    <>
      <Typography sx={{ textAlign: "left" }}>Product Subscriptions</Typography>
      {profileData.productSubscriptions.map((eachProduct) => {
        return (
          <TextField
            key={eachProduct.productId}
            sx={{
              marginTop: "16px",
              marginRight: "32px",
              marginBottom: "16px",
            }}
            disabled
            value={eachProduct.productName}
          />
        );
      })}
    </>
  );
}
