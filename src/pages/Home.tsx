import "../App.css";
import ButtonCart from "../components/ButtonCart";
import ContainerProducts from "../components/ContainerProducts";
import Product, { productProps } from "../components/Product";
import Design from "../layout/Design";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState<productProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("erro ao buscar produtos", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Design>
        <ContainerProducts>
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              id={product.id}
            />
          ))}
        </ContainerProducts>
        <ButtonCart />
      </Design>
    </>
  );
}

export default Home;
