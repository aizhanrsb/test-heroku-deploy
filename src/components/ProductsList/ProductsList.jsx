import { Button, Pagination } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Filters from "../../Filters/Filters";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(productsContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [price, setPrice] = useState([1, 10000]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, [search, price, page]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // console.log(price);
  // console.log(searchParams.get("q"));
  // console.log(window.location.search);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px",
        }}>
        <Button
          variant="outlined"
          style={{ marginTop: "30px" }}
          onClick={() => navigate("/add-product")}>
          Add Product
        </Button>
        {/* функция удочка  */}
        <Filters
          search={search}
          setSearch={setSearch}
          price={price}
          setPrice={setPrice}
        />
      </div>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}>
        <Pagination
          page={page}
          onChange={(e, value) => setPage(value)}
          count={pages}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
