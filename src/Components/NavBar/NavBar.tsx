import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowForwardIos } from "@mui/icons-material";

const navBar = [
  "Visiting Cards",
  "Stationary",
  "Marketing Tools",
  "Business Essentials",
  "Events",
  "Signage",
  "Gifts & Promotion",
  "Flex",
  "Apparels",
  "Digital Print",
];

const nav = [
  {
    label: "Visiting Cards",
    children: [{ label: "Metallic Cards" }, { label: "Texture Cards" }],
  },
  {
    label: "Stationary",
    children: [{ label: "value1" }, { label: "Value2" }],
  },
  { label: "Marketing Tools" },
  { label: "Business Essentials" },
  { label: "Events" },
  { label: "Signage" },
  { label: "Gifts & Promotion" },
  { label: "Flex" },
  { label: "Apparels" },
  { label: "Digital Print" },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default function CustomizedList() {
  console.log("object", nav);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            {/* <ListItemButton component="a" href="#customized-list"> */}
            <ListItemButton component="a">
              <ListItemIcon sx={{ marginRight: 2 }}>
                <MenuIcon fontSize="medium" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="CATEGORIES"
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <Box>
              {nav.map((item, index: number) => (
                <ListItemButton
                  key={index}
                  sx={{
                    py: 0,
                    minHeight: 32,
                    color: "rgba(0,0,0,.65)",
                    display: "flex",
                    margin: "0 !important",
                    width: "100%",
                    "&:hover": {
                      "& .listItem": {
                        display: "flex",
                        marginLeft: "200px",
                        position: "absolute",
                        width: "300px",
                        height: "100%",
                      },
                    },
                  }}
                  component="button"
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                  />
                  <ListItemIcon
                    sx={{
                      justifyContent: "flex-end",
                      marginLeft: "10px",
                    }}
                  >
                    <ArrowForwardIos sx={{ fontSize: 12 }} />
                  </ListItemIcon>
                  {item.children?.map((child) => (
                    <div className="listItem">{child.label}</div>
                  ))}
                </ListItemButton>
              ))}
            </Box>
          </FireNav>
        </Paper>
      </Box>
    </>
  );
}
