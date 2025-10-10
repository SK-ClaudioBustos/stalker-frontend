import { useSendMessages } from "@/hooks/useSendMessages";

export const SendMessageBox = () => {
  const { formRef, error, handleSubmitMessage, loading } = useSendMessages();

  if (error) {
    return <span className="bg-red-500">ERROR al enviar el mensaje</span>;
  }

  return (
    <section className="p-2 self-end w-full">
      <form
        ref={formRef}
        onSubmit={(e) => handleSubmitMessage(e)}
        className="flex flex-row gap-1 w-full"
      >
        <div className="w-[90%]">
          <input
            type="text"
            id="message"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Mensaje...."
            name="message"
            pattern={"^[a-zA-ZÀ-ÿ0-9.,! ]{1,250}$"}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="cursor-pointer grow text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {loading ? "Cargando" : "Enviar"}
        </button>
      </form>
    </section>
  );
};
