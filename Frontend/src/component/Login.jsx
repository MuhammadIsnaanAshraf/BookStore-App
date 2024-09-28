import { useForm } from "react-hook-form";

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3001/user/login", userInfo)
      .then((result) => {
        console.log(result.data);
        if (result.data) {
          toast.success("Login successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        console.log(result.data);
        localStorage.setItem("User", JSON.stringify(result.data.user));
      })
      .catch((err) => {
        const Error = err.response.data.message;
        toast.error("Error : " + Error);
      });
  };
  return (
    <div className="dark:bg-slate-900 dark:text-white rounded-md">
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white rounded-md">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm  btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
            <div className="mt-4">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 px-3 py-1 w-3/4 outline-none border-2 rounded-md text-black"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 px-3 py-1 w-3/4 outline-none border-2 rounded-md text-black"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around items-center mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 ">
                Login
              </button>
              <p>
                Not registered ?
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Sinup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
