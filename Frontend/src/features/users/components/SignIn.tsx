import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FieldValues, useForm } from "react-hook-form";
import {
  emailValidet,
  passwordValidet,
} from "../../products/helpers/validation";
import { Copyright } from "../../layout/Copyright";
import SignInUpButton from "./SignInUpButton";
import { useTranslation } from "react-i18next";

export const SignIn = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (event: FieldValues) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("Sign In.Sign In")}
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label={t("Sign In.EmailAddress")}
            autoComplete="email"
            autoFocus
            {...register("email", emailValidet)}
            helperText={errors.email?.message?.toString()}
            error={errors.email ? true : false}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label={t("Sign In.Password")}
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", passwordValidet)}
            helperText={errors.password?.message?.toString()}
            error={errors.password ? true : false}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("Sign In.RememberMe")}
          />
          <SignInUpButton
            text={t("Sign In.Sign In")}
            isValid={isValid}
          ></SignInUpButton>
          {/* <SignInUpLink text="signup" /> */}
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
