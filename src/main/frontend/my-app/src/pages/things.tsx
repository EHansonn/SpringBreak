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
        <div className=" bg-red-300" key={thing.id}>
          Id:{thing.id}
          <br />
          Name:{thing.name}
          <br />
          Address:{thing.address}
          <br />
          Address:{thing.testdata}
        </div>
      ))}
    </h1>
  );
}
