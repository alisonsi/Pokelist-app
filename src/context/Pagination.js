import { createContext, useState } from "react";

// Cria um contexto para o estado do contador
export const PaginationContext = createContext();

// Componente que fornece o contexto do contador
export function PaginationProvider({ children }) {
    const [currentIndiceSelected, setIndiceSelected] = useState(0)
    const [currentListIndices, setCurrentListIndices] = useState({
        current: 0,
        pageIndex: 0,
        totalPage: 0
    });
    const [totalPagination, setTotalPagination] = useState([])

    let value = { currentIndiceSelected, setIndiceSelected, currentListIndices, setCurrentListIndices, totalPagination, setTotalPagination };

    return (
        <PaginationContext.Provider value={value}>
            {children}
        </PaginationContext.Provider>
    );
}