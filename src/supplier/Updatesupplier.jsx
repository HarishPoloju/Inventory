import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import JsonSupplier from "../JsonData/supplier.json";

const Updatesupplier = (props) => {
  const currentSupplierId = props.match.params.id;
  const history = useHistory();
  const [updateSupplier, setUpdateSupplier] = useState(JsonSupplier.suppliers);
  const [editSupplierData, setEditSupplierData] = useState(
    updateSupplier.find((i) => i.id == currentSupplierId)
  );
  const handlesubmit = (e) => {
    e.preventDefault();
    setUpdateSupplier(editSupplierData);
    setEditSupplierData(editSupplierData);
    console.log(editSupplierData);
    history.push("/", editSupplierData);
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
                      value={editSupplierData.name}
                      onChange={(e) =>
                        setEditSupplierData({
                          ...editSupplierData,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Person</label>
                    <input
                      type="text"
                      name="contactperson"
                      placeholder="Enter Contact Person"
                      className="form-control"
                      value={editSupplierData.contactperson}
                      onChange={(e) =>
                        setEditSupplierData({
                          ...editSupplierData,
                          contactperson: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter Phone"
                      className="form-control"
                      value={editSupplierData.phone}
                      onChange={(e) =>
                        setEditSupplierData({
                          ...editSupplierData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className="form-control"
                      value={editSupplierData.email}
                      onChange={(e) =>
                        setEditSupplierData({
                          ...editSupplierData,
                          email: e.target.value,
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

export default Updatesupplier;
