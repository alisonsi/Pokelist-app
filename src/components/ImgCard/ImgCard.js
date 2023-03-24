import { useEffect, useState } from "react";
import "./ImgCard.css"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import defaultImg from "../../assets/default.jpeg";
import axiosInstance from "../../services/Axios";

export default function ImgCard(props) {
    let { animated, item } = props;
    const [imgSrc, setImgSrc] = useState();
    const [loadImg, setLoadImg] = useState(false);
    const [disableAnimation, setDisableAnimation] = useState(false);
    const handleImgError = () => {
        if (imgSrc !== item.link2) {
            setImgSrc(item.link2);
        } else if (item.link2 !== defaultImg) {
            setDisableAnimation(true)
            setImgSrc(defaultImg);
        }
    };
    const handleImgLoad = () => {
        console.log("load");
        setLoadImg(true)
    }

    useEffect(() => {
        const load = async () => {
            setImgSrc(item.link)
        }
        if (item) {

            load()
        }
    }, [])

    // useEffect(() => {

    //     const loadImg = async () => {
    //         if (!!item) {

    //             const data = await axiosInstance.get(item.link)
    //             if (data) {
    //                 setImg(item.link)
    //             } else {
    //                 const data2 = await axiosInstance.get(item.link2)
    //                 if (data2) {
    //                     setImg(item.link2)
    //                 } else {
    //                     setImg(defaultImg)
    //                 }
    //             }


    //         }

    //     }
    //     loadImg()
    // }, []) // só sera ativado quando alguma pro
    return (
        <div className="item" >

            <img style={{ visibility: loadImg ? 'visible' : 'hidden' }} className={animated && !disableAnimation ? 'scaleImg' : 'scaleImgNone'} src={imgSrc} alt={item.name} onError={handleImgError} onLoad={handleImgLoad} />


            <div style={{
                display: !loadImg ? 'block' : 'none',

            }}>
                <Skeleton circle={true} style={{

                    width: 100,
                    height: 100
                }}> </Skeleton>

            </div>


            <p className="name">{item.name}</p>
        </div>
    )
}