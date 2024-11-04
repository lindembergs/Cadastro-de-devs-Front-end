import { useRef } from "react";
import { api } from "../../api/api";

interface EditUserProps {
  userId: string | null;
  onUpdate: () => void;
}

export const EditUser = ({ userId, onUpdate }: EditUserProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLInputElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);

  const handleUpdateUser = async () => {
    if (!userId) return;

    const userData = {
      name: nameRef.current?.value,
      image: imageRef.current?.value,
      position: positionRef.current?.value,
      linkedin: linkedinRef.current?.value,
    };

    try {
      const response = await api.put(`/customer/${userId}`, userData);
      console.log(response);
      onUpdate(); // Atualiza a lista de programadores
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdateUser();
      }}
    >
      <label className="text-zinc-50 text-lg cursor-pointer" htmlFor="name">
        Nome:
      </label>
      <input
        className="h-10 rounded pl-3 w-full mb-8"
        id="name"
        name="name"
        type="text"
        placeholder="Digite seu nome"
        ref={nameRef}
        required
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
        ref={imageRef}
        required
      />
      <label className="text-zinc-50 text-lg cursor-pointer" htmlFor="position">
        Ocupação:
      </label>
      <input
        className="h-10 rounded pl-3 w-full mb-8"
        id="position"
        name="position"
        type="text"
        placeholder="Digite sua profissão"
        ref={positionRef}
        required
      />
      <label className="text-zinc-50 text-lg cursor-pointer" htmlFor="linkedin">
        LinkedIn:
      </label>
      <input
        className="h-10 rounded pl-3 w-full mb-8"
        id="linkedin"
        name="linkedin"
        type="text"
        placeholder="Coloque seu LinkedIn"
        ref={linkedinRef}
        required
      />
      <button className="w-full h-10 rounded bg-cyan-600" type="submit">
        Atualizar
      </button>
    </form>
  );
};
