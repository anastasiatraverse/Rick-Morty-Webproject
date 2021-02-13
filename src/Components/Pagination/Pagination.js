import "./Pagination.scss";
import { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import _ from "lodash";

const Pagination = ({ pages }) => {
  const [
    currentPage,
    setCurrentPage,
  ] = useState("");

  // const getDisplayedPages = () => {
  //   const minPage = Math.max(currentPage - 2, 0);
  //   const maxPage = Math.min(minPage + 4, pages);
  //   if (currentPage + 2 >= pages) return _.range(Math.max(0, Math.max(pages - 5)), pages);
  //   if (currentPage - 2 <= 0) return _.range(0, Math.min(5, pages));
  //   return _.range(minPage, maxPage + 1);
  // };

  const setPagesArray = _(Array(pages))
    .fill(null)
    .map((el, ind) => ind)
    .value();

  const handleClick = (
    page,
    isClickable = true
  ) => () => {
    console.log(page);
    if (!isClickable) return;
    setCurrentPage(page);
  };

  const renderPage = (page) => {
    const isActive =
      page === currentPage;
    return (
      <div
        onClick={handleClick(
          page,
          !isActive
        )}
        className={`Pagination__page ${
          isActive
            ? "Pagination__page_active"
            : ""
        }`}
        key={page}
      >
        {page + 1}
      </div>
    );
  };

  const renderArrowButton = (
    isNext = false
  ) => {
    const nextPage = isNext
      ? currentPage + 1
      : currentPage - 1;
    const isArrowClickable =
      (!isNext && nextPage > 0) ||
      (isNext && nextPage < pages - 1);
    return (
      <div
        className="Pagination__page"
        onClick={handleClick(
          nextPage,
          isArrowClickable
        )}
      >
        <Arrow
          className={`Pagination__arrow ${
            isNext
              ? "Page__arrow_next"
              : ""
          } ${
            isArrowClickable
              ? "Page__arrow_active"
              : ""
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
