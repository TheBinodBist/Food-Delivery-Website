import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section className="profile">
      <main>
        <img src="/me.jpg"  alt="user" />
        <h5>Binod</h5>
        <div>
          <Link to="/admin/dashboard">Dashboard </Link>
        </div>
        <div>
          <Link to="/myorders">Orders</Link>
        </div>

        <button>Logout</button>
      </main>
    </section>
  );
};

export default Profile;
