import { usePublishMessageSubscription } from "@/generated/graphql";
import { useState } from "react";

export const ChatWindow = () => {
  const [id, setId] = useState("123abad");
  const {
    data: dataMessages,
    loading: loadingMessages,
    error: errorMessages,
  } = usePublishMessageSubscription({ variables: { to: id } });

  const handleClick = () => {
    setId("abc123");
  };
  return (
    <section>
      <p>{`CLIENT ID: ${id}`}</p>
      <button className="bg-amber-400" onClick={handleClick}>CHANGE ID</button>
      <div className="mt-8 bg-gray-400 rounded-2xl p-4">
        {loadingMessages && <span className="text-blue-500">CARGANDO</span>}
        {errorMessages && (
          <span className="text-red-500">{`ERROR: ${errorMessages.name}`}</span>
        )}
        <article>
          <span className="text-green-900 font-bold">
            {dataMessages?.publishMessage.from}
          </span>
          <span className="text-green-600 font-medium">
            {dataMessages?.publishMessage.message}
          </span>
        </article>
      </div>
    </section>
  );
};
