import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Qr() {
  const { code } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://marineadvisor.xyz/qrcodes/${code}`
        );
        console.log("data", data);
        setMessage(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Error fetching data");
      }
    };

    fetchData();

    return () => {
      setMessage("");
    };
  }, [code]);

  return (
    <div className="qrPageContainer">
      <h1>{message}</h1>
    </div>
  );
}

export default Qr;
