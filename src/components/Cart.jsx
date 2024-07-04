import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <div style={{ marginBottom: "50px" }}></div>
      <h1 style={{ textAlign: "center", marginBottom: "17px" }}>Cart Items</h1>
      <div className="row offset-2">
        {cartItems.map((item) => (
          <div
            className="row card mx-2 mb-4 col-lg-3 col-md-4 col-sm-6"
            key={item.id}
            style={{ width: "18rem" }}
          >
            <img src={item.image} alt="img" width={"150px"} height={"150px"} />
            <div className="card-body">
              <h4>{item.title}</h4>
              <h5>{item.price}</h5>
              <button
                className="btn btn-danger"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
