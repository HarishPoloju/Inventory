import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Addsupplier = () => {
  const [name, setName] = useState([]);
  const [contactperson, setContactPerson] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    setName(name);
    setContactPerson(contactperson);
    setPhone(phone);
    setEmail(email);
    console.log(name);
    console.log(contactperson);
    console.log(phone);
    console.log(email);
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
                    <label className="form-label">Contact Person</label>
                    <input
                      type="text"
                      name="ContactPerson"
                      placeholder="Enter Contact Person"
                      className="form-control"
                      value={contactperson}
                      onChange={(e) => setContactPerson(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      name="Phone"
                      placeholder="Enter Phone"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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

export default Addsupplier;
