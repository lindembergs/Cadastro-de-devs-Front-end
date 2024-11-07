import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast() {
  const notify = () => toast("Usuário cadastrado com sucesso!");
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
