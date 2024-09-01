import {
  SwipeableDrawer,
  Button,
  Box,
  Divider,
  List,
  Typography,
  Badge,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductInCart from "./ProductInCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "../../../store/hooks";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { productInCart } from "../types/productInCart";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [localStorageCart, setLocalStorageCart] = useState([]);
  const cart = useAppSelector((state) => state.cart.cart);
  let quantity = 0;
  cart.forEach((product) => {
    quantity += product.quantity;
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setLocalStorageCart(JSON.parse(localStorage.getItem("cart") as string));
  }, [cart]);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event.type === "keydown") return;
      setOpen(open);
    };

  return (
    <Box>
      <Box component={Button} onClick={toggleDrawer(true)} variant="outlined">
        <Badge badgeContent={quantity} color="primary">
          <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
        </Badge>
      </Box>

      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!localStorageCart.length ? (
          <Box role="presentation">
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontWeight: "bold",
                color: "",
                mb: 4,
              }}
            >
              Your Cart is Empty
              <Box
                sx={{
                  width: 260,
                  height: 260,
                  backgroundImage: `url("https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png")`,
                  backgroundSize: "cover", // Set the background size
                  backgroundPosition: "center",
                  mb: 4,
                }}
              />
            </Typography>
          </Box>
        ) : (
          <>
            <Box sx={{ width: 260 }} role="presentation">
              {localStorageCart.map((productOnCart: productInCart) => (
                <React.Fragment key={productOnCart.product.title}>
                  <List>
                    <ProductInCart productCart={productOnCart} />
                  </List>
                  <Divider />
                </React.Fragment>
              ))}
            </Box>
            <Button
              onClick={() => {
                navigate("/24785trgfbhdncb");
              }}
              fullWidth
              variant="contained"
              sx={{ mb: 1 }}
            >
              <ShoppingCartCheckoutIcon sx={{ mr: 1 }} /> Checkout
            </Button>
          </>
        )}
      </SwipeableDrawer>
    </Box>
  );
};
export default Cart;
