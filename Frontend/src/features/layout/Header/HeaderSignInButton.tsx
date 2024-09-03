import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderSignInButton = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Button
      color="inherit"
      onClick={() => {
        navigate("/signin");
      }}
      sx={{ marginLeft: "auto" }}
    >
      {t("Sign In.Sign In")}
    </Button>
  );
};

export default HeaderSignInButton;
