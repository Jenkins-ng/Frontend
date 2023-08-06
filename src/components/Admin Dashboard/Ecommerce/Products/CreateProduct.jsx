import React, { useState, useEffect } from "react";
import Wrapper from "../../Wrapper";
import { useNavigate } from "react-router-dom";
import notifyError from "../../../../utils/notifyError";
import notifySuccess from "../../../../utils/notifySuccess";
import { apiPrivate as api } from "../../../../utils/api";

const CreateProduct = () => {
  // THE SELECTED IMAGE
  const [Image, setImage] = useState();
  // THE SELECTED IMAGE
  const [SentImage, setSentImage] = useState(null);

  // THIS IS THE CATEGORY TO BE CREATED
  const [category, setcategory] = useState("");

  // RETURNED CREATED CATEGORY FROM THE API
  const [thecategory, setthecategory] = useState([]);

  // CATEGORY SELECTED FROM THE DROPDOWN
  const [selectedCategory, setSelectedCategory] = useState("");

  // STATE FOR ALL THE PRODUCT FIELDS
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Title, setTitle] = useState("");

  const navigate = useNavigate();

  // FUNCTION FOR THE SELECTED CATEGORY
  const setCategory = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
    console.log(selectedCategory);
  };

  // FUNCTION FOR THE CHOSEN PRODUCT IMAGE
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
  // const ProductImage = (e) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setImage(img);
  // };

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

  // FUNCTION TO CREATE A NEW CATEGORY
  const CreateCategory = async (e) => {
    e.preventDefault();
    const sentdata = { category: category };
    try {
      const response = await api.post("/category", sentdata);
      console.log(sentdata);
      if (response.status === 201) {
        notifySuccess("category created successfully!");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
      notifyError(error.response?.message);
    }
  };

  // FUNCTION TO CREATE THE PRODUCT
  const CreateProduct = async (e) => {
    e.preventDefault();
    const data = {
      category_id: Number(selectedCategory),
      image: Image,
      title: Title,
      description: Description,
      price: Price,
    };
    console.log(data);

    try {
      const response = await api.post("/products", data);
      const result = await response.data;
      notifySuccess(result.message);
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
      <section className="my-4 grid ml-10">
        <h1 className="text-blue-400 font-bold text-2xl my-5">NEW PRODUCT</h1>

        {/* TO CREATE A CATEGORY */}

        <section>
          <h1 className="text-slate-400 font-bold text-xl">CREATE CATEGORY</h1>
          <div className="my-3">
            <form onSubmit={CreateCategory}>
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
                    value={category}
                    onChange={(e) => {
                      setcategory(e.target.value);
                    }}
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
        </section>

        {/* CREATE THE FULL PRODUCT FULL */}

        <section className="my-10">
          <h1 className="text-blue-400 font-bold text-2xl my-5">
            PRODUCT INFORMATION
          </h1>
          <form onSubmit={CreateProduct} enctype="multipart/form-data">
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
                      className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                    />
                  </label>
                </div>
                <div className="w-3/6">
                  <label
                    htmlFor="description"
                    className="text-slate-400 font-bold grid gap-2"
                  >
                    DESCRIPTION:
                    <input
                      type="text"
                      name="description"
                      id="descripton"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
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
                      className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
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
                    id="image"
                    onChange={ProductImage}
                    accept="image/*"
                    className="px-4 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full bg-slate-400"
                  />
                </label>
              </div>
              <div>
                {Image ? (
                  <div className="block h-[300px] overflow-hidden object-contain w-6/6">
                    <img
                      src={Image}
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
          </form>
        </section>
      </section>
    </Wrapper>
  );
};

export default CreateProduct;
