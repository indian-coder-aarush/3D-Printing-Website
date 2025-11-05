import React, { useState } from "react";
import "./App.css";
import Order from "./Order";
import About from "./About";
import YourOrders from "./YourOrders";

function App() {
    const [activeTab, setActiveTab] = useState("About");
    const [orders, setOrders] = useState([]);

    const tabs = [
        { id: "Order", label: "Order", content: <Order HandleChange={setOrders} prevOrders={orders}/> },
        { id: "My Orders", label: "My Orders", content: <YourOrders orders = {orders}/> },
        { id: "About", label: "About", content: <About activeTab={activeTab} setActiveTab={setActiveTab}/>}
    ];

    return (
        <div>
            <div className="Button-Container">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab_buttons ${activeTab === tab.id ? "is_active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: "20px" }}>
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
}

export default App;
