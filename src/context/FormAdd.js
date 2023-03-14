import { createContext, useContext, useState } from "react";
import { PokerListContext } from "./PokerListaData";

// Cria um contexto para o estado do contador
export const FormAddContext = createContext();

// Componente que fornece o contexto do contador
export default function FormAddProvider({ children }) {
    const { data, setData } = useContext(PokerListContext)
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('Imagem', imagem);
        // lógica de envio do formulário
        let link = URL.createObjectURL(imagem)

        let newPokemon = {
            link: link,
            link2: "",
            name: nome,
            slot: 0,
            url: ""
        }
        let create = { ...data };
        create.results.unshift(newPokemon)
        setData(create)

    }


    let value = { nome, setNome, imagem, setImagem, handleSubmit };

    return (
        <FormAddContext.Provider value={value}>
            {children}
        </FormAddContext.Provider>
    );
}