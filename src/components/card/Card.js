import { useContext, useReducer, useState } from "react";

import reducer from "./Card.reduce";
import ImgCard from "./../ImgCard/ImgCard";
import Bar from "../Bar/Bar";
import { Link } from "react-router-dom";
import { CounterContext } from "../../context/ContextAPI";
import { Content } from "./Card.style";
export default function Card(props) {
    const initialState = { animated: false };
    const { lastPokemonSelected, setPokemon } = useContext(CounterContext);
    // const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state);
    const [item, setItem] = useState(props.item)
    const [state, setAnimate] = useState(props.item)



    const handleAnimateImg = (op) => {
        setAnimate({ animated: op })
        // dispatch({ type: 'animated', payload: op })

    };

    return (
       

                <Content>
            <Link to={'/item-detail'} state={{ item: item }} onClick={() => setPokemon(item)}>

                    <div className="container_item" onMouseEnter={() => handleAnimateImg(true)}
                        onMouseLeave={() => handleAnimateImg(false)}>

                        <ImgCard animated={state.animated} item={item}></ImgCard>
                        <Bar animated={state.animated} item={item}></Bar>
                    </div>
            </Link>
                </Content>
     


    )
}