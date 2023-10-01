"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

import { apiPrivate as api } from "../../../utils/api";
import Wrapper from "../Wrapper";
import notifyError from "../../../utils/notifyError";
import ApplicationDetail from "./ApplicationDetail";
const imageurl = "https://api.jenkins.ng/storage/";

export const TableSample = ({ item, edit }) => {
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
      <Table.Cell>
        <Link
          // to={`/admin/ecommerce/product/edit/${item.id}`}
          className="font-medium text-blue-400 hover:underline dark:text-cyan-500"
          onClick={() => setEdit((prev) => !edit)}
        >
          <p>Details</p>
        </Link>
      </Table.Cell>
      <Table.Cell>
        <Link className="font-medium text-blue-400 hover:underline dark:text-cyan-500">
          <p>Delete</p>
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

const JobApplications = () => {
  const [IsError, setIsError] = useState(false);
  const [product, setProduct] = useState([]);
  const [edit, setEdit] = useState(false);

  async function fetch() {
    try {
      const response = await api.get("/job-applications");
      const result = await response.data.data;
      setProduct(result);
      console.log(result);
    } catch (error) {
      console.log(error.message);
      if (error.message === "Network Error") {
        notifyError(error.message);
        setIsError(true);
      }
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  // const Fetch = async () =>{
  //   try {
  //     const response = await api.delete("/")
  //   } catch (error) {

  //   }
  // }

  return (
    <Wrapper>
      {edit ? (
        <ApplicationDetail />
      ) : (
        <main className="my-4 ">
          <h1 className="text-blue-400 font-bold text-2xl my-5">
            JOB APPLICATIONS LIST
          </h1>

          {!product ? (
            <section>
              <h1 className="uppercase text-center text-xl text-slate-400 font-semibold">
                You have no Application yet!
              </h1>
            </section>
          ) : (
            <section>
              <Table striped>
                <Table.Head>
                  <Table.HeadCell className="text-center">
                    Applicants' ID
                  </Table.HeadCell>
                  <Table.HeadCell>Description</Table.HeadCell>
                  <Table.HeadCell>Category</Table.HeadCell>
                  <Table.HeadCell>Title</Table.HeadCell>
                  <Table.HeadCell>Logo</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  {/* <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                  </Table.HeadCell>
                  <Table.HeadCell>
                    <span className="sr-only">Delete</span>
                  </Table.HeadCell> */}
                  <Table.HeadCell>
                    <span className="sr-only">Details</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {product.map((items) => (
                    <TableSample
                      item={items}
                      key={items.id}
                      edit={edit}
                      setEdit={setEdit}
                    />
                  ))}
                </Table.Body>
              </Table>
            </section>
          )}
        </main>
      )}
    </Wrapper>
  );
};

export default JobApplications;
