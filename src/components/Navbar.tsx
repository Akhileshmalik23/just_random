import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#1a1a1a] w-full shadow-md py-3 absolute z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-white text-2xl font-semibold">
          <Link href="/">Bail Reckoner</Link>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/complains"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                complains
              </Link>
            </li>
            <li>
              <Link
                href="/gemini"
                className="text-gray-300 hover:text-white transition duration-300"
                style={{
                  background: "linear-gradient(45deg, #f3a1a1, #a1c4fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Gemini
              </Link>
            </li>
            <li>
              <Link
                href="/automation"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Automation
              </Link>
            </li>
            <li>
              <Link
                href="/search"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Rule Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
