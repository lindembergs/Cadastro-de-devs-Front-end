export function App() {
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
          className="text-zinc-50 text-lg  cursor-pointer"
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
        <div className="h-32 px-2 py-2 w-full bg-white relative mt-12 rounded flex">
          <figure className="h-24 w-24 flex justify-center">
            <img
              className=" rounded-full w-full"
              src="https://avatars.githubusercontent.com/u/61990823?v=4"
              alt="Imagem do programador"
            />
          </figure>
          <div className="flex flex-col ml-6 mt-4">
            <p>Lindemberg silva</p>
            <p>Desenvolvedor full stack</p>
            <p>LinkedIn</p>
          </div>
          <div className="flex absolute top-2 right-3 gap-2">
            <p>edit</p>
            <p>trash</p>
          </div>
        </div>
      </section>
    </div>
  );
}
