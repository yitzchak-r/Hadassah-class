import { SetStateAction, useState } from "react";
import Header from "../../layout/Header/Header";
import { useAppSelector } from "../../../store/hooks";
import { ProductCard } from "../components/ProductCard";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { ProductCardInterface } from "../interfaces/ProductCardInterface";
import { Box, CssBaseline, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProductsPage = () => {
  const { t } = useTranslation();
  const products = useAppSelector((store) => store.products).products;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(
    (product: { title: string; category: string }) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
  );

  const handleSearchChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Box className="container" style={{ padding: "20px" }}>
        <Typography
          sx={{ textAlign: "center", marginBottom: "30px", marginTop: "5rem" }}
        ></Typography>

        <Box className="filter-section">
          <TextField
            label={t("products.searchPlaceholder")}
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>{t("products.selectedCategory")}</InputLabel>
            <Select value={selectedCategory} onChange={handleChange}>
              <MenuItem value={"All"} selected>
                {t("products.allCategories")}
              </MenuItem>
              <MenuItem value={"smartphones"}>
                {t("products.smartphones")}
              </MenuItem>
              <MenuItem value={"fragrances"}>
                {t("products.fragrances")}
              </MenuItem>
              <MenuItem value={"home-decoration"}>
                {t("products.homeDecoration")}
              </MenuItem>
              <MenuItem value={"groceries"}>{t("products.groceries")}</MenuItem>
              <MenuItem value={"laptops"}>{t("products.laptops")}</MenuItem>
              <MenuItem value={"skincare"}>{t("products.skincare")}</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="product-grid">
          {filteredProducts.map((product: ProductCardInterface) => (
            <Box key={product._id}>
              <ProductCard
                title={product.title}
                description={product.description}
                thumbnail={product.thumbnail}
                price={product.price}
                category={product.category}
                _id={product._id}
                rating={product.rating}
                stock={product.stock}
                brand={product.brand}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductsPage;
