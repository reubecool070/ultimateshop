import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Product from "../Products/Product";

const ProductWrapper = (props: any) => {
  const { title } = props;

  return (
    <Paper sx={{ mt: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 2 }}
        >
          <Typography variant="body1" component="div" fontWeight={500}>
            {title}
          </Typography>
          <Stack direction="row">
            <IconButton>
              <KeyboardArrowLeft />
            </IconButton>
            <IconButton>
              <KeyboardArrowRight />
            </IconButton>
          </Stack>
        </Grid>
        <Divider variant="middle" />
        <Grid
          container
          spacing={{ xs: 2, md: 2, lg: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Product product={product} />
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProductWrapper;

const product = [
  {
    label: "Business Card - Single Side",
    description:
      "Standard Business Card to communicate your brand. Print your business card online and carry your well printed, best quality card.",
    Price: "Rs. 2000",
    SpecialPrice: "Rs. 1500",
    MinOrder: "2000 Pcs/Sqr",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    label: "Business Card - Single Side",
    description:
      "Standard Business Card to communicate your brand. Print your business card online and carry your well printed, best quality card.",
    Price: "Rs. 2000",
    SpecialPrice: "Rs. 1500",
    MinOrder: "2000 Pcs/Sqr",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    label: "Business Card - Single Side",
    description:
      "Standard Business Card to communicate your brand. Print your business card online and carry your well printed, best quality card.",
    Price: "Rs. 2000",
    SpecialPrice: "Rs. 1500",
    MinOrder: "2000 Pcs/Sqr",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    label: "Business Card - Single Side",
    description:
      "Standard Business Card to communicate your brand. Print your business card online and carry your well printed, best quality card.",
    Price: "Rs. 2000",
    SpecialPrice: "Rs. 1500",
    MinOrder: "2000 Pcs/Sqr",
    discount: "-50%",
    image:
      "https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
];
