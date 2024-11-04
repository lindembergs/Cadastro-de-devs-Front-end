import { User } from "../interfaces";

export function getUserData(
  nameRef: React.RefObject<HTMLInputElement>,
  imageRef: React.RefObject<HTMLInputElement>,
  positionRef: React.RefObject<HTMLInputElement>,
  linkedinRef: React.RefObject<HTMLInputElement>
): User {
  return {
    name: nameRef.current?.value,
    image: imageRef.current?.value,
    position: positionRef.current?.value,
    linkedin: linkedinRef.current?.value,
  };
}
