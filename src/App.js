import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SkeletonCard from "./components/SkeletonCard";
import ItemCard from "./components/ItemCard";
import Data from "./Data.json";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container className="py-5">
      <Header />
      {loading && <SkeletonCard />}
      {!loading && <ItemCard list={Data} />}
      <Footer />
    </Container>
  );
};

export default App;
