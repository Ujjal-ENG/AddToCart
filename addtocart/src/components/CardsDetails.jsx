import React from "react";
import Table from "react-bootstrap/Table";

const CardsDetails = () => {
  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
      <section className="container mt-3">
        <div className="itemsDetails">
          <div className="items_img">
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/5/110155/811c01a5430d50d3260f77917da99e12_o2_featured_v2.jpg"
              alt="oneImg"
            />
          </div>
          <div className="details">
            <Table>
              <td>
                <p>
                  <strong>Restaurant: </strong>
                  Masala Luschi with Vajhi
                </p>
                <p>
                  <strong>Price: </strong>
                  300 TK
                </p>
                <p>
                  <strong>Dishes: </strong>
                  North Indian,Biryani,Muglai
                </p>
                <p>
                  <strong>Total: </strong>
                  300 TK
                </p>
              </td>
              <td>
                <p>
                  <strong>Rating: </strong>{" "}
                  <span className="text-center"> 3.5⭐</span>
                </p>

                <p>
                  <strong>Order Review: </strong>{" "}
                  <h6 className="text-center">
                    1174+ order placed from here recently
                  </h6>
                </p>

                <p>
                  <strong>Rating: </strong>{" "}
                  <i
                    className="fas fa-trash"
                    style={{ color: "red", fontSize: 20, cursor: "pointer" }}
                  ></i>
                </p>
              </td>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
