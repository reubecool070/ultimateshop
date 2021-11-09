import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ArrowForwardIos } from "@mui/icons-material";

const nav = [
  {
    label: "Business Cards",
    children: [
      {
        label: "Standard",
        children: [
          { label: "Business Card-Single Side" },
          { label: "Business Card-Both Side" },
        ],
      },
      {
        label: "Metallic/Texture",
        children: [
          { label: "Metallic Card-Single Side" },
          { label: "Metallic Card-Both Side" },
        ],
      },
    ],
  },
  {
    label: "Stationary",
    children: [
      { label: "Letterhead" },
      { label: "Certificates" },
      { label: "ID Card" },
      { label: "ID Holder" },
      { label: "ID Belt/Lanyard" },
      { label: "Envelope" },
      { label: "Exercise Copy" },
    ],
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

const NewNavbar = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Paper elevation={0} sx={{ width: 288 }}>
          <List component="div" disablePadding>
            <ListItemButton component="a">
              <ListItemIcon sx={{ marginRight: 1 }}>
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
              {nav.map((elem: any, index: number) => (
                <ListItemButton
                  key={index}
                  sx={{
                    py: 0,
                    minHeight: 32,
                    color: "rgba(0,0,0,.65)",
                    display: "flex",
                    margin: "0 !important",
                    width: "100%",
                  }}
                  component="button"
                  className="dropdown"
                >
                  <ListItemText
                    primary={elem.label}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: "medium",
                    }}
                    className="dropbtn"
                  />
                  <ListItemIcon
                    sx={{
                      justifyContent: "flex-end",
                      marginLeft: "10px",
                    }}
                  >
                    <ArrowForwardIos sx={{ fontSize: 12 }} />
                  </ListItemIcon>
                  <div className="dropdown-content">
                    {elem?.children?.map((item: any, Zindex: number) => (
                      <ListItemButton
                        key={Zindex}
                        sx={{
                          py: 0,
                          minHeight: 32,
                          color: "rgba(0,0,0,.65)",
                          display: "flex",
                          margin: "0 !important",
                          width: "100%",
                        }}
                        component="a"
                        className="children-button"
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
                        <div className="children-content">
                          {item?.children?.map((child: any) => (
                            <ListItemButton
                              key={child.label}
                              sx={{
                                py: 0,
                                minHeight: 32,
                                color: "rgba(0,0,0,.65)",
                                display: "flex",
                                margin: "0 !important",
                                width: "100%",
                              }}
                              component="a"
                            >
                              <ListItemText
                                primary={child.label}
                                // primary={"Single Side Card"}
                                primaryTypographyProps={{
                                  fontSize: 14,
                                  fontWeight: "medium",
                                }}
                              />
                            </ListItemButton>
                          ))}
                        </div>
                      </ListItemButton>
                    ))}
                  </div>
                </ListItemButton>
              ))}
            </Box>
          </List>
        </Paper>
      </Box>
      {/* <Box>
        <Paper elevation={0}>

        </Paper>
      </Box> */}
    </>
  );
};

export default NewNavbar;
