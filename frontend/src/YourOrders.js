import OrderCard from "./OrderCard.js"

function YourOrders(orders){
    return(
        <div>
            {orders.map(order => {
                return(<OrderCard Name = {order.Name}
                                  Adress = {order.Adress}/>)
            })
            }
        </div>
    )
}

export default YourOrders;