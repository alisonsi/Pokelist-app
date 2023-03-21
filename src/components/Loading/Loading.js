import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingStyle } from './Loading.style';

export default function Loading({ loading }) {
    let color = "blue";
    let type = "spin"
    return (
        !!loading ?  <LoadingStyle className='content_loading'>
        <ReactLoading type={type} color={color} height={'20px'} width={'20px'} />
    </LoadingStyle> : <div></div>
    )
}
