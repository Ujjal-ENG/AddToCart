/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DELETE } from "./redux/actions/action";
import { useDispatch } from "react-redux";

const Header = () => {
  const getData = useSelector((state) => state.cartReducers.carts);

  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispath = useDispatch();

  const deletePro = (id) => {
    dispath(DELETE(id));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const totalPrice = () => {
    let price = 0;
    // eslint-disable-next-line array-callback-return
    getData.map((el) => {
      price = el.price + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    totalPrice();
  }, [totalPrice]);

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart the Item
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getData.length}
            color="primary"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          style={{
            marginTop: "30px",
            transition: "all 0.2s",
          }}
        >
          {getData.length > 0 ? (
            <div
              className="cardDetails"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((data) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink
                              to={`/cart/${data.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={data.imgdata}
                                alt="cartImg"
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <h5>{data.rname}</h5>
                            <h4>Price: {data.price} TK</h4>
                            <p>Quantity: {data.qnty}</p>
                          </td>
                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <i
                              className="fas fa-trash"
                              onClick={() => deletePro(data.id)}
                            ></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total: {price} TK</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card-details">
              <i className="fas fa-close smallclose" onClick={handleClose}></i>
              <p>Your Carts is Empty</p>
              <iframe
                src="https://embed.lottiefiles.com/animation/71390"
                className="iframe"
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
