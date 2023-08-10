import React, { useEffect, useState, useContext } from "react";
import { Spinner } from "flowbite-react";
import { useParams, useNavigate } from "react-router-dom";
import { apiPrivate as api } from "../../../utils/api";
import notifySuccess from "../../../utils/notifySuccess";
import notifyError from "../../../utils/notifyError";
import { CartContext } from "../Context/Cart";

const ImageUrl = "https://api.jenkins.ng/storage/";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const params = useParams();
  const history = useNavigate();
  const parameter = params.slug;
  // console.log(parameter);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.get(`/products/${parameter}`);
        const result = await response.data.data;
        setProduct([result]);
        console.log(result);
      } catch (error) {
        // console.log(error.response);
      }
    }
    fetch();
  }, []);

  console.log(product);
  // console.log(data);
  return (
    <section className="top-[68px] relative overflow-scroll h-[calc(100% - 68px)] Hide">
      {!product && (
        <div className="text-center my-10 m-auto">
          <Spinner size="xl" />
        </div>
      )}
      {product && (
        <section className="w-[90%] m-auto mb-10">
          {product.map((items) => (
            <div
              key={items.id}
              className="md:flex justify-between items-center mt-20 rounded-lg gap-5"
            >
              <div>
                <div>
                  <img src={ImageUrl + items.image} alt="" />
                </div>
              </div>
              <div className="my-5">
                <div>
                  <h1 className="text-2xl font-bold text-blue-400">
                    {items.title}
                  </h1>
                  <div className="text-lg">
                    <p>{items.category}</p>
                    <p>{items.description}</p>
                    <p className="font-bold text-blue-400">
                      <span>
                        <strike>#</strike>{" "}
                      </span>
                      {parseInt(items.price, 10)}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="my-4 flex items-center gap-4">
                    <span
                      className="material-symbols-outlined cursor-pointer bg-slate-400 w-auto p-2 rounded-full text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        if (quantity <= 0) {
                          return;
                        } else {
                          setQuantity(quantity - 1);
                        }
                      }}
                    >
                      remove
                    </span>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      value={quantity}
                      className="text-center outline-none rounded-xl"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span
                      className="material-symbols-outlined cursor-pointer bg-slate-400 w-auto p-2 rounded-full text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        setQuantity(quantity + 1);
                      }}
                    >
                      add
                    </span>
                  </div>
                  <div className="flex gap-5 text-lg font-regular">
                    <p>Total :</p>
                    <p>
                      <strike># </strike> {quantity * +items.price}
                    </p>
                  </div>
                  <div className="flex md:justify-between gap-8 my-2">
                    <button
                      type="submit"
                      className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
                    >
                      Buy Now
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-[4px] bg-slate-400 rounded-xl hover:bg-blue-400 text-white"
                      onClick={() => {
                        addToCart(items, quantity);
                        notifySuccess("Items added successfully!");
                        history("/shop/product");
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div>
            <h1 className="text-xl md:text-2xl text-blue-400 font-bold my-3 mt-10">
              Related Items
            </h1>
          </div>
        </section>
      )}
    </section>
  );
};

export default ProductDetails;
