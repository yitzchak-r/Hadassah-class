import { Grid, Link } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SignInUpLinkInterface } from "../interfaces/SignInUpLinkInterface";

const SignInUpLink: FC<SignInUpLinkInterface> = ({ text }) => {
  const navigate = useNavigate();
  let linkText = "";
  if (text === "signin") linkText = "Already have an account? Sign In";
  else {
    linkText = "Don't have an account? Sign Up";
  }
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Link
            variant="body2"
            onClick={() => {
              navigate("/" + text);
            }}
          >
            {linkText}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SignInUpLink;
