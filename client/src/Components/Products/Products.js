import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://i.ytimg.com/vi/SlfYTmUVgEQ/maxresdefault.jpg",
      title: "Handmade Bugs",
      description:
        "The Insects are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living.",
      category: "Decoration",
      price: 20,
    },
    {
      id: 2,
      image: "https://5.imimg.com/data5/SELLER/Default/2023/7/321446208/QX/SP/ER/1801251/jute-flower-bags-500x500.png",
      title: "Jute Bags",
      description:
        "The Jute Bags are handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living.",
      category: "Bags",
      price: 50,
    },
    {
      id: 3,
      image: "https://5.imimg.com/data5/BU/NG/MY-56064500/pottery-from-mud-handicraft-of-kutch.jpg",
      title: "Pot",
      description:
        "The Pot is handcrafted by our kids and can be pasted on a wall. They are sustainable as well as long living.",
      category: "Decoration",
      price: 100,
    },
  ]);

  const navigate = useNavigate();

  function handleDetails(itemId) {
    const product = products.find((prod) => prod.id === itemId);
    navigate("/product", { state: product });
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="app-div">
      <div className="pt-3">
        <input
          type="text"
          className="form-control w-50 mx-auto Shadow fs-3 mb-5"
          placeholder="🔍Our Products"
          onChange={handleSearch}
        />
        <div className="row m-2">
          {products
            .filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div
                key={item.id}
                className="col-md-4 mb-4 d-flex justify-content-center"
              >
                <div className="card Card bg-white p-3 Shadow">
                  <img
                    src={item.image}
                    className="card-img"
                    alt={item.title}
                    style={{ width: '200px', height: '200px' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6>{item.category}</h6>
                  </div>
                  <div
                    className="btn details mx-auto"
                    onClick={() => handleDetails(item.id)}
                  >
                    Details
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
