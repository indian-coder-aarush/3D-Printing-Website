import React, { useState } from "react";
import "./App.css";
import Order from "./Order";
import About from "./About";

function App() {
    const [activeTab, setActiveTab] = useState("Order");

    const tabs = [
        { id: "Order", label: "Order", content: <Order /> },
        { id: "My Orders", label: "My Orders", content: <div>Your orders will appear here</div> },
        { id: "About", label: "About", content: <About />}
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
