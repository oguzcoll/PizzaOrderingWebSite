import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quia
        velit voluptatem quibusdam voluptatum labore cupiditate dolorem libero
        quos incidunt inventore vero natus voluptatibus illo sapiente autem,
        animi debitis culpa architecto nesciunt suscipit dolore dolorum. Dolore
        voluptates minima rerum quis.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;