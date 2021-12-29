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
  const [loading, setLoading] = useState<boolean>(true);

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
  return (
    <div className="container flex flex-row flex-wrap p-4">
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </div>
  );
}
