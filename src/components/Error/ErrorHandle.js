import { ErroHandleStyle } from "./ErrorHandle.styles";
import { TbFaceIdError } from 'react-icons/tb';

export default function ErrorHandle({ error }) {
    return (
        <ErroHandleStyle >
            {!!error ?
                <div className="content_error">
                    <TbFaceIdError size="2rem"></TbFaceIdError>
                    <h3>
                        <p>Não foi possível carregar os dados</p>
                    </h3>
                </div>
                :

                <div></div>}
        </ErroHandleStyle>
    )
}