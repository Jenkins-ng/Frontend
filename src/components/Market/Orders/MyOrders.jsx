import React, { useEffect, useState } from "react";
import { apiPrivate as api } from "../../../utils/api";
import { Spinner, Table } from "flowbite-react";
import notifyError from "../../../utils/notifyError";
import notifySuccess from "../../../utils/notifySuccess";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../utils/cookie";
import useAuth from "../../../Hooks/useAuth";

const ImageUrl = "https://api.jenkins.ng/storage/";

export const TableSample = ({ item }) => {
  const OrderItems = JSON.parse(item.orderItems);
  const date = new Date(item.date);

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.referenceId}
      </Table.Cell>

      <Table.Cell>
        {date.toDateString()} {date.toLocaleTimeString()}
      </Table.Cell>
      <Table.Cell className="w-25">{item.address}</Table.Cell>
      <Table.Cell>{item.state}</Table.Cell>
      <Table.Cell>
        {/* {item.orderItems} */}

        {OrderItems?.map((item) => (
          <div key={item.product_id} className="grid gap-[2px] my-3">
            {/* <img src={ImageUrl + item.image} className="w-1/2" /> */}
            <p>Title: {item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: # {item.price}</p>
            <p>Total: # {item.total}</p>
          </div>
        ))}
      </Table.Cell>
      <Table.Cell>
        <p className="grid grid-flow-col gap-1"> # {item.totalPrice}</p>
      </Table.Cell>
      <Table.Cell>{item.paid === 1 ? "Yes" : "No"}</Table.Cell>
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
  const { setorder } = useAuth();
  const token = getCookie("token");

  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const Fetch = async () => {
      try {
        const response = await api.get("/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.data;
        notifySuccess(result.message);
        setData(result.data);
        setorder(result.data);
        setLoading(false);
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
        {Data && (
          <Table striped className="mt-4 ">
            <Table.Head className="text-center whitespace-nowrap">
              <Table.HeadCell className="text-center">
                Reference ID
              </Table.HeadCell>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Address</Table.HeadCell>
              <Table.HeadCell>State</Table.HeadCell>
              <Table.HeadCell>Order Item</Table.HeadCell>
              <Table.HeadCell>Total Price</Table.HeadCell>
              <Table.HeadCell>Paid</Table.HeadCell>
              {/* <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Delete</span>
              </Table.HeadCell> */}
            </Table.Head>
            <Table.Body className="divide-y">
              {Data.map((items) => (
                <TableSample item={items} key={items.id} />
              ))}
            </Table.Body>
          </Table>
        )}
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
