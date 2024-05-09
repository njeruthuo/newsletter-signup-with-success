import "./index.css";
import { useSuccessContext } from "./context";
import { SignUp, Success } from "./pages";

export default function App() {
  // const { setSuccess } = useSuccessContext();

  return (
    <>
      <Success />
      {/* <section className="flex justify-center items-center bg-charcoalGrey min-h-screen">
        <SignUp />
      </section> */}
    </>
  );
}
