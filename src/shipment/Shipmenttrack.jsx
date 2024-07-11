import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { editshipment } from "../shipment/Editshipment.jsx";

import JsonShipment from "../JsonData/shipment.json";

export const Shipmenttrack = () => {
  const [shipmentInv, setShipmentInv] = useState(JsonShipment.shipment);
  const handleDeleteClick = (id) => {
    const data = shipmentInv.filter((i) => i.id != id);
    setShipmentInv(data);
  };
  return (
    <>
      <div className="dataList mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Shipment</h3>
                {/* <div>
                  <Link
                    to="/addshipmenttrack/"
                    className="btn btn-secondary Abtn"
                  >
                    Add Shipment
                  </Link>
                </div> */}
              </div>
              <div>
                <table className="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Origin</th>
                      <th>Destination</th>
                      <th>Status</th>
                      <th>Estimated Delivery</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipmentInv.map((shipment, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{shipment.origin}</td>
                        <td>{shipment.destination}</td>
                        <td>{shipment.status}</td>
                        <td>{shipment.estimatedDelivery}</td>
                        <td className="d-flex gap-3">
                          <span>
                            <Link to={`/edit-shipmenttrack/${shipment.id}`}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="#000"
                                className="bi bi-pencil-square"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path
                                  fillRule="evenodd"
                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                                />
                              </svg>
                            </Link>
                          </span>
                          <span onClick={() => handleDeleteClick(shipment.id)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#f00"
                              className="bi bi-archive"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                            </svg>
                          </span>
                          <></>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
