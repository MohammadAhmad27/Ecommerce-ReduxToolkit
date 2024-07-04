import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div
      className="fixed-top bg-dark"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
      }}
    >
      <span style={{ color: "white", fontWeight: "400" }}>Redux Toolkit</span>
      <div>
        <Link
          to="/"
          style={{ fontWeight: "bolder", marginRight: "5px", color: "white" }}
        >
          Home
        </Link>
        <Link
          to="/cart"
          style={{ fontWeight: "bolder", marginRight: "10px", color: "white" }}
        >
          Cart
        </Link>
        <span style={{ color: "white", fontWeight: "400" }}>
          items: <span style={{ fontWeight: "bolder" }}>{items.length}</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
