import React from "react";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useRouter } from "next/router";

const Product = (props: any) => {
  const { product } = props;
  const router = useRouter();

  return (
    <>
      {product.map((item: any, index: number) => (
        <Grid item xs={12} sm={4} md={3} lg={3} key={index}>
          <ImageButton onClick={() => router.push("/product")} focusRipple>
            <Item
              sx={{
                cursor: "pointer",
                "&:hover": {
                  boxShadow: 8,
                },
              }}
            >
              <CardMedia
                component="img"
                alt="product"
                height="140"
                image={item.image}
              />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image
                sx={{
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Typography
                  component="span"
                  variant="subtitle1"
                  className="button-text"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  View Details
                </Typography>
              </Image>

              <CardContent sx={{ px: 0 }}>
                <Typography
                  align="left"
                  gutterBottom
                  variant="body1"
                  fontWeight={500}
                  component="div"
                >
                  {item.label.substring(0, 30)}
                </Typography>
                <Typography
                  align="left"
                  color="primary"
                  variant="body1"
                  fontWeight={500}
                  component="div"
                >
                  {item.SpecialPrice}
                </Typography>
                <Grid container direction="row">
                  <Typography
                    align="left"
                    color="text.secondary"
                    variant="body2"
                    component="div"
                    sx={{
                      textDecoration: "line-through solid #757575",
                      mr: 1,
                    }}
                  >
                    {item.Price}
                  </Typography>
                  <Typography
                    align="left"
                    color="text.secondary"
                    variant="body2"
                    component="div"
                  >
                    {item.discount}
                  </Typography>
                </Grid>
                <Typography align="left" variant="body2" color="text.secondary">
                  {item.description.substring(0, 30)}
                </Typography>
              </CardContent>
            </Item>
          </ImageButton>
        </Grid>
      ))}
    </>
  );
};

export default Product;

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  width: "100% !important",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .button-text": {
      border: "4px solid currentColor",
      opacity: 1,
      zIndex: 99,
    },
  },
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}));

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  marginTop: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  color: theme.palette.common.white,
}));

const Item = styled(Card)(({ theme }) => ({
  maxWidth: 335,
  width: "100%",
  boxShadow: "none",
  padding: theme.spacing(2),
}));
