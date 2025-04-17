import { Search } from "lucide-react";
import { ContainerSearch, InputSearch } from "../components/InputGroup";
import { NavLink } from "react-router";
import { useSearch } from "../context/searchContext";
import LoginDiv from "../components/LoginDiv";

function Header() {
  const { search, setSearch } = useSearch();
  return (
    <header>
      <div className="w-full bg-blue-700 py-4 px-4 flex items-center justify-between">
        <NavLink to="/">
          <h2 className="text-white text-2xl font-medium hover:scale-125 transition-all duration-600 cursor-pointer">
            SHOPHOPE
          </h2>
        </NavLink>

        <ContainerSearch>
          <InputSearch
            placeholder="Buscar na ShopHope"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="p-2 cursor-pointer">
            <Search />
          </span>
        </ContainerSearch>

        <LoginDiv/>
      </div>
    </header>
  );
}

export default Header;
