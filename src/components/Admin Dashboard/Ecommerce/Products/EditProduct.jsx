import React, { useState, useEffect } from "react";
import Wrapper from "../../Wrapper";
import { useParams } from "react-router-dom";
import { apiPrivate as api } from "../../../../utils/api";

const EditProduct = () => {
  // STATE FOR ALL THE PRODUCT FIELDS
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Title, setTitle] = useState("");
  // CATEGORY SELECTED FROM THE DROPDOWN
  const [selectedCategory, setSelectedCategory] = useState("");
  // THIS IS THE CATEGORY TO BE CREATED
  const [category, setCategory] = useState("");
  // RETURNED CREATED CATEGORY FROM THE API
  const [thecategory, setthecategory] = useState([]);
  const params = useParams();
  const parameter = params.id;
  console.log(parameter);

  const ProductImage = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
    console.log(Image);
  };

  // FUNCTION THAT RETRIEVES CREATED PRODUCT EACH TIME A NEW ONE IS PRODUCED
  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get("/category");
        setthecategory(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    fetch();
  }, [category]);

  // FUNCTION TO CREATE THE PRODUCT
  const FormProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category_id", Number(selectedCategory));
    data.append("image", Image.data); // what could be wrong here?
    data.append("title", Title);
    data.append("description", Description);
    data.append("price", Price);

    try {
      const response = await api.patch(`/products/${parameter}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const result = await response.data;
      notifySuccess(result.message);
      notifySuccess("Product created Successfully!");

      console.log(result);
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 401) {
        navigate("/signin");
      }
      notifyError(error.response.data.message);
    }
  };

  return (
    <Wrapper>
      <main>
        <section className="my-4 ml-10">
          <h1 className="text-blue-400 font-bold text-2xl my-5">
            EDIT PRODUCT
          </h1>
        </section>
        <section>
          <section className="my-10">
            <h1 className="text-blue-400 font-bold text-2xl my-5">
              PRODUCT INFORMATION
            </h1>
            <form onSubmit={FormProduct} encType="multipart/form-data">
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="w-3/6">
                    <label
                      htmlFor="title"
                      className="text-slate-400 font-bold grid gap-2"
                    >
                      TITLE:
                      <input
                        type="text"
                        value={Title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        name="title"
                        id="title"
                        className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                      />
                    </label>
                  </div>

                  <div className="w-3/6">
                    <label
                      htmlFor="category"
                      className="text-slate-400 font-bold grid gap-2"
                    >
                      CATEGORY :
                      <div>
                        <select
                          name=""
                          id=""
                          onChange={setCategory}
                          className="px-4 text-base py-[3px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                        >
                          {thecategory.map((cat) => (
                            <option value={cat.id} key={cat.id}>
                              {cat.category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>
                  </div>
                  <div className="w-3/6">
                    <label
                      htmlFor="price"
                      className="text-slate-400 font-bold grid gap-2"
                    >
                      PRICE:
                      <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <section className="w-3/6">
                <div className="w-3/6 mb-10">
                  <label
                    htmlFor="image"
                    className="text-slate-400 font-bold grid gap-2"
                  >
                    PRODUCT IMAGE:
                    <input
                      type="file"
                      name="image"
                      multiple
                      id="image"
                      onChange={ProductImage}
                      accept="image/*"
                      className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full bg-slate-400"
                    />
                  </label>
                </div>

                {Image ? (
                  <div className="block max-h overflow-hidden object-contain w-6/6">
                    <img
                      src={Image.preview}
                      alt="Product image"
                      className="object-contain block"
                    />
                  </div>
                ) : (
                  <p className="text-red-600 text-lg">No Image Selected</p>
                )}
              </section>
              <div className="w-5/6">
                <label
                  htmlFor="description"
                  className="text-slate-400 font-bold grid gap-2"
                >
                  DESCRIPTION:
                  {/* <input
                      type="text"
                      name="description"
                      id="descripton"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                    /> */}
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={Description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </label>
              </div>
              <div className="text-right w-5/6">
                <button
                  type="submit"
                  className="bg-blue-400 rounded-xl px-8 py-1 text-sm mt-5 text-white"
                >
                  EDIT PRODUCT
                </button>
              </div>
            </form>
          </section>
        </section>
      </main>
    </Wrapper>
  );
};

export default EditProduct;
