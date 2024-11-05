import { useRef } from "react";
import { api } from "../../api/api";
import { FaTimes } from "react-icons/fa";

interface EditUserProps {
  userId: string | null;
  onUpdate: () => void;
  onClose: () => void;
}

export const EditUser = ({ userId, onUpdate, onClose }: EditUserProps) => {
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
      if (nameRef.current) nameRef.current.value = "";
      if (imageRef.current) imageRef.current.value = "";
      if (positionRef.current) positionRef.current.value = "";
      if (linkedinRef.current) linkedinRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative">
      <FaTimes
        onClick={onClose}
        className="absolute top-2 right-2 cursor-pointer text-zinc-50"
        size={24}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateUser();
        }}
        className="flex flex-col p-4 bg-slate-500 rounded"
      >
        <label className="text-zinc-50 text-lg cursor-pointer" htmlFor="name">
          Nome:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-4"
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
          className="h-10 rounded pl-3 w-full mb-4"
          id="photo"
          name="photo"
          type="text"
          placeholder="Coloque seu avatar"
          ref={imageRef}
          required
        />
        <label
          className="text-zinc-50 text-lg cursor-pointer"
          htmlFor="position"
        >
          Ocupação:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-4"
          id="position"
          name="position"
          type="text"
          placeholder="Digite sua profissão"
          ref={positionRef}
          required
        />
        <label
          className="text-zinc-50 text-lg cursor-pointer"
          htmlFor="linkedin"
        >
          LinkedIn:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-4"
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
    </div>
  );
};
