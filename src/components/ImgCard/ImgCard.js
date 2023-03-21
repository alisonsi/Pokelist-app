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

            axiosInstance.get(item.link).then(() => {
                setImg(item.link)
            }, error => {
                axiosInstance.get(item.link2).then(() => {

                    setImg(item.link2)
                }, error => {
                    setImg(defaultImg)
                })
            })
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