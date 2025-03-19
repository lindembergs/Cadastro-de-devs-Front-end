import { useEffect, useRef, useState } from "react";
import { FaTrash, FaEdit, FaLinkedin } from "react-icons/fa";
import { api } from "./api/api";
import { EditUser } from "./Components/Edit_user";
import { Toast } from "./Components/Toast";

export function App() {
  interface Programmer {
    name: string;
    image: string;
    position: string;
    linkedin: string;
    id: string;
  }

  const [programmers, setProgrammers] = useState<Programmer[]>([]);
  const [editUserId, setEditUserId] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLInputElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);

  const handleGet = async () => {
    try {
      const { data } = await api.get("/customers");
      setProgrammers(data);
    } catch (error) {
      console.error("Erro ao buscar programadores:", error);
    }
  };

  const handleCreateCustomers = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      name: nameRef.current?.value,
      image: imageRef.current?.value,
      position: positionRef.current?.value,
      linkedin: linkedinRef.current?.value,
    };
    try {
      await api.post("/customer", userData);
      setIsSuccess(true);
      await handleGet();
      if (nameRef.current) nameRef.current.value = "";
      if (imageRef.current) imageRef.current.value = "";
      if (positionRef.current) positionRef.current.value = "";
      if (linkedinRef.current) linkedinRef.current.value = "";
      setTimeout(() => setIsSuccess(false), 6000); // Remove mensagem de sucesso após 6 segundos
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await api.delete(`/customer/${id}`);
      await handleGet();
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
    }
  };

  const handleOpenEditModal = (id: string) => setEditUserId(id);
  const handleCloseModal = () => setEditUserId(null);

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div className="max-w-custom-1000 mx-auto relative min-h-screen">
      {isSuccess && <Toast message="Usuário cadastrado com sucesso!" />}
      <h1 className="text-zinc-50 text-4xl my-6">Programadores</h1>
      <form className="flex flex-col" onSubmit={handleCreateCustomers}>
        <label htmlFor="name" className="text-zinc-50 text-lg cursor-pointer">
          Nome:
        </label>
        <input
          id="name"
          ref={nameRef}
          type="text"
          placeholder="Digite seu nome"
          className="h-10 rounded pl-3 w-full mb-8"
          required
        />
        <label htmlFor="photo" className="text-zinc-50 text-lg cursor-pointer">
          Foto:
        </label>
        <input
          id="photo"
          ref={imageRef}
          type="text"
          placeholder="Coloque seu avatar"
          className="h-10 rounded pl-3 w-full mb-8"
          required
        />
        <label
          htmlFor="position"
          className="text-zinc-50 text-lg cursor-pointer"
        >
          Ocupação:
        </label>
        <input
          id="position"
          ref={positionRef}
          type="text"
          placeholder="Digite sua profissão"
          className="h-10 rounded pl-3 w-full mb-8"
          required
        />
        <label
          htmlFor="linkedin"
          className="text-zinc-50 text-lg cursor-pointer"
        >
          LinkedIn:
        </label>
        <input
          id="linkedin"
          ref={linkedinRef}
          type="text"
          placeholder="Coloque seu LinkedIn"
          className="h-10 rounded pl-3 w-full mb-8"
          required
        />
        <button type="submit" className="w-full h-10 rounded bg-cyan-600">
          Cadastrar
        </button>
      </form>

      <section>
        {programmers.map((programmer) => (
          <div
            key={programmer.id}
            className="h-auto px-2 py-2 w-full bg-white relative mt-10 rounded flex"
          >
            <figure className="flex justify-center h-24 w-24 sm:h-20 sm:w-20">
              <img
                className="rounded-full w-full h-full object-cover"
                src={programmer.image}
                alt={`Imagem de ${programmer.name}`}
              />
            </figure>
            <article className="flex flex-col ml-6 mt-6">
              <p>{programmer.name}</p>
              <p>{programmer.position}</p>
              <a href={programmer.linkedin} target="_blank">
                <FaLinkedin size={25} color="#0e76a8" />
              </a>
            </article>
            <div className="flex absolute top-2 right-3 gap-3 items-center">
              <FaEdit
                onClick={() => handleOpenEditModal(programmer.id)}
                color="blue"
                size={20}
                className="cursor-pointer"
              />
              <FaTrash
                onClick={() => handleDeleteUser(programmer.id)}
                color="red"
                size={17}
                className="cursor-pointer"
              />
            </div>
          </div>
        ))}
      </section>
      {editUserId && (
        <div className="fixed inset-0 bg-slate-600 bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col h-auto w-96 rounded p-2">
            <EditUser
              userId={editUserId}
              onUpdate={handleGet}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}
