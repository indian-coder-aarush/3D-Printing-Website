import OrderCard from "./OrderCard.js"

function YourOrders({orders}){
    console.log(orders);
    return(
        <div>
            {orders.map(order => {
                return(<OrderCard Name = {order.Name}
                                  Address = {order.Address}/>)
            })
            }
        </div>
    )
}

export default YourOrders;