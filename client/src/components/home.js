import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the front Page!</h1>
      <h3>Sort by:</h3>
      <Link to="/api/budgets">
        <button>Budget</button>
      </Link>
      <Link to="/api/expenses">
        <button>Expense</button>
      </Link>
      <Link to="/api/categories">
        <button>Category</button>
      </Link>

      <br />
      <br />
      <div>
        <img
          src="http://doablefinance.com/wp-content/uploads/2015/01/Remember-These-Five-Items-When-Closing-Your-Project.jpg"
          alt="React keeps complaining about this img tag not having any alt text. So here it is."
        />
      </div>
    </div>
  );
};

export default Home;
