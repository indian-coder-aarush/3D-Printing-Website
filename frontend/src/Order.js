import React,{useState} from 'react'

function Order(){
    const [formData, setFormData] = useState({
        Name: "",
        Address: ""
    });

    function Button_on_click(){
        let resetData = {};
        fields.forEach(f => {
            resetData[f.id] = "";
        });
        setFormData(resetData);
    }

    function Handle_change(event, field){
        setFormData(prev => ({
            ...prev,
            [field]: event.target.value
        }));
    }

    let fields = [
        {id:"Name",label:"Name",value:formData.Name ,type:'text'},
        {id:"Address",label:"Address",value:formData.Address,type:'text'},
    ]
    return(
        <div className = "page">
            <div className = "form-container">
                {fields.map((field)=>
                    <React.Fragment key={field.id}>
                        <label htmlFor = {field.id}>{field.label}</label>
                        <input className = "input_field"
                               id = {field.id}
                               onChange={(event) => Handle_change(event, field.id)}
                               value={field.value}
                               type = {field.type}/>
                    </React.Fragment>
                )}
            </div>
            <br/>
            <button className = "tab_buttons_order" onClick = {Button_on_click} >Submit</button>
        </div>
    );
}

export default Order;