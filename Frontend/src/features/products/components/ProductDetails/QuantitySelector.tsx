import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface QuantitySelectorProps {
  value: number;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
        {t("cart.Quantity")}
      </Typography>
      <TextField
        select
        value={value}
        onChange={onChange}
        sx={{ width: "100%", marginTop: 1 }}
      >
        {[1, 2, 3, 4, 5].map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default QuantitySelector;
