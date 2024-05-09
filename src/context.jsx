import { createContext, useContext, useState } from "react";

export const SuccessContext = createContext();

export const useSuccessContext = () => useContext(SuccessContext);

const Context = ({ children }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  function setSuccess() {
    setShowSuccess(!showSuccess);
  }
  return (
    <SuccessContext.Provider value={{ showSuccess, setSuccess }}>
      {children}
    </SuccessContext.Provider>
  );
};
export default Context;
