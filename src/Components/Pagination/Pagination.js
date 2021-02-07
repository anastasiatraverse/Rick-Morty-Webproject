import "./Pagination.scss";
import { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import _ from "lodash";

const Pagination = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState("");
  const setPagesArray = _(Array(pages))
    .fill(null)
    .map((el, ind) => ind)
    .value();

  const handleClick = (page, isClickable = true) => {
    if (!isClickable) return;
    setCurrentPage(page);
  };

  const renderPage = (page) => {
    const isActive = page == currentPage;
    return (
      <div
        className={`Pagination__page ${
          isActive ? "Pagination__page_active" : ""
        }`}
        key={page}
      >
        {page + 1}
      </div>
    );
  };

  const renderArrowButton = (isNext = false) => {
    const nextPage = isNext ? currentPage + 1 : currentPage - 1;
    const isArrowClickable =
      (!isNext && nextPage > 0) || (isNext && nextPage < pages - 1);
    return (
      <div
        className="Pagination__page"
        onClick={(handleClick(nextPage), isArrowClickable)}
      >
        <Arrow
          className={`Pagination__arrow ${isNext ? "Page__arrow_next" : ""} ${
            isArrowClickable ? "Page__arrow_active" : ""
          }`}
        />
      </div>
    );
  };

  return (
    <div className="Pagination">
      {renderArrowButton()}
      {_.map(setPagesArray, renderPage)}
      {renderArrowButton(true)}
    </div>
  );
};

export default Pagination;
