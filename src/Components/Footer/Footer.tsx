import React from "react";
import { Box, Grid, Divider, styled, Container, Paper } from "@mui/material";
import { Call, Home, Mail } from "@mui/icons-material";
import logo from "../../images/ultimatelogo.png";
import Image from "next/image";

const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "#ddd",
  marginRight: "72px",
  "&::before": {
    content: '""',
    background: theme.palette.primary.main,
    width: "5%",
    height: "1px",
    position: "absolute",
  },
}));

const Footer = () => {
  const ContactBox = (props: any) => {
    const { icon, text } = props;
    return (
      <Box
        component="p"
        fontSize={10}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        color="white"
        sx={{
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        {icon}
        {text}
      </Box>
    );
  };
  return (
    <Paper sx={{ backgroundColor: "#212121", mt: "30px", py: 2 }}>
      <Container>
        <Grid container>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box color="primary.main" my={1} component="p" fontSize={18}>
              ABOUT US
              <CustomDivider />
            </Box>
            <Image
              src={logo}
              alt=""
              placeholder="blur"
              width={200}
              height={50}
              objectFit="contain"
            />
            <ContactBox
              icon={
                <Home
                  fontSize="small"
                  sx={{ marginRight: "10px", color: "#fff" }}
                />
              }
              text="102580 Santa Monica Los Angeles"
            />
            <ContactBox
              icon={
                <Call
                  fontSize="small"
                  sx={{ marginRight: "10px", color: "#fff" }}
                />
              }
              text="+3 045 224 33 12"
            />
            <ContactBox
              icon={
                <Mail
                  fontSize="small"
                  sx={{ marginRight: "10px", color: "#fff" }}
                />
              }
              text="support@netbaseteam.net"
            />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box color="primary.main" my={1} component="p" fontSize={18}>
              CORPORATE
              <CustomDivider />
            </Box>
            <ContactBox text="About" />
            <ContactBox text="Green" />
            <ContactBox text="Affiliates" />
            <ContactBox text="Non-profits and Government" />
            <ContactBox text="Terms of Service" />
            <ContactBox text="Privacy Policy" />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box color="primary.main" my={1} component="p" fontSize={18}>
              SUPPORT
              <CustomDivider />
            </Box>
            <ContactBox text="My Account" />
            <ContactBox text="Design Guide" />
            <ContactBox text="FAQ" />
            <ContactBox text="Design Services" />
            <ContactBox text="Contact Us" />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box color="primary.main" my={1} component="p" fontSize={18}>
              OTHER INFO
              <CustomDivider />
            </Box>
            <ContactBox text="Printmart provides fast online printing for both homes and businesses. We provide high quality business cards, postcards, flyers, brochures, stationery and other premium online print products." />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
