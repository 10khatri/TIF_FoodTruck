import React from "react";
import Styles from "../Styles/FoodCard.module.css";
export default function FoodCard({ food }) {
  return (
    <div className={Styles.food_card}>
      <img src={food.url} alt={food.name} />
      <div className={Styles.food_card_info}>
        <h3>{food.name}</h3>
        <p>{food.Descripion}</p>
        <a className={Styles.read_more_button} href="#">
          Read More
        </a>
      </div>
    </div>
  );
}
