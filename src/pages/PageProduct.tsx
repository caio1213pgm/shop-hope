import Button from "../components/Button";
import Design from "../layout/Design";
import { useSearchParams } from "react-router";

function PageProduct() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const image = searchParams.get("image");
  const description = searchParams.get("description");
  return (
    <Design>
      <div className="bg-blue-300 flex justify-center pt-20 px-20">
        <div className="bg-white px-10 py-20 rounded flex items-start">
          <img src={image?.toString()} className="w-[400px]" />

          <div className="ml-10">
            <h1 className="text-4xl font-medium mb-1.5">{name}</h1>
            <p className="text-3xl flex"><p className="text-xl">R$</p>{price}</p>
            <p className="text-xl mb-2">{description}</p>
            <Button onClick={() => alert("carrinho")}>Adcionar ao carrinho</Button>
          </div>
        </div>
      </div>
    </Design>
  );
}

export default PageProduct;
