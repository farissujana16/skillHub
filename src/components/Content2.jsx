import Button from "./Button";
import Illustration2 from "../assets/images/Online learning-bro.png";

function Content2() {
  return (
    <main className="container max-w-6xl bg-white grid grid-cols-2 py-10">
      <div className="">
        <img src={Illustration2} alt="" />
      </div>
      <div className="text-left px-10 my-auto">
        <h1 className="text-5xl font-bold pt-1 pb-6">
          Over 1M+ Students get's job
        </h1>
        <p className="text-black">
          Non-disclosure agreement seed round seed money accelerator influencer.
          Growth hacking return nondis sure agreement seed around seed.
        </p>
        <p className="text-black mt-2">
          Non-disclosure agreement seed round seed money accelerator influencer.
          Growth hacking return nondis sure agreement seed around seed.
        </p>
        <div className="my-5">
          <Button isi={"Explore More"}></Button>
        </div>
      </div>
    </main>
  );
}

export default Content2;
