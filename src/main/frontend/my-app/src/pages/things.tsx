import { Button, Modal, Form, Input, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import ThingForm from "../components/ThingForm";

export default function Things() {
  const [things, setThings] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const triggerRe = () => {
    setLoading(true);
    console.log("hit");
  };

  useEffect(() => {
    //error handling is for losers
    setLoading(true);
    const loadData = async () => {
      const response = await fetch("http://localhost:8080/thing/getAll");
      const data = await response.json();
      setThings(data);
      console.log(data);
    };
    setLoading(false);

    loadData();
  }, [loading]);

  return (
    <>
      <ThingForm triggerRe={triggerRe}></ThingForm>
      <h1 className="flex flex-col space-y-3 items-center overflow-auto sm:mx-0.5 lg:mx-0.5">
        {things.map((thing) => (
          <div
            className=" bg-red-700 flex flex-col  object-contain text-center w-1/2 py-2 inline-block  sm:px-6 lg:px-8 text-sm font-medium text-left "
            key={thing?.id}
          >
            <div>Id: {thing.id}</div>
            <div>Name: {thing.name}</div>
            <div>Address: {thing.address}</div>
            <div>Testdata: {thing.testdata}</div>
            <Button
              type="primary"
              danger
              onClick={() => {
                setLoading(true);
                const loadData = async () => {
                  const response = await fetch(
                    `http://localhost:8080/thing/id/${thing.id}`,
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  triggerRe();
                };
                loadData();
              }}
            >
              Delete
            </Button>
          </div>
        ))}
        {error && <div>error</div>}
        {loading && <div>loading</div>}
      </h1>
    </>
  );
}
