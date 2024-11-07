import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ToastProps {
  message: string;
}
export function Toast({ message }: ToastProps) {
  const notify = () => toast(`${message}`);
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
