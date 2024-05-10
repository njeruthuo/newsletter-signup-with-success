// import "./index.css";
// import { useSuccessContext } from "./context";
// import { SignUp, Success } from "./pages";

// export default function App() {
//   const { setSuccess } = useSuccessContext();

//   return (
//     <>
//       <Success />
//       <section className="flex justify-center items-center bg-charcoalGrey min-h-screen">
//         <SignUp />
//       </section>
//     </>
//   );
// }
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import { SignUp, Success } from "./pages";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Success />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
