"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [inputVal, SetInputVal] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const Data = useSelector((state) => state.All_Product_Reducer.AllProducts);
  const numberOfProd = useSelector((state) => state.CartReducer.Cart);
  console.log(numberOfProd);
  const handleValue = () => {
    const FilterProd = Data.filter((item) => {
      return item.title?.toLowerCase().includes(inputVal.toLowerCase());
    });
    if (FilterProd) {
      dispatch({ type: "select", payload: FilterProd });
      router.push("/details");
    }
  };

  return (
    <>
      <div className="flex justify-around mt-10 animate__animated animate__fadeIn">
        <div className="cursor-pointer">
          <img
            src="./SHOP.CO.png"
            onClick={() => router.push("/home")}
            alt=""
          />
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="text-2xl font-light hover:scale-105 duration-200">
              <Link href={"/home"}>Shop</Link>
            </li>
            <li className="text-2xl font-light hover:scale-105 duration-200">
              <Link href={"/home"}>OnSale</Link>
            </li>
            <li className="text-2xl font-light hover:scale-105 duration-200">
              <Link href={"/home"}>NewArrivals</Link>
            </li>
            <li className="text-2xl font-light hover:scale-105 duration-200">
              <Link href={"/home"}>Brands</Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <input
            onChange={(e) => SetInputVal(e.target.value)}
            type="text"
            placeholder="Search For Products.."
            className="w-96 text-xl font-light pl-4 bg-[#F0F0F0] rounded-lg border outline-none"
          />
          <CiSearch
            className="relative right-8 top-1 text-2xl cursor-pointer"
            onClick={handleValue}
          />
        </div>
        <div className="flex gap-4">
          <RiAccountCircleFill
            onClick={() => router.push("/logout")}
            className="text-4xl font-bold hover:scale-105 duration-300 cursor-pointer"
          />
          <div className="flex">
            <CiShoppingCart
              onClick={() => router.push("/cart")}
              className="text-4xl font-bold hover:scale-105 duration-300 cursor-pointer"
            />
            <p className="text-xl text-red-700">
              {Number(numberOfProd.length)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
