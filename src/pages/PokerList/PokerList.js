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
import { BtnPagination } from "../../components/Pagination/Button.styles";




function Pokerlist(props) {
    const { lastPokemonSelected } = useContext(CounterContext);
    const { currentIndiceSelected, setIndiceSelected, currentListIndices, setCurrentListIndices, totalPagination, setTotalPagination } = useContext(PaginationContext)
    const { data, setData } = useContext(PokerListContext)
    const { nome, setNome, imagem, setImagem, handleSubmit } = useContext(FormAddContext)


    const changePagination = (offset, index) => {
        fetchData(offset, index)
    }
    const prevNext = (option) => {

        if (option == "next") {
            if (currentListIndices.pageIndex < currentListIndices.totalPage) {
                let total = (data.count / 20);
                console.log(total, currentListIndices.current);

                let next = {
                    ...currentListIndices,
                    current: currentListIndices.current + 10,
                    pageIndex: currentListIndices.pageIndex += 1
                };

                setCurrentListIndices(next)
            }
        } else {
            if (currentListIndices.pageIndex > 1) {
                let prev = {
                    ...currentListIndices,
                    current: currentListIndices.current - 10,
                    pageIndex: currentListIndices.pageIndex -= 1
                };
                setCurrentListIndices(prev)
            }

        }

    }
    const fetchData = async (offset, index) => {

        let totalPages = 0;
        let pages = [];
        const loadIndices = (payload) => {
            for (let index = 0; index < payload.count; index += 20) {
                totalPages += 1
                pages.push(
                    {
                        offset: index,
                    }
                )
            }
            setTotalPagination(pages)
            let i = {
                ...currentListIndices,
                totalPage: Math.ceil(totalPages / 10),
                pageIndex: currentListIndices.pageIndex
            }
            setCurrentListIndices(i)
        }

        console.log(offset, index);
        const newData = await PorkerListGetData(offset);
        setData(newData);
        setIndiceSelected(index)
        loadIndices(newData)

    }



    useEffect(() => {
        fetchData(data.offset, currentIndiceSelected)
    }, [props.source])

    return (

        <div className="content">

            <div className="content_list_pokemon">
                <h2>Último pokemon selecionado: {lastPokemonSelected?.name}</h2>
                <div className="pagination_contentn">
                    <div className="pagination">
                        <div className="prev">
                            <BtnPagination onClick={() => prevNext("prev")}>
                                <p>{'<<'}</p>
                            </BtnPagination>

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
                            <BtnPagination onClick={() => prevNext("next")}>
                                <p>{'>>'}</p>
                            </BtnPagination>
                        </div>

                    </div>
                    <div>
                        {currentListIndices.pageIndex} /
                        {currentListIndices.totalPage}
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