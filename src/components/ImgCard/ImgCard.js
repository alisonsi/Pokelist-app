import { useEffect, useState } from "react";
import "./ImgCard.css"
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import defaultImg from "../../assets/default.jpeg";

export default function ImgCard(props) {
    let { animated, item } = props;
    const [img, setImg] = useState("");
    const [disableAnimation, setDisableAnimation] = useState(false);
    useEffect(() => {
        axios.get(item.link).then(() => {
            setImg(item.link)
        }).catch(() => {
            axios.get(item.link2).then(() => {
                setImg(item.link2)
            }).catch(() => {
                setImg(defaultImg)
                setDisableAnimation(true)
            }
            )
        })

    }, [props.source]) // só sera ativado quando alguma pro
    return (
        <div className="item" >
            {
                !!img ? <img className={animated && !disableAnimation ? 'scaleImg' : 'scaleImgNone'}
                    src={img} alt={item.name} /> : <Skeleton circle={true} style={{

                        width: 100,
                        height: 100
                    }}
                />
            }
            <p>{item.name}</p>

        </div>
    )
}