import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";

import CardsData from "./CardsData.jsx";
import { ADD } from "./redux/actions/action.js";

const Cards = () => {
  const [data, setData] = useState(CardsData);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);

    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 style={{ textAlign: "center" }}>Add to Cart Items</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((item) => {
          return (
            <>
              <Card style={{ width: "22rem" }} className="card">
                <Card.Img
                  variant="top"
                  src={item.imgdata}
                  style={{ height: "16rem" }}
                  className="img"
                />
                <Card.Body>
                  <Card.Title>{item.rname}</Card.Title>
                  <Card.Text>
                    <h6>
                      Price: <span>৳ </span>
                      {item.price}
                    </h6>
                  </Card.Text>
                  <div className="button-div">
                    <Button
                      variant="primary col-12"
                      className="button"
                      onClick={() => send(item)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
