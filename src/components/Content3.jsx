import Card from "./Card";
import { BiCopyAlt, BiDollar, BiUserCircle } from "react-icons/bi";
import Illustrator3 from "../assets/images/Meeting-bro.png";

function Content3() {
  return (
    <div className="container max-w-6xl bg-white">
      <h1 className="text-4xl font-bold">How it works</h1>
      <p className="text-black mt-3">
        Non-disclosure agreement seed round seed <br /> money accelerator
        influencer.
      </p>
      <div className="grid grid-cols-2">
        <div className="space-y-10 pt-16">
          <Card icon={<BiCopyAlt />} judul={"Select a course"}></Card>
          <Card icon={<BiDollar />} judul={"Fill it up & give payment"}></Card>
          <Card icon={<BiUserCircle />} judul={"Start build yourself"}></Card>
        </div>
        <div className="">
          <img src={Illustrator3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Content3;
