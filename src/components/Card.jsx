function Card(prompt) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-md flex flex-row py-5 px-2">
      <div className="ms-2 basis-1/8">
        <div className="bg-green-100 text-green-800 text-lg font-medium py-2 px-2 rounded-lg">
          <span>{prompt.icon}</span>
        </div>
      </div>
      <div className="ml-3 basis-7/8">
        <h3 className="text-xl font-bold flex items-start">{prompt.judul}</h3>
        <p className="mt-2 text-left">
          Non-disclosure agreement seed round seed money accelerator influencer.
        </p>
      </div>
    </div>
  );
}

export default Card;
