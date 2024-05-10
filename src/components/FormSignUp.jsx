import { useState } from "react";
import useFormFunctionality from "./useFormFunctionality";
import { Success } from "../pages";

const FormSignUp = () => {
  const { isError, email, setEmail, handleButtonClick, handleFormSubmit } =
    useFormFunctionality();

    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
      return <Success />; // Render Success component if form is submitted
    }

  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="flex justify-between">
          <label htmlFor="email" className="text-darkSlateGray font-bold">
            Email Address
          </label>

          {isError && <span className="text-tomato">Valid email required</span>}
        </div>
        <input
          className="border border-grey rounded-lg p-2 pl-4 w-full"
          placeholder="email@company.com"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
        />
        <div>
          <button
            type="submit"
            onClick={handleButtonClick}
            className="bg-darkSlateGray hover:bg-tomato text-white w-full p-3 rounded-lg mt-3"
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormSignUp;
