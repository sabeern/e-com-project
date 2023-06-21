function Home() {
  return (
    <div>
      <div className="bg-[#2874F0]">
        <nav className="px-44 py-2 flex items-center">
          <div>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="logo"
              className="w-18 h-4"
            />
            <p className="inline">
              <span className="text-white text-xs">Expolre</span>{" "}
              <span className="text-[#daca3a] text-sm">Plus</span>
            </p>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
              alt="icon"
              className="inline w-5 h-5"
            />
          </div>
          <div className="flex items-center ml-4">
            <input
              type="text"
              className="text-sm w-80 h-8 px-4"
              placeholder="Search for products, brands and more"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 ml-[-30px] text-blue-700"
            >
              <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Home;
