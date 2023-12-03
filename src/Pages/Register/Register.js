import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthContextProvider";
import Swal from "sweetalert2";
export default function Register() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [photoUrl, setPhotoUrl] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    const username = data.username;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    console.log("img", image);
    createUser(email, password)
      .then((userCredential) => {
        fetch(
          `https://api.imgbb.com/1/upload?expiration=600&key=415a76abfe306db0da9996712828a611`,
          {
            method: "POST",
            body: formData,
          }
        )
          .then((res) => res.json())
          .then((imageData) => {
            const imgUrl = imageData.data.display_url;
            if (imageData.success) {
              setPhotoUrl(imgUrl);
              updateUserProfile(username, imgUrl)
                .then(() => console.log("successful !!"))
                .catch((err) => console.log(err));

              console.log(imageData.data.display_url);
            }
          });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are successfully Registered !",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(userCredential.user);
      })
      .catch((err) => {
        Swal.fire({
          title: `Error occurred : ${err.message.slice(
            17,
            err.message.length - 2
          )}`,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now</h1>
          <p className="py-6">Please Register and jon us !</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                {...register("username")}
                type="text"
                placeholder="User Name"
                className="input input-bordered"
                required
              />
            </div>

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

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Upload Image</span>
              </label>
              <input
                {...register("image")}
                type="file"
                placeholder=""
                className="input input-bordered p-2"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn" style={{ backgroundColor: "#3fd0d4" }}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
