"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASEURL}/api/v1/assemblies.v2.search`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // 🔽 Replace with actual request body
              oem_vehicle_id: "dG95b3RhOjE6SlROS0UzQkUyMDM1MTQyMjI6MA",
            }),
          }
        );

        if (!res.ok) throw new Error("Failed to fetch data");

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching API data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Assemblies:</h2>
      

      <h2>Diagrams:</h2>
      <ul>
        {data && data.diagrams
          ? Object.values(data.diagrams)
              .filter(diagram => diagram.name.includes("BUMPER"))
              .map((diagram) => (
                <li key={diagram.id}>
                  {diagram.name} - <a href={diagram.url}>View Diagram</a>
                </li>
              ))
          : "Loading diagrams..."}
      </ul>
    </div>
  );
}