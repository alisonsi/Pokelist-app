import { useContext, useEffect, useState, createContext } from "react"
import './PokerList.css'
import { PorkerListGetData } from "../../services/PokerList.service";
import Card from "../../components/card/Card";
import ButtonPagination from "../../components/Pagination/Button";
import NewPokemon from "../../components/NewPokemon/NewPokemon";
import { CounterContext } from "../../context/ContextAPI";
import { PaginationContext } from "../../context/Pagination";
import PokerListProvider, { PokerListContext } from "../../context/PokerListaData";
import { FormAddContext } from "../../context/FormAdd";




function Pokerlist(props) {
    const { lastPokemonSelected } = useContext(CounterContext);
    const { currentIndiceSelected, setIndiceSelected, currentListIndices, setCurrentListIndices } = useContext(PaginationContext)
    const { data, setData } = useContext(PokerListContext)
    const { nome, setNome, imagem, setImagem, handleSubmit } = useContext(FormAddContext)

    const changePagination = (offset, index) => {
        fetchData(offset, index)
    }
    const prevNext = (option) => {


        // let offset;
        // let updateIndice;

        if (option == "next") {
            // let isEnd = 
            // if(currentListIndices.current)
            let total = (data.count / 20);
            console.log(total, currentListIndices.current);

            let next = {
                ...currentListIndices,
                current: currentListIndices.current + 10
            };
            setCurrentListIndices(next)

            // offset = data.offset += 20;
            // updateIndice = currentIndiceSelected + 1
        } else {
            let prev = {
                ...currentListIndices,
                current: currentListIndices.current - 10
            };
            setCurrentListIndices(prev)
            // offset = data.offset -= 20;
            // updateIndice = currentIndiceSelected - 1
        }
        // fetchData(offset, updateIndice)
    }
    const fetchData = async (offset, index) => {
        console.log(offset, index);
        const newData = await PorkerListGetData(offset);
        setData(newData);
        setIndiceSelected(index)
    }
    const totalPagination = [];

    const loadIndices = () => {
        for (let index = 0; index < data.count; index += 20) {
            totalPagination.push(
                {
                    offset: index,
                }
            )
        }

    }
    loadIndices()

    useEffect(() => {
        fetchData(data.offset, currentIndiceSelected)
    }, [props.source])

    return (

        <div className="content">
            <div className="content_list_pokemon">
                <h2>Último pokemon selecionado: {lastPokemonSelected}</h2>
                <div className="pagination">
                    <div className="prev">
                        <button onClick={() => prevNext("prev")}>
                            <p>{'<<'}</p>
                        </button>
                    </div>
                    <div className="index" >

                        {
                            totalPagination.map((i, index) => {
                                // return <div key={i.offset}>
                                //     <button className="" changePagination={() => changePagination(i.offset)}>{index + 1}</button>
                                // </div>
                                return <ButtonPagination currentIndeceSelected={currentIndiceSelected} key={i.offset} changePagination={changePagination} item={i} index={index} />

                            }).filter((i, index) => {
                                return index >= currentListIndices.current && index < currentListIndices.current + 10
                            })
                        }
                    </div>
                    <div className="next">
                        <button onClick={() => prevNext("next")}>
                            <p>{'>>'}</p>
                        </button>
                    </div>
                </div>
                <div className="my_list_content">

                    {!!data.results ? data.results.map((item, index) => {
                        return (
                            <div className="content_item" key={item.name + index}>
                                <Card item={item}></Card>
                            </div>
                        )
                    }) : <div></div>}

                </div >
            </div>
            <div className="content_form">
                <NewPokemon nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem} handleSubmit={handleSubmit} />
            </div>

        </div>





    )
}

export default Pokerlist