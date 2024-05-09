import { useState } from "react";
import { useSuccessContext } from "../context";

const useFormFunctionality = () => {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const { setSuccess } = useSuccessContext();

  const handleButtonClick = () => {
    if (email.length > 1) {
      if (!email.includes("@") && email.includes(".")) {
        setIsError(true);
        let email = document.getElementById("email");
        email.classList.add("active:border-tomato");
      }

      setIsError(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSuccess();
  };
  return {
    isError,
    email,
    setEmail,
    handleButtonClick,
    handleFormSubmit,
  };
};
export default useFormFunctionality;
