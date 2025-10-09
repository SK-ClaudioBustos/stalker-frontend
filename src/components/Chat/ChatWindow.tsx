import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const ChatWindow = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userNameInput = formData.get("userName") as string;
    const userName = userNameInput.toLowerCase().replace(/\s+/g, "_");
    const route = `chat/${userName}`;
    router.push(route);
  };

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)} className="w-fit m-auto">
        <div className="w-xl mt-8 mb-4">
          <label
            htmlFor="user_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nombre de usuario
          </label>
          <input
            type="text"
            id="user_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ingrese un nombre"
            name="userName"
            pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,30}$"
            title="Solo letras y espacios (mínimo 3, máximo 30 caracteres)"
            required
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Aceptar
        </button>
      </form>
    </main>
  );
};
