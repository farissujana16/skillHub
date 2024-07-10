import Input from "./Input";
import Illustration1 from "../assets/images/Learning-bro.png";

function Content() {
  return (
    <main className="container max-w-6xl bg-white grid grid-cols-2 py-10">
      <div className="text-left px-10 my-auto">
        <h3 className="text-xl text-emerald-500 font-semibold">
          Grow yourself with us
        </h3>
        <h1 className="text-5xl font-bold pt-1 pb-6">
          Grow your skill & get world class job's
        </h1>
        <p className="text-dark">
          Non-disclosure agreement seed round seed money accelerator influencer.
          Growth hacking return nondis sure agreement seed around seed.
        </p>
        <div className="my-5">
          <Input></Input>
        </div>
      </div>
      <div className="">
        <img src={Illustration1} alt="" />
      </div>
    </main>
  );
}

export default Content;
