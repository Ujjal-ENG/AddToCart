/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DELETE, ADD, REMOVE } from "./redux/actions/action";

const CardsDetails = () => {
  const history = useNavigate();

  const [data, setData] = useState([]);
  // console.log(data);
  const { id } = useParams();
  // console.log(id);

  const getData = useSelector((state) => state.cartReducers.carts);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const compare = () => {
    let comapreData = getData.filter((e) => {
      // eslint-disable-next-line eqeqeq
      return e.id == id;
    });
    setData(comapreData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dispath = useDispatch();

  const send = (e) => {
    // console.log(e);

    dispath(ADD(e));
  };

  const deletePro = (id) => {
    dispath(DELETE(id));
    history("/");
  };

  const removeItem = (item) => {
    dispath(REMOVE(item));
  };

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
      <section className="container mt-3">
        <div className="itemsDetails">
          {data.map((el) => {
            return (
              <>
                <div className="items_img">
                  <img src={el.imgdata} alt="oneImg" />
                </div>

                <div>
                  <iframe
                    src="https://embed.lottiefiles.com/animation/88882"
                    className="item_if"
                  ></iframe>
                </div>
                <div className="details pd-3">
                  <Table>
                    <td>
                      <p>
                        <strong>Restaurant: </strong>
                        {el.rname}
                      </p>
                      <p>
                        <strong>Price: </strong>
                        {el.price} TK
                      </p>
                      <p>
                        <strong>Dishes: </strong>
                        {el.address}
                      </p>
                      <p>
                        <strong>Total: </strong>
                        {el.price * el.qnty} TK
                      </p>

                      <div
                        className="mt-5 d-flex justify-content-between align-items-center"
                        style={{
                          width: 100,
                          cursor: "pointer",
                          background: "#ddd",
                          color: "#111",
                        }}
                      >
                        <span
                          style={{ fontSize: 24 }}
                          onClick={
                            el.qnty <= 1
                              ? deletePro(el.id)
                              : () => removeItem(el)
                          }
                        >
                          {" "}
                          -{" "}
                        </span>
                        <span style={{ fontSize: 24 }}> {el.qnty} </span>
                        <span style={{ fontSize: 24 }} onClick={() => send(el)}>
                          {" "}
                          +{" "}
                        </span>
                      </div>
                    </td>
                    <td>
                      <p>
                        <strong>Rating: </strong>{" "}
                        <span className="text-center"> {el.rating}⭐</span>
                      </p>

                      <p>
                        <strong>Order Review: </strong>{" "}
                        <h6 className="text-center">{el.somedata}</h6>
                      </p>

                      <p>
                        <strong>RemoveItem: </strong>{" "}
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => deletePro(el.id)}
                        ></i>
                      </p>
                    </td>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
