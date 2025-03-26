import { itemProps, useCartContext } from "./cartContext";
function useCart() {
	const { cart, addProduct, removeProduct } = useCartContext();

	function addItemToCart(product: itemProps) {
		try {
			addProduct(product);
		} catch (error) {
			console.error("algo deu errado, tente novamente", error);
		}
	}

	function removeItemFromCart(product: itemProps) {
		try {
			removeProduct(product);
		} catch (error) {
			console.error("algo deu errado, tente novamente", error);
		}
	}

	return {
		removeItemFromCart,
		addItemToCart,
		cart,
	};
}

export default useCart;
