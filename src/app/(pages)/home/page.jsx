"use client"
import React, { useEffect } from "react";
import Header from "../../Modules/Header/Header";
import Banner from "../../Modules/Banner/Banner";
import "animate.css";
import Cards from "../../Modules/Cards/Cards";
import PromotionBlock from "../../Modules/PromotionBlock/PromotionBlock";
import Footer from "../../Modules/Footer/Footer";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../Auth/Firebase";
import { useRouter } from "next/navigation";
import { fetchSanity } from "../../../API/axiosinstance";
const page = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      // const res = await fetch("https://fakestoreapi.com/products");
      const res = await fetchSanity()
      const data =  res?.data?.result
      console.log(data)
      dispatch({ type: "All", payload: data });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/home");
      }
    });
  });
 useEffect(()=>{
  fetchSanity()
 },[])
  return (
    <>
      <div className="bg-black h-10 animate__animated animate__fadeInDown">
        <h1 className="text-center text-lg pt-2 text-white font-light">
          SignUp Now And Get 25% Off To Your First Order{" "}
          <a href="/">SignUp Now</a>{" "}
        </h1>
      </div>
      <Header />
      <Banner />

      <h1 className="text-4xl font-extrabold text-black text-center underline mt-8">
        NEW ARRIVALS
      </h1>

      <Cards type={"newarrival"} />
      <hr className="border-2 mt-10" />
      <h1 className="text-4xl font-extrabold text-black text-center underline mt-8">
        TOP SELLING
      </h1>
      <Cards type={"topselling"} />

      <PromotionBlock />
      <Footer />
    </>
  );
};

export default page;
