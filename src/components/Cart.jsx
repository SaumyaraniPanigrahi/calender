import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cartItems);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <h1>My Cart</h1>
      <button type="button" className="backbtn"
      onClick={goBack}
      >Back</button>
      
      {cart.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {cart.map((item) => (
            <div
              key={item.id}
              style={{ border: "1px solid #ccc", padding: "20px" }}
            >
              <img
                src={item.url}
                alt=""
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "1rem",
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
