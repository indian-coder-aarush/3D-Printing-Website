function About({activeTab, setActiveTab}) {
    return(
        <div>
            <h1 className = "Heading">3D PRINTERS</h1>
            <h1 className = "Slogan"> Print what you imagine. <br/> In 3D. </h1>
            <button className = "tab_buttons_order"
                    onClick = {()=>setActiveTab("Order")}>Order Now</button>
        </div>
    );
}

export default About;