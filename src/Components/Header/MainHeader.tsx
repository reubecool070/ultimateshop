import { AppBar, Button, Container, Grid } from "@mui/material";
import React from "react";
import logo from "../../images/ultimatelogo.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/router";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2, 1, 1, 1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  backgroundColor: "c4c4c4",
}));

const MainHeader = () => {
  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange);
    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  });

  const headerColorChange = () => {
    // const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 20) {
      document.body.getElementsByTagName("nav")[0].classList.remove("header");
      document.body
        .getElementsByTagName("nav")[0]
        .classList.add("headerRemove");
    } else {
      document.body.getElementsByTagName("nav")[0].classList.add("header");
      document.body
        .getElementsByTagName("nav")[0]
        .classList.remove("headerRemove");
    }
  };

  return (
    <AppBar
      position="fixed"
      component="nav"
      sx={{ backgroundColor: "#E5E5E5", mt: "20px" }}
    >
      <Container>
        <Grid container>
          <Grid item lg={2} md={2} sm={3} xs={12}>
            <Item sx={{ cursor: "pointer" }}>
              <Image
                src={logo}
                alt=""
                placeholder="blur"
                // height={matches ? "" : 70}
                onClick={() => router.push("/")}
                width={200}
                height={50}
                objectFit="contain"
              />
            </Item>
          </Grid>
          <Grid item lg={8} md={8} sm={6} xs={12}>
            <Item>
              <Paper
                component="div"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  // mb: 2,
                  //   width: 400,
                }}
              >
                <IconButton sx={{ p: "0 10px" }} aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Products..."
                  inputProps={{ "aria-label": "search products" }}
                />
                <IconButton
                  type="submit"
                  sx={{
                    p: "0 10px",
                  }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Item>
          </Grid>
          <Grid item lg={2} md={2} sm={3} xs={12}>
            <Item>
              <Button
                startIcon={<AccountCircle />}
                color="primary"
                variant="text"
                sx={{ textTransform: "capitalize" }}
              >
                Hi, User
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default MainHeader;
