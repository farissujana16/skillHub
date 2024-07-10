import Illustration4 from "../assets/images/Man thinking-bro.png";
import Input from "./Input";

function Question() {
  return (
    <div className="bg-white container max-w-6xl mt-10">
      <div className="grid grid-cols-2">
        <div className="px-10 py-10">
          <img src={Illustration4} alt="" />
        </div>
        <div className="flex items-center">
          <div className="text-left">
            <h1 className="text-4xl font-bold">Do you have any query?</h1>
            <p className="mt-5">Non-disclosure agreement seed</p>
            <div className="mt-10"></div>
            <Input></Input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
