import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

const LanguageSelector = ({ handleLanguageChange }) => {
  // מצב לניהול הבחירה אם נבחרה שפה או לא
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // פונקציה לעדכון הבחירה
  const handleChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage); // עדכון המצב עם השפה שנבחרה
    handleLanguageChange(newLanguage); // קריאה לפונקציה שנשלחת כפרופ
  };

  return (
    <FormControl
      variant="outlined"
      sx={{
        minWidth: 65,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
        },
      }}
    >
      <InputLabel id="language-select-label">
        {/* הצגת האייקון רק אם לא נבחרה שפה */}
        {selectedLanguage === "" && (
          <LanguageRoundedIcon style={{ color: "white" }} />
        )}
      </InputLabel>
      <Select
        style={{ color: "white" }}
        labelId="language-select-label"
        id="language-select"
        onChange={handleChange}
        defaultValue=""
      >
        <MenuItem value="he">עברית 🇮🇱</MenuItem> {/* החלפת שפה לעברית */}
        <MenuItem value="en">English 🇺🇸</MenuItem> {/* החלפת שפה לאנגלית */}
        <MenuItem value="ar">العربية 🇪🇬</MenuItem> {/* החלפת שפה לערבית */}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
