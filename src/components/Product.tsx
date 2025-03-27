import { useNavigate } from "react-router";

export type productProps = {
  name: string;
  price: string;
  image: string;
  description: string;
  id: string;
};

function Product({ name, price, image, description, id }: productProps) {
  const navigate = useNavigate();

  function teste({ name, price, image, description, id }: productProps) {
    const query = new URLSearchParams();
    query.set("name", name);
    query.set("price", price.toString());
    query.set("image", image);
    query.set("description", description);
    query.set("id", id);
    navigate(`/product?${query.toString()}`);
    console.log("passou")
  }
  return (
    <div
      className="flex flex-col items-center justify-center bg-blue-700 text-white p-4 w-[300px] cursor-pointer rounded-xl transition-all duration-700 hover:w-[350px] hover:scale-95"
      onClick={() => teste({ name, price, image, description, id })}
    >
      <div className="w-3xs ">
        <img src={image} alt="" className="rounded-xl" />
      </div>
      <div className="text-center mt-3">
        <h2 className="text-2xl font-medium leading-7">{name}</h2>
        <span className="text-2xl flex justify-center leading-5">
          <p className="text-xs">R$</p>
          {price}
        </span>
      </div>
    </div>
  );
}

export default Product;
