import React from "react";
import Wrapper from "../../Wrapper";

const CreateProduct = () => {
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
        <section>
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
                  CATEGORY ID:
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
                  PRICE:
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
                  PRODUCT IMAGE:
                  <input
                    type="file"
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
                CREATE PRODUCT
              </button>
            </div>
          </div>
        </section>
      </section>
    </Wrapper>
  );
};

export default CreateProduct;
