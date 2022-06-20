import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../../contexts/productsContext";
import { CartContext } from "../../contexts/cartContext";
import { AddShoppingCart } from "@mui/icons-material";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productsContext);
  const { addProductToCart, checkProductInCart } = useContext(CartContext);
  const [checkProduct, setCheckProduct] = useState(checkProductInCart(item));

  // console.log(item);
  return (
    <Card sx={{ maxWidth: 345, margin: "10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.length > 20
            ? `${item.description.slice(0, 20)}...`
            : item.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {/*! icons added as components */}

        <Button size="small" onClick={() => deleteProduct(item.id)}>
          <DeleteIcon />
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          <EditIcon />
        </Button>
        <Button
          onClick={() => {
            addProductToCart(item);
            setCheckProduct(checkProductInCart(item));
          }}
          size="small">
          <AddShoppingCart color={checkProduct ? "secondary" : "primary"} />
        </Button>
        <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
          <InfoIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
