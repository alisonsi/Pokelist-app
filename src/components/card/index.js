import { useContext, useReducer, useState } from "react";


import ImgCard from "../ImgCard";
import { Link } from "react-router-dom";
import { CounterContext } from "../../context/ContextAPI";
import { Content } from "./Card.style";
export default function Card(props) {
    const { lastPokemonSelected, setPokemon } = useContext(CounterContext);

    const [item, setItem] = useState(props.item)
    const [state, setAnimate] = useState(props.item)



    const handleAnimateImg = (op) => {
        setAnimate({ animated: op })
    };

    return (
        <Content>
            <Link to={'/item-detail'} state={{ item: item }} onClick={() => setPokemon(item)}>

                <div className="container_item" onMouseEnter={() => handleAnimateImg(true)}
                    onMouseLeave={() => handleAnimateImg(false)}>

                    <ImgCard animated={state.animated} item={item}></ImgCard>
                </div>
            </Link>
        </Content>



    )
}