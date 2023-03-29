import { useEffect, useState } from "react";
import { Content } from "./styles"
import Skeleton from 'react-loading-skeleton';
import defaultImg from "../../assets/default.jpeg";

export default function ImgCard(props) {
    let { animated, link, link2, name } = props;
    const [imgSrc, setImgSrc] = useState();
    const [loadImg, setLoadImg] = useState(false);
    const [disableAnimation, setDisableAnimation] = useState(false);
    const handleImgError = () => {
        if (imgSrc !== link2) {
            setImgSrc(link2);
        } else if (link2 !== defaultImg) {
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
            setImgSrc(link)
        }
        if (link && link2 && name) {

            load()
        }
    }, [])

    // useEffect(() => {

    //     const loadImg = async () => {
    //         if (!!item) {

    //             const data = await axiosInstance.get(link)
    //             if (data) {
    //                 setImg(link)
    //             } else {
    //                 const data2 = await axiosInstance.get(link2)
    //                 if (data2) {
    //                     setImg(link2)
    //                 } else {
    //                     setImg(defaultImg)
    //                 }
    //             }


    //         }

    //     }
    //     loadImg()
    // }, []) // só sera ativado quando alguma pro
    return (
        <Content>
            <div className="item" >

                <img role="img" style={{ visibility: loadImg ? 'visible' : 'hidden' }} className={animated && !disableAnimation ? 'scaleImg' : 'scaleImgNone'} src={imgSrc} alt={name} onError={handleImgError} onLoad={handleImgLoad} />


                <div style={{
                    display: !loadImg ? 'block' : 'none',

                }}>
                    <Skeleton circle={true} style={{

                        width: 100,
                        height: 100
                    }}> </Skeleton>

                </div>


                <p className="name">{name}</p>
            </div>

        </Content>
    )
}