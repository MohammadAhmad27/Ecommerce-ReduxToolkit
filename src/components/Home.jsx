import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <div>
        <div style={{marginBottom: "70px"}}></div>
      <div className="row">
        {products.map((product) => (
          <div
            className="row card mx-2 mb-2"
            key={product.id}
            style={{width: "18rem"}}
          >
            <img src={product.image} alt="img" width={"200px"} />
            <div className="card-body">
              <h4>{product.title}</h4>
              <h5>{product.price}</h5>
              <button className="btn btn-danger">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
