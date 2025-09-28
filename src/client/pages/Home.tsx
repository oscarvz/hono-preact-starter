import { useState } from "preact/hooks";
import { Link } from "wouter-preact";
import { apiClient } from "../../api";

export function Home() {
  const [message, setMessage] = useState("");

  const getHello = async () => {
    try {
      const response = await apiClient.hello.$get();
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("Error calling API. That's all I know.");
    }
  };

  return (
    <div>
      <Link to="/about">About</Link>
      <div>
        <button type="button" onClick={getHello}>
          Call API
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}
