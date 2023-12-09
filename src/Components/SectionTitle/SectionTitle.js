import React from "react";

export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="text-center my-10 ">
      <h1 className="my-2 ">{subTitle}</h1>
      <h1 className="text-5xl uppercase font-bold  text-slate-700">{title}</h1>
    </div>
  );
}
