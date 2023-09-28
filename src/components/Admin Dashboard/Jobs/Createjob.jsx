import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import { useNavigate } from "react-router-dom";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";
import { apiPrivate as api } from "../../../utils/api";

const CreateJob = () => {
  // THE SELECTED IMAGE
  const [Image, setImage] = useState();
  // THE SELECTED IMAGE
  const [SentImage, setSentImage] = useState(null);

  // THE SELECTED CATEGORY TO BE CHANGED
  const [changedCategory, setChangedCategory] = useState("");

  // THE NEW CATEGORY NAME
  const [NewCategory, setNewCategory] = useState("");

  // THIS IS THE CATEGORY TO BE CREATED
  const [category, setcategory] = useState("");

  // RETURNED CREATED CATEGORY FROM THE API
  const [thecategory, setthecategory] = useState([]);

  // CATEGORY SELECTED FROM THE DROPDOWN
  const [selectedCategory, setSelectedCategory] = useState("");

  // STATE FOR ALL THE PRODUCT FIELDS
  const [Description, setDescription] = useState("");
  const [Title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  const navigate = useNavigate();

  // FUNCTION FOR THE SELECTED CATEGORY
  const setCategory = (e) => {
    e.preventDefault();
    setSelectedCategory(e.target.value);
    console.log(selectedCategory);
  };

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
        const response = await api.get("/jobs/category");
        setthecategory(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    setInterval(fetch(), 5000);
  }, []);

  // FUNCTION TO CREATE A NEW CATEGORY
  const CreateCategory = async (e) => {
    e.preventDefault();
    const sentdata = { name: category };
    try {
      const response = await api.post("/jobs/category", sentdata);
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

  // FUNCTION TO CREATE THE JOB
  const FormProduct = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("job_category_id", Number(selectedCategory));
    data.append("logo", Image.data); // what could be wrong here?
    data.append("title", Title);
    data.append("description", Description);
    data.append("company", company);
    data.append("location", location);
    data.append("salary", +salary);

    try {
      const response = await api.post("/jobs", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const result = await response.data;
      notifySuccess(result.message);
      notifySuccess("Product created Successfully!");
      setImage("");
      setSalary("");
      setDescription("");
      setSelectedCategory("");
      setCompany("");
      setLocation("");
      setTitle("");
      console.log(result);
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 401) {
        navigate("/signin");
      }
      notifyError(error.response.data.message);
    }
  };

  // FUNCTION TO CHANGE CATEGORY NAME
  const ChangeCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await api.patch(
        `/category/${changedCategory}`,
        NewCategory
      );
      const result = await response.data;
      console.log(changedCategory);
      notifySuccess("Category Edited Successfully!");
      setChangedCategory("");
      setNewCategory("");
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
        <h1 className="text-blue-400 font-bold text-2xl my-5">NEW JOB</h1>

        {/* TO CREATE A CATEGORY */}

        <section className="flex justify-between">
          <div>
            <h1 className="text-slate-400 font-bold text-xl">
              CREATE CATEGORY
            </h1>
            <form onSubmit={CreateCategory} className="my-3">
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
                    className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
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
          <div>
            <h1 className="text-slate-400 font-bold text-xl">EDIT CATEGORY</h1>
            <div className="flex justify-between items-start">
              <label
                htmlFor="category"
                className="text-slate-400 font-bold grid gap-2 my-3"
              >
                CATEGORY :
                <div className="w-full">
                  <select
                    name=""
                    id=""
                    onChange={(e) => {
                      e.preventDefault();
                      setChangedCategory(e.target.value);
                      console.log(changedCategory);
                    }}
                    className="px-4 text-base py-[3px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                  >
                    {thecategory.map((cat) => (
                      <option value={cat.id} key={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <form onSubmit={ChangeCategory} className="my-3">
                <div className="w-4/6">
                  <label
                    htmlFor="category"
                    className="text-slate-400 font-bold grid gap-2"
                  >
                    NEW CATEGORY:
                    <input
                      type="text"
                      name="category"
                      id="category"
                      value={NewCategory}
                      onChange={(e) => {
                        setNewCategory(e.target.value);
                      }}
                      className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                    />
                  </label>
                </div>
                <div className="text-right w-full">
                  <button
                    type="submit"
                    className="bg-blue-400 rounded-xl px-8 py-1 text-sm mt-5 text-white"
                  >
                    EDIT CATEGORY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* CREATE THE JOB POST */}

        <section className="my-10">
          <h1 className="text-blue-400 font-bold text-2xl my-5">
            JOB INFORMATION
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
                            {cat.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                </div>
                <div className="w-3/6">
                  <label
                    htmlFor="companyName"
                    className="text-slate-400 font-bold grid gap-2"
                  >
                    COMPANY NAME:
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      onChange={(e) => {
                        setCompany(e.target.value);
                      }}
                      className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                    />
                  </label>
                </div>
                <div className="w-3/6">
                  <label
                    htmlFor="location"
                    className="text-slate-400 font-bold grid gap-2"
                  >
                    LOCATION:
                    <input
                      type="text"
                      name="location"
                      id="location"
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <section className="w-3/6">
                <div className="w-3/6 mb-10">
                  <label
                    htmlFor="image"
                    className="text-slate-400 font-bold grid gap-2"
                  >
                    COMPANY LOGO:
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
                  <div className="block max-h overflow-hidden object-contain w-4/6">
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
              <div className="w-3/6 mt-3">
                <label
                  htmlFor="salary"
                  className="text-slate-400 font-bold grid gap-2"
                >
                  SALARY:
                  <input
                    type="text"
                    name="salary"
                    id="salary"
                    onChange={(e) => {
                      setSalary(e.target.value);
                    }}
                    className="px-2 text-base py-[2px] border-slate-500 outline-none border-2 rounded-xl text-slate-500 w-full"
                  />
                </label>
              </div>
            </div>
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
                  className="rounded"
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
                POST JOB
              </button>
            </div>
          </form>
        </section>
      </section>
    </Wrapper>
  );
};

export default CreateJob;
