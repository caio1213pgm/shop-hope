// import { Search } from "lucide-react";
import "../App.css";
import ButtonCart from "../components/ButtonCart";
import ContainerProducts from "../components/ContainerProducts";
import Product, { productProps } from "../components/Product";
import { useSearch } from "../context/searchContext";
import Design from "../layout/Design";
import { useEffect, useState } from "react";
import { Frown } from "lucide-react";

function LoadingItems() {
  return (
    <div className="flex items-center justify-center ">
      <span className="flex items-center gap-2 bg-blue-700 text-3xl text-white absolute p-2 rounded">
        Carregando itens...
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-loader-circle-icon lucide-loader-circle animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      </span>
    </div>
  );
}

function ProductNotFound() {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center gap-2 text-white text-2xl bg-blue-700 p-2 rounded">
        <Frown className="size-10" />
        <p>Desculpe, o produto desejado não está disponível no momento...</p>
      </div>
    </div>
  );
}

function Home() {
  const [productsApi, setProducts] = useState<productProps[]>([]);
  const [loading, setLoading] = useState(false);

  const { search } = useSearch();

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("erro ao buscar produtos", error);
      }
    };
    setTimeout(fetchProducts, 1000);
  }, []);

  const products = productsApi.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Design>
        <ContainerProducts>
          {loading ? (
            <LoadingItems />
          ) : products.length > 0 ? (
            products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                id={product.id}
              />
            ))
          ) : (
            <ProductNotFound />
          )}

          <ButtonCart />
        </ContainerProducts>
      </Design>
    </>
  );
}

export default Home;
