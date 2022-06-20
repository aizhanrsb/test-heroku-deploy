import React, { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cartContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteFromCart } =
    useContext(CartContext);
  useEffect(() => {
    getCart();
  }, []);
  const navigate = useNavigate();
  // console.log(cart);
  return (
    <Box paddingTop={"150px"}>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}>
                    Products
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Price
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Count
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
                    SubPrice
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Info
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart &&
                cart?.products.map(row => (
                  <TableRow
                    key={row.item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.item.title}
                    </TableCell>
                    <TableCell align="right">{row.item.price}</TableCell>

                    <TableCell align="right">
                      <IconButton
                        color="warning"
                        onClick={() =>
                          changeProductCount(row.count - 1, row.item.id)
                        }
                        aria-label="delete">
                        <RemoveIcon />
                      </IconButton>
                      {row.count}{" "}
                      <IconButton
                        color="primary"
                        onClick={() =>
                          changeProductCount(row.count + 1, row.item.id)
                        }
                        aria-label="delete">
                        <AddIcon />
                      </IconButton>
                    </TableCell>

                    <TableCell align="right">{row.subPrice}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="warning"
                        onClick={() => deleteFromCart(row.item.id)}
                        aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => navigate(`/products/${row.item.id}`)}
                        color="primary"
                        aria-label="delete">
                        <InfoIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "40px 20px",
          }}>
          <Typography variant="h4" component="h2">
            Total: {cart && cart?.totalPrice}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
