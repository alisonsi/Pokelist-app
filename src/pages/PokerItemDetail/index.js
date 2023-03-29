import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DetailsAbilitys, PokerItemDetailGetData } from "../../services/PokerList.service";
import { PokerListDetailsStyles } from "./PokerItemDetail.styles"
import Skeleton from 'react-loading-skeleton';
import ImgCard from "../../components/ImgCard";

function Desc(props) {
    let [abilitysDesc, setAbilitysDesc] = useState("");
    let { name, url } = props;
    const getDesAbilitys = async (url) => {

        let desc = await DetailsAbilitys(url);
        setAbilitysDesc(desc)
    }
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
    let { slot } = useParams();
    let [details, setDetails] = useState();
    useEffect(() => {
        let fethData = async () => {
            let d = await PokerItemDetailGetData(slot);
            console.log(d);
            setDetails(d)
        }
        fethData()
    }, [])

    return (
        <PokerListDetailsStyles>
            <div className="content">

                <div className="content_item" key={slot}>
                    <div className="abilitys">

                        {
                            !!details ?
                                // <div className="container_card">
                                //     <img role="img" src={details.img} alt={details.name} />
                                //     <p>{details.name}</p>
                                // </div>
                                <ImgCard animated={true} link={details.link} link2={details.link2} name={details.name} />
                                : <div>
                                    <Skeleton circle={true} style={{

                                        width: 100,
                                        height: 100
                                    }}> </Skeleton>

                                </div>
                        }
                        <div className="abilitys_list">
                            <h2>Tipo</h2>
                            <div>
                                {!!details ? <p>{details.types}</p> : <div></div>}
                            </div>
                            <h2>Habilidades</h2>
                            {
                                !!details ? details.abilities.map((ab, i) => {
                                    return (
                                        <div key={i}>
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
        </PokerListDetailsStyles>
    )
}