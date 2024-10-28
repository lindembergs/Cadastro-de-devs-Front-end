import { FaTrash, FaEdit } from "react-icons/fa";
import { api } from "./api/api";
import { useEffect, useState } from "react";

export function App() {
  interface Programmer {
    name: string;
    image: string;
    position: string;
    linkedin: string;
  }

  const [programmers, setProgrammers] = useState<Programmer[]>([]);

  const handleGet = async () => {
    const { data } = await api.get("/customers");
    setProgrammers(data);
    console.log(data, "<<<<<<<<<");
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className="max-w-custom-1000 mx-auto">
      <h1 className="text-zinc-50 text-4xl my-6">Programadores</h1>
      <form className="flex flex-col">
        <label className="text-zinc-50 text-lg cursor-pointer" htmlFor="name">
          Nome:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-8"
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome"
        />
        <label className="text-zinc-50 text-lg cursor-pointer" htmlFor="photo">
          Foto:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-8"
          id="photo"
          name="photo"
          type="text"
          placeholder="Coloque seu avatar"
        />
        <label
          className="text-zinc-50 text-lg cursor-pointer"
          htmlFor="position"
        >
          Ocupação:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-8"
          id="position"
          name="position"
          type="text"
          placeholder="Digite sua profissão"
        />
        <label
          className="text-zinc-50 text-lg cursor-pointer"
          htmlFor="linkedin"
        >
          LinkedIn:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-8"
          id="linkedin"
          name="linkedin"
          type="text"
          placeholder="Coloque seu LinkedIn"
        />
        <button className="w-full h-10 rounded bg-cyan-600" type="submit">
          Cadastrar
        </button>
      </form>

      <section>
        {programmers.map((programmer, i) => (
          <div
            key={i}
            className="h-32 px-2 py-2 w-full bg-white relative mt-12 rounded flex"
          >
            <figure className="h-24 w-24 flex justify-center">
              <img
                className="rounded-full w-full"
                src={programmer.image}
                alt={`Imagem de ${programmer.name}`}
              />
            </figure>
            <article className="flex flex-col ml-6 mt-4">
              <p>{programmer.name}</p>
              <p>{programmer.position}</p>
              <p>{programmer.linkedin}</p>
            </article>
            <div className="flex absolute top-2 right-3 gap-3 items-center">
              <FaEdit color="blue" size={20} className="cursor-pointer" />
              <FaTrash color="red" size={17} className="cursor-pointer" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
