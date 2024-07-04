import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/CartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
    
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };


  return (
    <div>
      <div style={{ marginBottom: "70px" }}></div>
      <div className="row offset-2">
        {products.map((product) => (
          <div
            className="row card mx-2 mb-4 col-lg-3 col-md-4 col-sm-6"
            key={product.id}
            style={{ width: "18rem" }}
          >
            <img
              src={product.image}
              alt="img"
              width={"150px"}
              height={"150px"}
            />
            <div className="card-body">
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button
                className="btn btn-danger"
                onClick={() => handleAdd(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
