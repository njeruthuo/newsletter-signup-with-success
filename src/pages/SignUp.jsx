import Products from "../components/Products";
import Image from "../components/SignUpImage";

const SignUp = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row bg-white rounded-2xl gap-8">
      <div className="w-full sm:w-2/3 pl-6">
        <Products />
      </div>
      <Image />
    </section>
  );
};
export default SignUp;
