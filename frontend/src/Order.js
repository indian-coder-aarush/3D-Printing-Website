import React,{useState} from 'react'

function Order(){
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');

    function Button_on_click(){
        setName("");
        setAddress("");
    }

    function Handle_change(event, field){
        if(field === "name"){
            setName(event.target.value);
        }
        else if(field === "address"){
            setAddress(event.target.value);
        }
    }
    return(
        <div>
            <label htmlFor="Name">Name: </label>
            <input type="text"
                   value = {Name}
                   id="Name"
                   onChange={(e) => Handle_change(e,"name")}/>

            <label htmlFor="Adress">Address: </label>
            <input type="text"
                   value = {Address}
                   id="Adress"
                   onChange={(e) => Handle_change(e,"address")}/>

            <button onClick = {Button_on_click} >Submit</button>

        </div>
    );
}

export default Order;