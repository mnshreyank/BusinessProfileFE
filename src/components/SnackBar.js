import { Snackbar } from "@mui/material";
import React, { useState } from "react";

export default function SnackBar({ text }) {
  const [open, setopen] = useState(true);
  const handleClose = () => {
    setopen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={text}
      />
    </>
  );
}
