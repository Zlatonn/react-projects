import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveToCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="flex items-center justify-between p-5 bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={cartItem?.image} alt={cartItem?.title} className="h-28 rounded-lg" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="w-40 truncate text-xl text-white font-bold">{cartItem?.title}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
          <div>
            <button onClick={handleRemoveToCart} className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
