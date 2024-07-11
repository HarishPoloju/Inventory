import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import JsonmockData from "../JsonData/Inventory.json";

const Update = (props) => {
  const currentId = props.match.params.id;
  const history = useHistory();
  const [listOfInv, setListOfInv] = useState(JsonmockData.inventory);
  const [editData, setEditData] = useState(
    listOfInv.find((i) => i.id == currentId)
  );

  const handlesubmit = (e) => {
    e.preventDefault();
    setListOfInv(editData);
    setEditData(editData);
    console.log(editData);
    history.push("/", editData);
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
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Sku</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Sku"
                      className="form-control"
                      value={editData.sku}
                      onChange={(e) =>
                        setEditData({ ...editData, sku: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      name="name"
                      placeholder="Enter Quantity"
                      className="form-control"
                      value={editData.quantity}
                      onChange={(e) =>
                        setEditData({ ...editData, quantity: e.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Warehouse</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Warehouse"
                      className="form-control"
                      value={editData.warehouse}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          warehouse: e.target.value,
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

export default Update;
