import useFormFunctionality from "../components/useFormFunctionality";
import listIconImg from "../images/icon-list.svg";

const Success = () => {
  const { email } = useFormFunctionality();
  return (
    <article className="flex justify-center items-center bg-charcoalGrey sm:min-h-screen">
      <section className=" bg-white w-3/4 sm:w-1/3 mx-auto text-darkSlateGray p-12 rounded-3xl">
        <img className="h-16" src={listIconImg} alt="" />

        <h3 className="font-bold text-5xl sm:py-2 mt-2">
          Thanks for subscribing!
        </h3>

        <p className="mt-2">
          A confirmation email has been sent to
          <span className="font-bold">{email || "lorem@gmail.com"}</span>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>

        <button className="bg-darkSlateGray hover:bg-tomato w-full text-white rounded-lg p-4 mt-32 sm:mt-8">
          Dismiss message
        </button>
      </section>
    </article>
  );
};
export default Success;
