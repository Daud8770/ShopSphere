import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(clearCart());
    toast.success("Order Placed Successfully! 🎉");
    navigate("/");
  }

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Shipping & Payment Details</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="Enter your full name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            required
            name="phone"
            value={formData.phone}
            onChange={changeHandler}
            placeholder="Enter 10-digit mobile number"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Street Address</label>
          <textarea
            required
            name="address"
            value={formData.address}
            onChange={changeHandler}
            placeholder="House no, street, landmark"
            rows="2"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">City</label>
            <input
              type="text"
              required
              name="city"
              value={formData.city}
              onChange={changeHandler}
              placeholder="City"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Pincode</label>
            <input
              type="text"
              required
              name="pincode"
              value={formData.pincode}
              onChange={changeHandler}
              placeholder="Pincode"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={changeHandler}
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600 bg-white"
          >
            <option value="cod">Cash on Delivery (COD)</option>
            <option value="online">Online Payment (Mock UPI / Card)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-bold p-3 rounded-lg transition duration-300 mt-4 cursor-pointer"
        >
          Place Order Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;