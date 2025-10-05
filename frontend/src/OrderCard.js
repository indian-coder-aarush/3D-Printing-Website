function OrderCard(props) {
    return (
      <div className="order-card">
          <h1>Name: props.Name</h1>
          <p>Address to send: props.Address</p>
      </div>
    );
}

export default OrderCard;