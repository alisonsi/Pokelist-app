import { useLocation, useNavigation } from "react-router-dom";
import Card from "../../components/card/Card";
import { useCallback, useEffect, useState } from "react";
import { DetailsAbilitys, PokerItemDetailGetData } from "../../services/PokerList.service";
import "./PokerItemDetail.css";


function Desc(props) {
    let [abilitysDesc, setAbilitysDesc] = useState("");
    let { name, url } = props;
    const getDesAbilitys = useCallback(async (url) => {

        let desc = await DetailsAbilitys(url);
        setAbilitysDesc(desc)
    })
    return (
        <div>
            <div className="abilitys_details">
                <p>{name}</p>
                <button onClick={() => getDesAbilitys(url)}>Detalhes</button>
            </div>
            <div className="abilitys_desc"> {abilitysDesc}</div>
        </div>
    )
}

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
    }, [])
    console.log(state);



    return (
        <div className="content">

            <div className="content_item" key={item.name}>
                <div className="abilitys">
                    <Card item={item}></Card>
                    <div className="abilitys_list">
                        <h2>Espécie</h2>
                        <div>
                            {!!details ? <p>{details.species.name}</p> : <div></div>}
                        </div>
                        <h2>Habilidades</h2>
                        {
                            !!details ? details.abilities.map((ab, i) => {
                                return (
                                    <div>
                                        <Desc name={ab.ability.name} url={ab.ability.url}></Desc>
                                    </div>


                                )
                            })
                                : <div></div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}