import { createContext, useState } from "react";

// Cria um contexto para o estado do contador
export const PokerListContext = createContext();

// Componente que fornece o contexto do contador
export default function PokerListProvider({ children }) {
    const [data, setData] = useState({
        "count": 0,
        "next": "",
        "previous": null,
        "results": [],
        offset: 0
    });

    let value = { data, setData };

    return (
        <PokerListContext.Provider value={value}>
            {children}
        </PokerListContext.Provider>
    );
}