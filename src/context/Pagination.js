import { createContext, useState } from "react";

// Cria um contexto para o estado do contador
export const PaginationContext = createContext();

// Componente que fornece o contexto do contador
export default function PaginationProvider({ children }) {
    const [currentIndiceSelected, setIndiceSelected] = useState(0)
    const [currentListIndices, setCurrentListIndices] = useState({
        current: 0
    });

    let value = { currentIndiceSelected, setIndiceSelected, currentListIndices, setCurrentListIndices };

    return (
        <PaginationContext.Provider value={value}>
            {children}
        </PaginationContext.Provider>
    );
}