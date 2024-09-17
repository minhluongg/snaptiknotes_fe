import { createContext, useContext, useState } from "react";

const ResultContext = createContext();
function ResultProvider(props) {
  const [formResult, setFormResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleResetFormResult = () => {
    setFormResult(null);
  };
  const value = {
    formResult,
    setFormResult,
    handleResetFormResult,
    errorMessage,
    setErrorMessage,
  };

  return (
    <ResultContext.Provider value={value} {...props}></ResultContext.Provider>
  );
}
function useResult() {
  const context = useContext(ResultContext);
  if (typeof context === "undefined")
    throw new Error("useResult must be used within ResultContext");
  return context;
}
export { ResultProvider, useResult };
