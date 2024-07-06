import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="container">
      <div style={{ marginBottom: "50px" }}></div>
      <h1 style={{ textAlign: "center", marginBottom: "17px" }}>Cart Items</h1>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={item.id}>
            <div className="card h-100">
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ width: "150px", height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <h5 className="card-text">${item.price}</h5>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
