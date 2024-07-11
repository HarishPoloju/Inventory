import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inventory from "./inventory/Inventory.jsx";
import Update from "./inventory/Update.jsx";
import AddInventory from "./inventory/AddInventory.jsx";
import DataList from "./DataList.jsx";
import { Shipmenttrack } from "./shipment/Shipmenttrack.jsx";
import Editshipment from "./shipment/Editshipment.jsx";
import Suppliers from "./supplier/Suppliers.jsx";
import Addsupplier from "./supplier/Addsupplier.jsx";
import Updatesupplier from "./supplier/Updatesupplier.jsx";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Inventory /> */}
        <Switch>
          <Route exact path="/" component={DataList} />
          <Route exact path="/inventory/" component={Inventory} />
          <Route exact path="/addinventory/" component={AddInventory} />
          <Route exact path="/edit-inventrory/:id" component={Update} />
          <Route exact path="/shipmenttrack/" component={Shipmenttrack} />

          <Route
            exact
            path="/edit-shipmenttrack/:id"
            component={Editshipment}
          />
          <Route exact path="/supplier/" component={Suppliers} />
          <Route exact path="/addsupplier/" component={Addsupplier} />
          <Route exact path="/updatesupplier/:id" component={Updatesupplier} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
