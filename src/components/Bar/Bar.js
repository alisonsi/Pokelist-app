import { useEffect } from "react";
import "./Bar.css"
export default function Bar(props) {
    let { item, animated, details } = props;
    return (
        <div className={animated ? 'bar widtAnimation' : 'widtAnimationNone bar'}>
            <div >

                <strong>Lvl:</strong> <span>20</span>
            </div>

            <div >
                <div>Power:</div>
                <div className="power-container">
                    {
                        !!animated ? <div className="power" style={{ transition: '2s', width: `${item.offsetPower}%`, backgroundColor: 'orange' }}></div> : <div></div>
                    }
                </div>
            </div>
        </div>
    )
}