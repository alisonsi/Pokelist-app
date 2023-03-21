
import ButtonPagination from "./Button";
import { BtnPagination } from "./Button.styles"
import { PaginationStyle } from "./Pagination.styles"

export default function PaginationPoker(props) {
    let { totalPagination, currentIndiceSelected, currentListIndices, changePagination, setCurrentListIndices, count } = props;
    const prevNext = (option) => {

        if (option == "next") {
            if (currentListIndices.pageIndex < currentListIndices.totalPage) {
                let total = (count / 20);
                console.log(total, currentListIndices.current);

                let next = {
                    ...currentListIndices,
                    current: currentListIndices.current + 10,
                    pageIndex: currentListIndices.pageIndex += 1
                };

                setCurrentListIndices(next)
            }
        } else {
            if (currentListIndices.pageIndex > 1) {
                let prev = {
                    ...currentListIndices,
                    current: currentListIndices.current - 10,
                    pageIndex: currentListIndices.pageIndex -= 1
                };
                setCurrentListIndices(prev)
            }

        }

    }
    return (
        <PaginationStyle >
            <div className="pagination_content">
                <div className="pagination">
                    <div className="prev">
                        <BtnPagination onClick={() => prevNext("prev")}>
                            <p>Prev</p>
                        </BtnPagination>

                    </div>
                    <div className="index" >
                        {
                            totalPagination.map((i, index) => {
                                return <ButtonPagination currentIndeceSelected={currentIndiceSelected} key={i.offset} changePagination={changePagination} item={i} index={index} />

                            }).filter((i, index) => {
                                return index >= currentListIndices.current && index < currentListIndices.current + 10
                            })
                        }
                    </div>
                    <div className="next">
                        <BtnPagination onClick={() => prevNext("next")}>
                            <p>Next</p>
                        </BtnPagination>
                    </div>

                </div>
                <div className="count_index">
                    {currentListIndices.pageIndex}/{currentListIndices.totalPage}
                </div>

            </div>
        </PaginationStyle>
    )
}