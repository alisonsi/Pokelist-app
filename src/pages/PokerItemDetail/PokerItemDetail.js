import { useLocation, useNavigation } from "react-router-dom";
import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import { PokerItemDetailGetData } from "../../services/PokerList.service";

export default function PokerItemDetail(props) {
    // const { item } = props.location.state;
    let { state } = useLocation();
    let { item } = state;
    let [details, setDetails] = useState();

    useEffect(() => {
        let fethData = async () => {
            let d = await PokerItemDetailGetData(1);
            console.log(d);
            setDetails(d)
        }
        fethData()
    })
    console.log(state);
    return (
        <div>
            <h1>{item.name}</h1>
            <div className="content_item" key={item.name}>
                <Card item={item}></Card>
            </div>
        </div>
    )
}