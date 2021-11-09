import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, Hidden, Paper } from "@mui/material";
import NewNavbar from "../src/Components/NavBar/NewNavbar";
import ImageSlider from "../src/Components/NavBar/Carousel";
import ProductWrapper from "../src/Components/Layout/ProductWrapper";
import QualityAssurance from "../src/Components/Products/QualityAssurance";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Index() {
  const [color, setColor] = React.useState("#c4c4c4");

  const matches = useMediaQuery("(min-width:600px)");

  const onChangeColor = (value: string) => {
    setColor(value);
  };

  return (
    <React.Fragment>
      <Paper
        elevation={0}
        sx={{ backgroundColor: color, marginTop: matches ? "77px" : "203px" }}
      >
        <Container>
          <Grid container>
            <Grid item lg={3} md={3}>
              <Hidden mdDown>
                <NewNavbar />
              </Hidden>
            </Grid>
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <ImageSlider onChangeColor={onChangeColor} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container>
        <QualityAssurance />
        <ProductWrapper title="NEW PRODUCTS" />
        <ProductWrapper title="HOT DEALS" />
        <ProductWrapper title="ALL PRODUCTS" />
      </Container>
    </React.Fragment>
  );
}
