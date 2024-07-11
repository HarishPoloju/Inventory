import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AddInventory = () => {
  const [name, setName] = useState([]);
  const [sku, setSku] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [warehouese, setWarehouse] = useState([]);
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    setName(name);
    setSku(sku);
    setQuantity(quantity);
    setWarehouse(warehouese);
    console.log(name);
    console.log(sku);
    console.log(quantity);
    console.log(warehouese);
    history.push("/");
  };
  return (
    <>
      <div className="">
        <div className="container">
          <div className="mt-3">
            <form className="row" onSubmit={handlesubmit}>
              <div className=" col-md-5 m-auto">
                <div className="AddList p-4 pt-0">
                  <h4 className="p-3 mb-4">Add List</h4>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Sku</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Sku"
                      className="form-control"
                      value={sku}
                      onChange={(e) => setSku(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Quantity"
                      className="form-control"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Warehouse</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Warehouse"
                      className="form-control"
                      value={warehouese}
                      onChange={(e) => setWarehouse(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-secondary Abtn">
                    Add Details
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

export default AddInventory;
