import React from "react";
import "./App.css";
import { fetchDataRequest } from "./store/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { News } from "./components/News/News";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return <News />;
};

export default App;
