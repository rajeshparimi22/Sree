import "./Products.css";

// ✅ Correct extensions (.png)
import textile from "../assets/images/geo-textile.png";
import mat from "../assets/images/coir-mat.png";
import peat from "../assets/images/coco-peat.png";
import loops from "../assets/images/coir-loops.png";
import fiber from "../assets/images/raw-fiber.png";

const productData = [
  {
    name: "Geo Textile",
    image: textile,
    use: "Used for soil erosion control and road construction",
    price: "₹120 / sq.m",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Coir Mat",
    image: mat,
    use: "Used for slope stabilization and retaining walls",
    price: "₹90 / sq.m",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "Coir Loops",
    image: loops,
    use: "Prevents soil erosion in agriculture fields",
    price: "₹90 / sq.m",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Raw Fiber",
    image: fiber,
    use: "Used for gardening and plant growth",
    price: "₹500 / block",
    rating: "⭐⭐⭐⭐",
  },
  {
    name: "Coco Peat",
    image: peat,
    use: "Used in packaging and agriculture",
    price: "₹20 / kg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

function Products() {
  return (
    <div className="products">
      <h2>Our Products</h2>

      <div className="product-container">
        {productData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>{item.use}</p>
            <h4>{item.price}</h4>
            <p className="rating">{item.rating}</p>

            <button onClick={() => alert("Product added to cart 🛒")}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;