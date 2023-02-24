import React, { useEffect, useState } from "react";

export default function Things() {
  const [things, setThings] = useState<any[]>([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      // setLoading(true);
      const response = await fetch("http://localhost:8080/thing/getAll");
      const data = await response.json();
      setThings(data);
      // setLoading(false);
      console.log(data);
    };
    loadData();
  }, []);

  return (
    <h1 className="flex space-y-3 flex-col ">
      {things.map((thing) => (
        <div className=" bg-red-300 flex flex-col" key={thing.id}>
          <div>Id: {thing.id}</div>
          <div>Name: {thing.name}</div>
          <div>Address: {thing.address}</div>
          <div>Testdata: {thing.testdata}</div>
        </div>
      ))}
    </h1>
  );
}
