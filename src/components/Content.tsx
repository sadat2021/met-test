import React, { useEffect, useState } from "react";
import Item from "./Item";
import { getRequest } from "../helpers/request";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
const BaseAPI = "https://collectionapi.metmuseum.org/public/collection/v1/";

export default function Content() {
  const [objectIDS, setObjectIDs] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [finish, setFinish] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<
    {
      status: number;
      data?: {
        title: string;
        department: string;
        primaryImage: string;
        objectID: number;
      };
    }[]
  >([]);

  const getAllObjects = async () => {
    const response = await getRequest(`${BaseAPI}objects`);
    if (response.status === 200) {
      setTotal(response.data.total);
      setObjectIDs(response.data.objectIDs);
    } else {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    getAllObjects();
  }, []);
  useEffect(() => {
    if (objectIDS.length > 0) {
      getItems();
    }
  }, [objectIDS]);

  const getItems = async (page = 1) => {
    const countItmesPerPage = 20;
    const ids = [];
    for (
      let i = (page - 1) * countItmesPerPage;
      i < page * countItmesPerPage && i < objectIDS.length;
      i++
    ) {
      ids.push(objectIDS[i]);
      if (i === objectIDS.length - 1) {
        setFinish(true);
      }
    }

    const items = await Promise.all(
      Array.from(ids, (id) => getRequest(`${BaseAPI}objects/${id}`))
    );
    setItems(items);
  };

  return (
    <div className="container flex flex-row flex-wrap p-4">
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {items.map((item) => {
        if (item.status !== 200) {
          return null;
        }
        return (
          <Item
            key={item.data?.objectID}
            title={item.data?.title || ""}
            primaryImage={item.data?.primaryImage || ""}
            department={item.data?.department || ""}
          />
        );
      })}
    </div>
  );
}
