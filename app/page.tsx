import Header from "./compoenets/layout/Header";
import MainSec from "./compoenets/Main";

export default function Home() {
  return (
    <section className="font-inter  bg-[#E9ECF5] py-20  text-gray-900">
      <div className="flex relative z-100 max-w-[88rem] p-4 rounded-4xl  gap-12 pb-20  mx-auto  m-auto bg-[#F3F5FB] ">
        <img className=" absolute  top-160 -right-34 " src="main\Ellipse16.svg" alt="" />
        <img className=" absolute -top-25 -left-36 z-1000 " src="main\Ellipse11.svg" alt="" />
        <Header />
        <MainSec />
      </div>
    </section>
  );
}
