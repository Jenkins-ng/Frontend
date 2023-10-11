import React, { useEffect, useState } from "react";
import { apiPrivate as api } from "../../../utils/api";
import { Spinner } from "flowbite-react";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";
import { useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

export const TableSample = ({ item }) => {
  console.log(item);
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.id}
      </Table.Cell>

      <Table.Cell>{item.description}</Table.Cell>
      <Table.Cell>{item.category}</Table.Cell>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>
        <img src={imageurl + item.image} className="w-1/2" />
      </Table.Cell>
      <Table.Cell>{item.price}</Table.Cell>
      {/* <Table.Cell>
        <Link
          to={`/admin/ecommerce/product/edit/${item.id}`}
          className="font-medium text-blue-400 hover:underline dark:text-cyan-500"
        >
          <p>Edit</p>
        </Link>
      </Table.Cell>
      <Table.Cell>
        <Link className="font-medium text-blue-400 hover:underline dark:text-cyan-500">
          <p>Delete</p>
        </Link>
      </Table.Cell> */}
    </Table.Row>
  );
};

const MyOrders = () => {
  const [Data, setData] = useState();
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await api.get("/orders");
        const result = await response.data;
        notifySuccess(result.message);
        setData([result]);
        setLoading(false);
        console.log(result);
      } catch (error) {
        notifyError(error.response.message);
        console.log(error);
        if (error.response.status === 401) {
          navigate("/signin");
        }
        if (error.response.status === 401) {
          navigate("/signin");
        }
      }
    };

    Fetch();
  }, []);
  return (
    <main className="Hide p-5">
      <h1 className="pt-10 font-bold text-blue-400">MY ORDERS</h1>
      <div>
        {/* {Data ? (
          Data.map((data) => <TableSample key={data.id} item={data} />)
        ) : (
          
        )} */}
        {Data && Data.map((data) => <TableSample key={data.id} item={data} />)}
        {!Data && !Loading && (
          <p className="text-lg font-bold text-slate-400 uppercase my-2">
            You Have No Item Yet!
          </p>
        )}
      </div>
      {Loading && (
        <div className="m-auto text-center w-auto my-5">
          <Spinner size="lg" />
        </div>
      )}
    </main>
  );
};

export default MyOrders;
