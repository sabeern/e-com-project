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
          <div className="ml-4">
            <input
              type="text"
              className="text-sm w-80 h-8 px-4"
              placeholder="Search for products, brands and more"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Home;
