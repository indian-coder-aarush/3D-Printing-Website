import React,{useState} from 'react'

function Order(){
    return(
        <div>
            <label htmlFor="Name">Name: </label>
            <input type="text" id="Name"/>
            <label htmlFor="Adress">Address: </label>
            <input type="text" id="Adress"/>
        </div>
    );
}

export default Order;