import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/Slices/WishlistSlice";
import { FaHeart } from "react-icons/fa";

const Product = ({ post }) => {
  const { cart, wishlist } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isLiked = wishlist.some((p) => p.id === post.id);

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  const toggleWishlist = () => {
    if (isLiked) {
      dispatch(removeFromWishlist(post.id));
      toast.error("Removed from Wishlist");
    } else {
      dispatch(addToWishlist(post));
      toast.success("Added to Wishlist");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 rounded-xl outline relative shadow-md bg-white">
      {/* Wishlist Heart Icon */}
      <button 
        onClick={toggleWishlist}
        className="absolute top-3 right-3 text-2xl focus:outline-none transition-transform active:scale-90 cursor-pointer"
      >
        <FaHeart className={isLiked ? "text-red-500" : "text-gray-300 hover:text-red-400"} />
      </button>

      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full object-contain" alt={post.title} />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in cursor-pointer"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;