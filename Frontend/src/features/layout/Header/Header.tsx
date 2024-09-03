import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography, Box, IconButton, useMediaQuery } from "@mui/material";
import { HeaderNav } from "./HeaderNav";
import { useNavigate } from "react-router-dom";
import HeaderButtons from "./HeaderButtons";
import Cart from "../../cart/components/Cart";
import HeaderSignInButton from "./HeaderSignInButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setThemeMode } from "../../themes/themeModeSlice";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ handleLanguageChange }) => {
  return (
    <select onChange={(e) => handleLanguageChange(e.target.value)}>
      <option value="en">English 🇺🇸</option>
      <option value="he">עברית 🇮🇱</option>
    </select>
  );
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const dispatch = useAppDispatch();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  const isMobile = useMediaQuery("(max-width:630px)");

  const homeText = t("header.home");
  const categoriesText = t("header.categories");
  const productsText = t("header.products");
  const pages = [homeText, categoriesText, productsText];
  const mobilePages = !isMobile ? [homeText, categoriesText, productsText] : [];

  return (
    <AppBar position="fixed" sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex" }}>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                navigate("/home");
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {t("header.title")} {/* Use translation for the title */}
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <HeaderNav pages={pages} />
          </Box>
          <HeaderButtons pages={mobilePages} />
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <HeaderSignInButton />
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                dispatch(setThemeMode(!themeMode));
              }}
              color="inherit"
            >
              {themeMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            <LanguageSelector handleLanguageChange={handleLanguageChange} />
            <Cart />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
