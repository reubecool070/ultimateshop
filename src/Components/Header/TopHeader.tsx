import { createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import React from "react";
import Link from "../../Link";

const TopLink = (props: any) => {
  const { href, title } = props;
  return (
    <Grid item>
      <Link
        href={href}
        sx={{ textDecoration: "none", color: "#e5e5e5", padding: "0 8px" }}
      >
        <Typography variant="caption">{title}</Typography>
      </Link>
    </Grid>
  );
};

const TopHeader = () => {
  const theme = createTheme();
  return (
    <Box
      sx={{
        // backgroundColor: "#CAC4C4",
        backgroundColor: "primary.main",
        padding: theme.spacing(0, 1),
        lineHeight: 0,
      }}
    >
      <Grid container justifyContent="flex-end">
        <TopLink href="/about" title="About Us" />
        <TopLink href="/about" title="FAQ" />
        <TopLink href="/about" title="Terms & Conditions" />
        <TopLink href="/about" title="Contact Us" />
      </Grid>
    </Box>
  );
};

export default TopHeader;
