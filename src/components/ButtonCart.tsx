import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

function ButtonCart() {
	const navigate = useNavigate();

	return (
		<div className="fixed bottom-8 right-10 group/item">
			<button
				className="flex items-center px-4 py-3 bg-blue-800 rounded-2xl text-white text- gap-1.5 cursor-pointer"
				onClick={() => navigate("/cart")}>
				<span className="group-hover/item:transition-all group-hover/item:duration-300 group/edit hidden group-hover/item:block group-hover/item:text-2xl ">
					<p className="">Ir para o carrinho</p>
				</span>
				<ShoppingCart className="size-8 group-hover/item:size-10" />
			</button>
		</div>
	);
}

export default ButtonCart;
