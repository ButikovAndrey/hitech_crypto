import React, { useEffect } from "react";
import { useStore } from "../../store";

export const Graph = () => {
  const { coinsStore } = useStore();

  useEffect(() => {
    console.log("useEffect Graph");
  }, []);

  return <div />;
};
