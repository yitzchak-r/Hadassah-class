import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useAppSelector } from "../../../store/hooks";
import { GetCategories } from "../../categories/utils/GetCategories";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next"; // Import useTranslation

const HomePage = () => {
  GetCategories();
  const categories = useAppSelector((store) => store.categories).categories;
  const navigate = useNavigate();
  const themeMode = useAppSelector((store) => store.themeMode.themeMode);
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <>
      <Container>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "60px",
            textAlign: "center", // Center text horizontally
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: "20px",
            }}
          >
            {t("home.title")} {/* Use translation for the title */}
          </Typography>
          <Box
            sx={{
              display: "flex",
              maxWidth: "700px",
              marginBottom: "60px",
              marginTop: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {categories.map((category, i) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "10px",
                }}
                key={i}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: themeMode ? "black" : "yellow",
                    textAlign: "center",
                  }}
                >
                  {category.category_name}
                </Typography>
                <Box
                  key={i}
                  sx={{
                    opacity: 0.7,
                    width: "200px",
                    height: "200px",
                    border: "none",
                    borderRadius: "5%",
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "cover",
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    transition:
                      "transform 0.3s ease, opacity 0.3s ease, rotate 0.3s ease",
                    alignItems: "center",
                    ":hover": {
                      transform: "scale(1.1)",
                      rotate: "-1deg",
                      opacity: 1,
                    },
                  }}
                  onClick={() => {
                    navigate(`/home/categories/${category.category_name}`);
                    const clicks = category.clicks;
                    const updatedData = {
                      clicks: clicks + 1,
                    };
                    axios
                      .put(
                        `http://localhost:3333/api/categories/${category.category_name}`,
                        updatedData
                      )
                      .then((res) => console.log(res.data))
                      .catch((error) => console.log(error));
                  }}
                ></Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
