import { CircleUser } from "lucide-react";
import { Search } from "lucide-react";
import { ContainerSearch, InputSearch } from "../components/InputGroup";
import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <div className="w-full bg-blue-700 py-4 px-4 flex items-center justify-between">
        <NavLink to="/">
          <h2 className="text-white text-2xl font-medium hover:scale-125 transition-all duration-600 cursor-pointer">
            SHOPHOPE
          </h2>
        </NavLink>

        <ContainerSearch>
          <InputSearch placeholder="Buscar na ShopHope" type="text" />
          <span className="p-2 cursor-pointer">
            <Search />
          </span>
        </ContainerSearch>

        <div className="flex items-center justify-between gap-3">
          <p className="text-xl text-white">Login</p>
          <CircleUser size={32} color="white" />
        </div>
      </div>
    </header>
  );
}

export default Header;
