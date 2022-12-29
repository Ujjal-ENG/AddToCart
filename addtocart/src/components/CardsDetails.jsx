import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  const { id } = useParams();
  // console.log(id);

  const getData = useSelector((state) => state.cartReducers.carts);

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
                        300 TK
                      </p>
                    </td>
                    <td>
                      <p>
                        <strong>Rating: </strong>{" "}
                        <span className="text-center"> {el.rating}⭐</span>
                      </p>

                      <p>
                        <strong>Order Review: </strong>{" "}
                        <h6 className="text-center">
                          {el.somedata}
                        </h6>
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
