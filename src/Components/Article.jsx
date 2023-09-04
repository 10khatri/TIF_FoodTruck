import React, { useState } from "react";
import { Foods } from "../Data/Food";
import FoodCard from "./FoodCard";
import Styles from "../Styles/Article.module.css";

export default function Article() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, Foods.length);
  const currentCards = Foods.slice(startIndex, endIndex);
  const totalPages = Math.ceil(Foods.length / cardsPerPage);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={Styles.article_container}>
      <h1>Latest Articles</h1>
      <div className={Styles.article_food_card_container}>
        {currentCards.map((food) => {
          return <FoodCard key={food._id} food={food} />;
        })}
      </div>
      <div className={Styles.action_buttons}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  );
}
