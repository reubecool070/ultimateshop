import { LocalShipping, Money, Public, ThumbUp } from "@mui/icons-material";
import { Grid, styled, Typography } from "@mui/material";
import React from "react";

const ItemIcon = styled("div")(({ theme }) => ({
  textAlign: "center",
  "& .MuiSvgIcon-fontSizeLarge": {
    borderRadius: "50%",
    fontSize: "8rem",
    // border: "1px solid black",
    padding: "2rem",
    color: "#fff",
    background: theme.palette.primary.light,
  },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  margin: "1rem 0",
}));

const QualityAssurance = () => {
  const QualityCard = (props: any) => {
    const { title, description, icon } = props;
    return (
      <>
        <Grid item xs={12} sm={6} md={3} lg={3} sx={{ p: 3 }}>
          <ItemIcon>{icon}</ItemIcon>
          <Typography component="h6" variant="h6" align="center">
            {title}
          </Typography>
          <Typography
            color="text.secondary"
            component="p"
            align="justify"
            variant="body2"
          >
            {description}
          </Typography>
        </Grid>
      </>
    );
  };

  return (
    <>
      <GridContainer container spacing={0}>
        <QualityCard
          icon={<ThumbUp fontSize="large" />}
          title="Quality Printing"
          description="Bright inks. Thick Paper. Precise cuts. We believe that quality
            printing matters. That quality printing matters."
        />
        <QualityCard
          icon={<LocalShipping fontSize="large" />}
          title="Timely Delivery"
          description="No printer is faster. Order today by 8:00pm EST and you can even get it by tomorrow."
        />
        <QualityCard
          icon={<Public fontSize="large" />}
          title="Eco-Minded"
          description="Overnight Prints is the greenest online printer in the world. See our Waterless technology."
        />
        <QualityCard
          icon={<Money fontSize="large" />}
          title="Money Back Guaranteed"
          description="Most sellers work with buyers to quickly resolve issues, but if a solution isn't reached, we can help."
        />
      </GridContainer>
    </>
  );
};

export default QualityAssurance;
