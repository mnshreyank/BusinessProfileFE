import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import styles from "./welcome.module.css";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../components/AlertDialog";
import { dummydata } from "../data/get";
import axios from "axios";

export default function Welcome() {
  const [userId, setUserId] = useState("");
  const [isIdEmpty, setIsIdEmpty] = useState(false);
  const [apiError, setApiError] = useState();
  const [data, setData] = useState(dummydata);

  const navigate = useNavigate();

  const handleUserInputChange = (e) => {
    setUserId(e.target.value);
    setIsIdEmpty(false);
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleIdSubmit();
    }
  };

  const handleIdSubmit = (e) => {
    //make a backend call
    if (userId === "" || null || undefined) {
      setIsIdEmpty(true);
    } else {
      axios
        .get(`https://<domain>/bp/v1/profiles/${userId}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .catch(() => {
          setApiError(true);
        });
      navigate(`/${userId}`, { state: { data: data } });
    }
  };
  return (
    <div className={styles.main_container}>
      <Paper elevation={6} className={styles.paper_container}>
        <Typography variant="h4" style={{ fontWeight: "600" }}>
          Welcome!
        </Typography>
        <TextField
          value={userId}
          sx={{ marginBottom: "12px" }}
          margin="normal"
          variant="outlined"
          label="Business ID"
          autoFocus
          required
          onChange={handleUserInputChange}
          onKeyDown={handleKeyPress}
        />
        {isIdEmpty && (
          <Typography color="error" gutterBottom>
            Please enter your business ID*
          </Typography>
        )}
        <Button
          style={{ height: 56, marginTop: "12px" }}
          variant="contained"
          onClick={handleIdSubmit}
        >
          Submit
        </Button>
      </Paper>
      {apiError && (
        <AlertDialog
          title="Authentication Error"
          description="Please enter a valid profile id"
        />
      )}
    </div>
  );
}
