import { useContext, useEffect, useState, createContext } from "react"
import { PorkerListGetData } from "../../services/PokerList.service";
import Card from "../../components/card";
import ButtonPagination from "../../components/Pagination/Button";
import NewPokemon from "../../components/NewPokemon";
import { CounterContext } from "../../context/ContextAPI";
import { PaginationContext } from "../../context/Pagination";
import { PokerListContext } from "../../context/PokerListaData";
import { FormAddContext } from "../../context/FormAdd";
import { BtnPagination } from "../../components/Pagination/Button.styles";
import Loading from "../../components/Loading";
import usePokemon from "../../hooks/usePokemon";
import ErrorHandle from "../../components/Error";
import { PokerListStyle } from "./PokerList.style";




function Pokerlist(props) {
    const { lastPokemonSelected } = useContext(CounterContext);
    const { currentIndiceSelected, setIndiceSelected, currentListIndices, setCurrentListIndices, totalPagination, setTotalPagination } = useContext(PaginationContext)
    const { nome, setNome, imagem, setImagem, handleSubmit } = useContext(FormAddContext)
    const { result, error, isLoading, setOffSet } = usePokemon()

    const changePagination = (offset, index) => {
        setOffSet(offset)
        fetchData(offset, index)
    }
    const prevNext = (option) => {

        if (option == "next") {
            if (currentListIndices.pageIndex < currentListIndices.totalPage) {
                let total = (result.count / 20);
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
        setIndiceSelected(index)
        loadIndices(result)

    }



    useEffect(() => {
        fetchData(result.offset, currentIndiceSelected)
    }, [result])

    return (
        <PokerListStyle>
            <div className="header">
                <h2>Pokedex</h2>
            </div>
            <Loading loading={isLoading} />

            <div className="content">

                <div className="content_list_pokemon">
                    <div className="pagination_contentn">
                        <div className="pagination">
                            <div className="prev">
                                <BtnPagination onClick={() => prevNext("prev")}>
                                    <p>Prev</p>
                                </BtnPagination>

                            </div>
                            <div className="index" >

                                {
                                    totalPagination.map((i, index) => {
                                        return <ButtonPagination currentIndeceSelected={currentIndiceSelected} key={i.offset} changePagination={changePagination} item={i} index={index} />

                                    }).filter((i, index) => {
                                        return index >= currentListIndices.current && index < currentListIndices.current + 10
                                    })
                                }
                            </div>
                            <div className="next">
                                <BtnPagination onClick={() => prevNext("next")}>
                                    <p>Next</p>
                                </BtnPagination>
                            </div>

                        </div>
                        <div className="count_index">
                            {currentListIndices.pageIndex}/{currentListIndices.totalPage}
                        </div>
                    </div>
                    <ErrorHandle error={error}></ErrorHandle>
                    <div className="my_list_content">

                        {!!result?.results ? result.results.map((item, index) => {
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
                    <h4>Último pokemon selecionado</h4>
                    <div style={{ visibility: !!lastPokemonSelected ? "visible" : "hidden" }} className="content_item" >
                        <Card item={lastPokemonSelected}></Card>
                    </div>
                </div>

            </div>
        </PokerListStyle>





    )
}

export default Pokerlist