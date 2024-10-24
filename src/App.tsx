export function App() {
  return (
    <div className="max-w-custom-1000 mx-auto">
      <h1 className="text-zinc-50 text-4xl my-6">Programadores</h1>
      <form className="flex flex-col">
        <label className="text-zinc-50 text-lg cursor-pointer" htmlFor="name">
          Nome:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-3"
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome"
        />
        <label className="text-zinc-50 text-lg cursor-pointer" htmlFor="photo">
          Foto:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-3"
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
          className="h-10 rounded pl-3 w-full mb-3"
          id="position"
          name="position"
          type="text"
          placeholder="Digite sua profissão"
        />
        <label
          className="text-zinc-50 text-lg  cursor-pointer"
          htmlFor="linkedin"
        >
          LinkedIn:
        </label>
        <input
          className="h-10 rounded pl-3 w-full mb-3"
          id="linkedin"
          name="linkedin"
          type="text"
          placeholder="Coloque seu LinkedIn"
        />
      </form>
    </div>
  );
}
