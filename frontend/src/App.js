import React, {useState} from 'react';
import Order from "./Order";

function App() {
    const [Tab, setTab] = useState("Order");
    let tab;
    if (Tab === "Order") {
        tab = <Order />;
    }
    else if (Tab === "My Orders") {
        tab = <div></div>;
    }
    return (
    <div >
        <button onClick = {() => setTab("Order")}>Order</button>
        <button onClick = {() => setTab("My Orders")}>My Orders</button>
        <div>{tab}</div>
    </div>
  );
}

export default App;
