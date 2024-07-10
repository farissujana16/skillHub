import Button from "./Button";

function Navbar() {
  const menus = ["About Us", "Courses", "Resources", "Online Learning"];
  return (
    <div className="bg-white">
      <header className="container max-w-6xl mx-auto flex flex-row items-center space-x-52">
        <a href="#">
          <p className="font-bold text-2xl">
            Skill<span className="text-emerald-600">Hub</span>
          </p>
        </a>
        <div className="flex-1">
          <ul className="flex flex-row space-x-16">
            {menus.map((val, index) => (
              <a
                href="#"
                className="text-black hover:text-emerald-600 font-normal"
                key={index}
              >
                {val}
              </a>
            ))}
          </ul>
        </div>
        <div>
          <Button isi={"Log In"} />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
