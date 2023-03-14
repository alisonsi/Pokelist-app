import React, { useState, createContext } from 'react';

// Cria um contexto para o estado do contador
export const CounterContext = createContext();

// Componente que fornece o contexto do contador
export default function CounterProvider({ children }) {
    const [lastPokemonSelected, setLastPokemonSelected] = useState("");

    const setPokemon = (value) => setLastPokemonSelected(value);


    // Fornece o estado do contador e as funções de incremento e decremento
    // para qualquer componente que esteja dentro do contexto
    const value = { lastPokemonSelected, setPokemon };

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    );
}