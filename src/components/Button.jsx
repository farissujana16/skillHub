function Button(promt) {
  return (
    <button className="px-10 py-2 font-semibold bg-emerald-500 rounded-md text-white hover:bg-emerald-600">
      {promt.isi}
    </button>
  );
}

export default Button;
