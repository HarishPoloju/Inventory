import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import JsonShipment from "../JsonData/shipment.json";

const Editshipment = (props) => {
  const currentShipmentId = props.match.params.id;
  const history = useHistory();
  const [updateShipment, setUpdateShipment] = useState(JsonShipment.shipment);
  const [editShipmentData, setEditShipmentData] = useState(
    updateShipment.find((i) => i.id == currentShipmentId)
  );
  const handlesubmit = (e) => {
    e.preventDefault();
    setUpdateShipment(editShipmentData);
    setEditShipmentData(editShipmentData);
    console.log(editShipmentData);
    history.push("/", editShipmentData);
  };

  return (
    <>
      <div className="">
        <div className="container">
          <div className="mt-3">
            <form className="row" onSubmit={handlesubmit}>
              <div className="col-md-5 m-auto">
                <div className="updateList  p-4 pt-0">
                  <h4 className="p-3 mb-4">Edit List</h4>
                  <div className="mb-3">
                    <label className="form-label">Origin</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                      value={editShipmentData.origin}
                      onChange={(e) =>
                        setEditShipmentData({
                          ...editShipmentData,
                          origin: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Sku"
                      className="form-control"
                      value={editShipmentData.destination}
                      onChange={(e) =>
                        setEditShipmentData({
                          ...editShipmentData,
                          destination: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Quantity"
                      className="form-control"
                      value={editShipmentData.status}
                      onChange={(e) =>
                        setEditShipmentData({
                          ...editShipmentData,
                          status: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Estimated Delivery</label>
                    <input
                      type="date"
                      name="name"
                      placeholder="Enter Warehouse"
                      className="form-control"
                      value={editShipmentData.estimatedDelivery}
                      onChange={(e) =>
                        setEditShipmentData({
                          ...editShipmentData,
                          estimatedDelivery: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary Abtn">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editshipment;
