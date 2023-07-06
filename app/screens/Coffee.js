import React from "react";
import coffeees from "../config/coffeees";
import CoffeeDetailsScreen from "./CoffeeDetailsScreen";

const Coffee = ({ route }) => {
  const { coffee } = route.params;
  return <CoffeeDetailsScreen coffee={coffee} />;
};

export default Coffee;
