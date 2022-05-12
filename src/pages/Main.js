import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./main.module.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import CompanyDetails from "../components/CompanyDetails";
import BusinessAddress from "../components/BusinessAddress";
import LegalAddress from "../components/LegalAddress";
import TaxIndentifiers from "../components/TaxIndentifiers";
import SnackBar from "../components/SnackBar";
import ProductSubscription from "../components/ProductSubscription";
import { useInterval } from "../utils/useInterval";

export default function Main() {
  const { state } = useLocation();
  const { data } = state;

  const [profileData, setProfileData] = useState(data);
  const [companyName, setCompanyName] = useState(profileData.companyName);
  const [companyLegalName, setCompanyLegalName] = useState(
    profileData.companyLegalName
  );
  const [email, setEmail] = useState(profileData.email);
  const [website, setWebsite] = useState(profileData.website);
  const [businessAddress, setBusinessAddress] = useState(
    profileData.businessAddresses[0]
  );
  const [legalAddress, setLegalAddress] = useState(
    profileData.legalAddresses[0]
  );
  const [pan, setPan] = useState(profileData.taxIdentifiers.pan);
  const [ein, setEin] = useState(profileData.taxIdentifiers.ein);
  const [isDataUpdated, setIsDataUpdated] = useState();
  const [jobId, setJobId] = useState();

  const profileId = profileData.profileId;
  let tid = profileData.taxIdentifiers.id;

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleCompanyLegalNameChange = (e) => {
    setCompanyLegalName(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBusinessAddressLine1Change = (e) => {
    setBusinessAddress((prevState) => ({
      ...prevState,
      line1: e.target.value,
    }));
  };

  const handleBusinessAddressLine2Change = (e) => {
    console.log(businessAddress);
    setBusinessAddress((prevState) => ({
      ...prevState,
      line2: e.target.value,
    }));
  };

  const handleBusinessAddressZipChange = (e) => {
    setBusinessAddress((prevState) => ({
      ...prevState,
      zip: e.target.value,
    }));
  };

  const handleBusinessAddressCityChange = (e) => {
    setBusinessAddress((prevState) => ({
      ...prevState,
      city: e.target.value,
    }));
  };

  const handleBusinessAddressStateChange = (e) => {
    setBusinessAddress((prevState) => ({
      ...prevState,
      state: e.target.value,
    }));
  };

  const handleBusinessAddressCountryChange = (e) => {
    setBusinessAddress((prevState) => ({
      ...prevState,
      country: e.target.value,
    }));
  };

  const handleLegalAddressLine1Change = (e) => {
    setLegalAddress((prevState) => ({
      ...prevState,
      line1: e.target.value,
    }));
  };

  const handleLegalAddressLine2Change = (e) => {
    setLegalAddress((prevState) => ({
      ...prevState,
      line2: e.target.value,
    }));
  };

  const handleLegalAddressZipChange = (e) => {
    setLegalAddress((prevState) => ({
      ...prevState,
      zip: e.target.value,
    }));
  };

  const handleLegalAddressCityChange = (e) => {
    setLegalAddress((prevState) => ({
      ...prevState,
      city: e.target.value,
    }));
  };

  const handleLegalAddressStateChange = (e) => {
    setLegalAddress((prevState) => ({
      ...prevState,
      state: e.target.value,
    }));
  };

  const handleLegalAddressCountryChange = (e) => {
    setLegalAddress((prevState) => ({
      ...prevState,
      country: e.target.value,
    }));
  };

  const handlePanChange = (e) => {
    setPan(e.target.value);
  };

  const handleEinChange = (e) => {
    setEin(e.target.value);
  };

  const handleDataUpdate = () => {
    const putData = {
      profileId: profileId,
      companyName: companyName,
      companyLegalName: companyLegalName,
      email: email,
      website: website,
      businessAddress: [businessAddress],
      legalAddress: [legalAddress],
      taxIdentifiers: {
        id: tid,
        pan: pan,
        ein: ein,
      },
    };
    console.log(putData);
    axios
      .put(`https://<domain>/bp/v1/profiles/${profileId}`, putData)
      .then((res) => {
        if (
          res &&
          res.data &&
          res.data.status === "ACCEPTED" &&
          res.status === 202
        ) {
          setJobId(res.data.jobId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.page_1}>
      <Typography sx={{ marginTop: "16px", marginBottom: "16px" }} variant="h4">
        Your Business Profile
      </Typography>
      <div className={styles.input_container}>
        <CompanyDetails
          companyName={companyName}
          companyLegalName={companyLegalName}
          email={email}
          website={website}
          handleCompanyNameChange={handleCompanyNameChange}
          handleCompanyLegalNameChange={handleCompanyLegalNameChange}
          handleWebsiteChange={handleWebsiteChange}
          handleEmailChange={handleEmailChange}
        />
        <Divider sx={{ marginTop: "8px", marginBottom: "16px" }} />
        <BusinessAddress
          businessAddress={businessAddress}
          handleBusinessAddressLine1Change={handleBusinessAddressLine1Change}
          handleBusinessAddressLine2Change={handleBusinessAddressLine2Change}
          handleBusinessAddressCityChange={handleBusinessAddressCityChange}
          handleBusinessAddressZipChange={handleBusinessAddressZipChange}
          handleBusinessAddressStateChange={handleBusinessAddressStateChange}
          handleBusinessAddressCountryChange={
            handleBusinessAddressCountryChange
          }
        />
        <Divider sx={{ marginTop: "8px", marginBottom: "16px" }} />
        <LegalAddress
          legalAddress={legalAddress}
          handleLegalAddressLine1Change={handleLegalAddressLine1Change}
          handleLegalAddressLine2Change={handleLegalAddressLine2Change}
          handleLegalAddressCityChange={handleLegalAddressCityChange}
          handleLegalAddressZipChange={handleLegalAddressZipChange}
          handleLegalAddressStateChange={handleLegalAddressStateChange}
          handleLegalAddressCountryChange={handleLegalAddressCountryChange}
        />
        <Divider sx={{ marginTop: "8px", marginBottom: "16px" }} />
        <TaxIndentifiers
          pan={pan}
          ein={ein}
          handlePanChange={handlePanChange}
          handleEinChange={handleEinChange}
        />
        <Divider sx={{ marginTop: "8px", marginBottom: "16px" }} />
        <ProductSubscription profileData={profileData} />
      </div>
      <Button
        sx={{ marginTop: "24px", marginBottom: "24px" }}
        variant="outlined"
        onClick={handleDataUpdate}
      >
        Update
      </Button>
      {isDataUpdated && <SnackBar text="Profile Update Successfully!!!" />}
    </div>
  );
}
