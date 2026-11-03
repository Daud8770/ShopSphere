import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state);

  return (
    <div>
      {wishlist.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] my-6">
          {wishlist.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your Wishlist is Empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;