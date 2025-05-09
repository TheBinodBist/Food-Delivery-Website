import React from "react";
import { Link } from "react-router-dom";

const ConfirmOrder = () => {
  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>

        <form>
          <div>
            <label>Cash On Delivery</label>
            <input type="radio" name="payment" />
          </div>
          <div>
            <label>Online</label>
            <input type="radio" name="payment" />
          </div>

          <Link to="/paymentsucess" className="link-button">
          <button type="submit">Place Order</button>
          </Link>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;