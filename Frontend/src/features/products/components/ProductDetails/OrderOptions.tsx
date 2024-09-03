import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const OrderOptions: React.FC = () => {
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const { t } = useTranslation();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryOption(event.target.value);
  };
  return (
    <>
      <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
        {t("cart.orderOptions")}
      </Typography>
      <TextField
        select
        value={deliveryOption}
        onChange={handleChange}
        sx={{ width: "100%", marginTop: 1 }}
      >
        <MenuItem value="standard">{t("cart.standardDelivery")}</MenuItem>
        <MenuItem value="express">{t("cart.expressDelivery")}</MenuItem>
      </TextField>
    </>
  );
};
export default OrderOptions;
