import React from "react";

const Dynamic = async ({ params }) => {
  const productid = await params;
  console.log(productid);
  return (
    <div>
      <h1 className="text-3xl">This is dynamic Page</h1>
    </div>
  );
};

export default Dynamic;
