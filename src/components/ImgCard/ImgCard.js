import { useEffect, useState } from "react";
import "./ImgCard.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import defaultImg from "../../assets/default.jpeg";
import axiosInstance from "../../services/Axios";

export default function ImgCard(props) {
    let { animated, item } = props;
    const [img, setImg] = useState("");
    const [disableAnimation, setDisableAnimation] = useState(false);

    useEffect(() => {

        const loadImg = async () => {
            if (!!item) {

                const data = await axiosInstance.get(item.link)
                if (data) {
                    setImg(item.link)
                } else {
                    const data2 = await axiosInstance.get(item.link2)
                    if (data2) {
                        setImg(item.link2)
                    } else {
                        setImg(defaultImg)
                    }
                }


            }

        }
        loadImg()
    }, []) // só sera ativado quando alguma pro
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
            <p className="name">{item.name}</p>

        </div>
    )
}