import { useState } from "react"
import "./Button.css";

function ButtonPagination(props) {
    let { item, changePagination, index, currentIndeceSelected } = props;

    return (
        <div className="btn">
            <button className={currentIndeceSelected == index ? "selected" : ""} onClick={() => changePagination(item.offset, index)}>{index + 1}</button>
        </div>
    )
}

export default ButtonPagination;