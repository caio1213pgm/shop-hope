import { createContext, useContext, useState } from "react";

type searchProps = {
    search: string
    setSearch: (search: string) => void
}

const searchContext = createContext<searchProps>({
    search: "",
    setSearch: () => {}
})

export default function SearchProvider({ children }: { children: React.ReactNode }) {
    const [search, setSearch] = useState<string>("");
    return (
        <searchContext.Provider value={{ search, setSearch }}>
            {children}
        </searchContext.Provider>
    )
}

export function useSearch() {
    return useContext(searchContext)
}