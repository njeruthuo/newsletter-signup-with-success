import imgDesktop from "../images/illustration-sign-up-desktop.svg";
import imgMobile from "../images/illustration-sign-up-mobile.svg";

function Image() {
  return (
    <div className="sm:ml-auto sm:pr-6">
      <img
        className="hidden sm:block rounded-3xl h-[450px] py-4"
        src={imgDesktop}
        alt="illustration-sign-up-desktop.svg"
      />

      <img
        className="sm:hidden w-full h-auto"
        src={imgMobile}
        alt="illustration-sign-up-mobile.svg"
      />
    </div>
  );
}

export default Image;
