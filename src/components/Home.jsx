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
    <div className="container">
      <div style={{ marginBottom: "70px" }}></div>
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{ width: "150px", height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <h5 className="card-text">${product.price}</h5>
                <button
                  className="btn btn-danger"
                  onClick={() => handleAdd(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
