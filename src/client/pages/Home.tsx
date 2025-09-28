import { useState } from "preact/hooks";
import { apiClient } from "../../api";

export function Home() {
  const [message, setMessage] = useState<string>();

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
      <h1>Hono Preact Starter</h1>
      <p>
        Starter template for a Hono app on Cloudflare Workers. It uses Preact
        for the frontend and Hono for the backend. Features:
        <ul>
          <li>Hono</li>
          <li>Preact</li>
          <li>Wouter</li>
          <li>SSR & client-side hydration</li>
        </ul>
      </p>

      <div>
        <button type="button" onClick={getHello}>
          Call API
        </button>

        {message && <pre>{message}</pre>}
      </div>
    </div>
  );
}
