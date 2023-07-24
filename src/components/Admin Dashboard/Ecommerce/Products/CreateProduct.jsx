import React, { useState } from "react";
import Wrapper from "../../Wrapper";

const CreateProduct = () => {
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const setCategory = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
    console.log(e.target.files[0]);
  };
  const ProductImage = (event) => {
    const target = event.target;
    if (target && target.files) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const fileContents = e.target?.result;
        setImage(fileContents);
      };
    }
  };

  return (
    <Wrapper>
      <section className="my-4">
        <h1 className="text-blue-400 font-bold text-2xl my-5">NEW PRODUCT</h1>
        <div>
          <h1 className="text-slate-400 font-bold text-xl">CREATE CATEGORY</h1>
          <div className="my-3">
            <form action="">
              <div className="w-3/6">
                <label
                  htmlFor="category"
                  className="text-slate-400 font-bold grid gap-2"
                >
                  CATEGORY:
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                  />
                </label>
              </div>
              <div className="text-right w-3/6">
                <button
                  type="submit"
                  className="bg-blue-400 rounded-xl px-8 py-1 text-sm mt-5 text-white"
                >
                  CREATE CATEGORY
                </button>
              </div>
            </form>
          </div>
        </div>
        <section className="my-10">
          <h1 className="text-blue-400 font-bold text-2xl my-5">
            PRODUCT INFORMATION
          </h1>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="w-3/6">
                <label
                  htmlFor="category"
                  className="text-slate-400 font-bold grid gap-2"
                >
                  TITLE:
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                  />
                </label>
              </div>
              <div className="w-3/6">
                <label
                  htmlFor="category"
                  className="text-slate-400 font-bold grid gap-2"
                >
                  DESCRIPTION:
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                  />
                </label>
              </div>
              <div className="w-3/6">
                <label
                  htmlFor="category"
                  className="text-slate-400 font-bold grid gap-2"
                >
                  CATEGORY :
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                  />
                  <div>
                    <select
                      name=""
                      id=""
                      onChange={setCategory}
                      className="px-4 text-base py-[3px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                    >
                      <option value=""></option>
                    </select>
                  </div>
                </label>
              </div>
              <div className="w-3/6">
                <label
                  htmlFor="category"
                  className="text-slate-400 font-bold grid gap-2"
                >
                  PRICE:
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                  />
                </label>
              </div>
            </div>
            <div className="text-right w-5/6">
              <button
                type="submit"
                className="bg-blue-400 rounded-xl px-8 py-1 text-sm mt-5 text-white"
              >
                NEXT
              </button>
            </div>
          </div>
        </section>
        <section className="w-3/6 my-10">
          <div className="w-3/6 mb-10">
            <label
              htmlFor="category"
              className="text-slate-400 font-bold grid gap-2"
            >
              PRODUCT IMAGE:
              <input
                type="file"
                name="category"
                id="category"
                onChange={ProductImage}
                accept="*image/png image/jpeg image/webp"
                className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full bg-slate-400"
              />
            </label>
          </div>
          <div>
            {image ? (
              <div className="block h-[400px] overflow-hidden object-contain w-6/6">
                <img
                  src={image}
                  alt="Product image"
                  className="object-contain block"
                />
              </div>
            ) : (
              <p className="text-red-600 text-lg">No Image Selected</p>
            )}
          </div>
        </section>
        <div className="text-right w-5/6">
          <button
            type="submit"
            className="bg-blue-400 rounded-xl px-8 py-1 text-sm mt-5 text-white"
          >
            CREATE PRODUCT
          </button>
        </div>
      </section>
    </Wrapper>
  );
};

export default CreateProduct;
