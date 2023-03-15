import { BtnPagination } from "./Button.styles";

function ButtonPagination(props) {
    let { item, changePagination, index, currentIndeceSelected } = props;

    return (
        <BtnPagination primary className={currentIndeceSelected == index ? "selected" : ""} onClick={() => changePagination(item.offset, index)}>
            {index + 1}
        </BtnPagination>

    )
}

export default ButtonPagination;