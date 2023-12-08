import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContextProvider";
import Swal from "sweetalert2";

export default function MyCart() {
  const { cart, user, myCart } = useContext(AuthContext);
  myCart();
  const sum = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (id) => {
    fetch(
      `https://travel-vista-server-side.vercel.app/orders/${user.email}/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          myCart();
          Swal.fire({
            title: "Booking Details Deleted!",
            text: "",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <h1 className="text-5xl text-slate-700 text-center my-8"> My Cart</h1>

      <div className="overflow-x-auto min-h-screen p-5 m-5  bg-blue-100">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Tour Package Name</th>
              <th>Name & Phone</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.src}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.phone}
                  </span>
                </td>
                <td className="text-success font-bold">{item.price} $</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn text-red-500 btn-ghost btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="text-secondary font-bold">{sum}$</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}
