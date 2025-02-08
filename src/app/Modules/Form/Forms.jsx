"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiShow } from "react-icons/bi";
import {
  auth,
  onAuthStateChanged,
  provider,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider, // Importing GoogleAuthProvider
} from "../../../Auth/Firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types"; // Import PropTypes

const Forms = ({ data }) => {
  const router = useRouter();
  let num;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userCredenatials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (userCredenatials) {
        toast.success("SignUp Successfully");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const GoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        toast.success("SignUp Successfully");
      })
      .catch((error) => {
        // Handling errors
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const showPass = () => {
    if (num === 1) {
      document.getElementById("pass").type = "text";
      num = 0;
    } else {
      document.getElementById("pass").type = "password";
      num = 1;
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/login");
      }
    });
  });

  return (
    <>
      <div className="bg-[#6358DC] flex">
        <div className="w-1/2 flex justify-center items-center h-screen">
          <img
            src="./Illustration.png"
            className="w-[500px] object-contain"
            alt=""
          />
        </div>
        <div className="w-1/2 border border-x-white flex flex-col items-center justify-center gap-4">
          <div>
            <h1 className="text-5xl font-extrabold">
              Welcome To <br />{" "}
              <span className="text-5xl text-white">SHOP.CO</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <button
              className="flex  justify-center items-center w-96 text-2xl font-light border gap-2 border-black rounded-lg transition-transform hover:scale-105 duration-200"
              onClick={GoogleAuth}
            >
              {data?.login || data?.signup} With Google
              <FcGoogle />
            </button>
          </div>
          <p className="text-2xl font-light text-center">or</p>

          <div>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="w-96 h-12 text-xl font-light pl-4"
                type="email"
                placeholder="Enter Email"
                {...register("email", { required: true })}
              />

              <div className="flex">
                <input
                  id="pass"
                  className="w-96 h-12 text-xl font-light pl-4"
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
                <BiShow
                  className="relative right-10 top-3 text-2xl cursor-pointer"
                  onClick={showPass}
                />
              </div>

              <input
                className="w-96 h-12 text-2xl font-light text-center text-white bg-black transition-transform hover:scale-105 duration-200 cursor-pointer"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

Forms.propTypes = {
  data: PropTypes.shape({
    login: PropTypes.string,
    signup: PropTypes.string,
  }).isRequired,
};

export default Forms;
