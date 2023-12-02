import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthContextProvider";
import Swal from "sweetalert2";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful !",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200 w-full ">
      <div className="hero-content flex-col min-w-[400px]">
        <div className="text-center lg:text-left">
          <h1
            className="text-5xl font-bold text-center py-8  border-b-2 "
            style={{ borderBottomColor: "#3fd0d4" }}
          >
            Login now
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none mt-5 ">
          <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <p className=" text-red-700 mt-2">
                  Please Provide a valid email address
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  pattern:
                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <p className=" text-red-700 mt-2">
                  Password should contain uppercase,lowercase letters,
                  punctuation,and must be at least length of 8
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
