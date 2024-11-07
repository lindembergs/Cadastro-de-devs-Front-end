import { useEffect, useRef, useState } from "react";
import { api } from "../../api/api";
import { FaTimes } from "react-icons/fa";

interface EditUserProps {
  userId: string | null;
  onUpdate: () => void;
  onClose: () => void;
}

export const EditUser = ({ userId, onUpdate, onClose }: EditUserProps) => {
  const [userData, setUserData] = useState({
    name: "",
    image: "",
    position: "",
    linkedin: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const positionRef = useRef<HTMLInputElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;

      try {
        const response = await api.get(`/customer/${userId}`);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUpdateUser = async () => {
    if (!userId) return;

    // Mescla os valores do estado com os campos preenchidos
    const updatedData = {
      name: nameRef.current?.value || userData.name,
      image: imageRef.current?.value || userData.image,
      position: positionRef.current?.value || userData.position,
      linkedin: linkedinRef.current?.value || userData.linkedin,
    };

    try {
      await api.put(`/customer/${userId}`, updatedData);
      onUpdate(); // Atualiza a lista de programadores
      onClose(); // Fecha o modal após a atualização
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
        className="flex flex-col p-4 bg-[url('https://wallpapercave.com/wp/wp12460934.jpg')] bg-center bg-cover rounded"
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
          defaultValue={userData.name}
          ref={nameRef}
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
          defaultValue={userData.image}
          ref={imageRef}
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
          defaultValue={userData.position}
          ref={positionRef}
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
          defaultValue={userData.linkedin}
          ref={linkedinRef}
        />
        <button className="w-full h-10 rounded bg-cyan-600" type="submit">
          Atualizar
        </button>
      </form>
    </div>
  );
};
