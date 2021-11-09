import { Home } from "@mui/icons-material";
import React from "react";
import {
  Breadcrumbs,
  emphasize,
  Container,
  Link,
  styled,
  Chip,
  Grid,
  CardMedia,
  Paper,
} from "@mui/material";
import Image from "next/image";

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = "#ddd";
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    cursor: "pointer",
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

const product = (props: any) => {
  return (
    <Container sx={{ mt: "85px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          icon={<Home fontSize="small" />}
        />
        <StyledBreadcrumb component="a" href="#" label="Products" />
        <Link underline="none" color="text.secondary">
          Breadcrumbs
        </Link>
      </Breadcrumbs>
      <Paper>
        <Grid container sx={{ mt: 2 }}>
          <Grid item lg={6}>
            <CardMedia
              component="img"
              alt="product"
              // height="140"
              image="https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default product;
