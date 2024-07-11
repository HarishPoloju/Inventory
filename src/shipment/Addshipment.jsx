import React from "react";

const Addshipment = () => {
  return (
    <>
      <div className="">
        <div className="container">
          <div className="mt-3">
            <form className="row">
              <div className=" col-md-5 m-auto">
                <div className="AddList p-4 pt-0">
                  <h4 className="p-3 mb-4">Add List</h4>
                  <div className="mb-3">
                    <label className="form-label">Origin</label>
                    <input
                      type="text"
                      name="origin"
                      placeholder="Enter Origin"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input
                      type="text"
                      name="destination"
                      placeholder="Enter Destination"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <input
                      type="text"
                      name="status"
                      placeholder="Enter Status"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Estimated Delivery</label>
                    <input
                      type="text"
                      name="delivery"
                      placeholder="Enter Estimated Delivery"
                      className="form-control"
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

export default Addshipment;
