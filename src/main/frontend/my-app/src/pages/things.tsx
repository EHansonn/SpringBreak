import { Button, Modal, Form, Input, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";

export default function Things() {
  const [things, setThings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("http://localhost:8080/thing/getAll");
        if (!response.ok) {
          throw new Error("oops");
        }
        const data = await response.json();
        setThings(data);
        console.log(data);
      } catch (e: any) {
        setError(e.message);
      }
    };
    loadData();
    setLoading(false);
  }, []);

  return (
    <h1 className="flex flex-col space-y-3 items-center overflow-auto sm:mx-0.5 lg:mx-0.5">
      {things.map((thing) => (
        <div
          className=" bg-red-300 flex flex-col  object-contain text-center w-1/2 py-2 inline-block  sm:px-6 lg:px-8 text-sm font-medium text-left "
          key={thing?.id}
        >
          <div>Id: {thing.id}</div>
          <div>Name: {thing.name}</div>
          <div>Address: {thing.address}</div>
          <div>Testdata: {thing.testdata}</div>
        </div>
      ))}
      {error && <div>error</div>}
      {loading && <div>loading</div>}
    </h1>
  );
}
