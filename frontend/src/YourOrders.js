import OrderCard from "./OrderCard.js"

function YourOrders(orders){
    return(
        <div>
            {orders.map(order => {
                return(<OrderCard Name = order.name
                                  Adress = order.adress/>)
            })
            }
        </div>
    )
}

export default YourOrders;