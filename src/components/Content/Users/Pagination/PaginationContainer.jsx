import React from "react";
import s from "../Users.module.css";
import Pagination from "./Pagination";

class PaginationContainer extends React.Component {
  totalPages() {
    return Math.ceil(this.props.totalCount / 10);
  }

  render() {
    const pagesNumberReducer = () => {
      const page = this.props.page;
      const pages = [];

      if (page > 1) {
        for (let j = page - 2; j < page; j++) {
          if (!(j <= 0)) {
            pages.push(j);
          }
        }
      }
      for (let i = page; i <= page + 3; i++) {
        pages.push(i);
        if (i === this.totalPages()) break;
      }
      return pages;
    };

    const checkOnClick = (e) => {
      if (e === this.props.page) return;
      this.props.setPage(e);
    };

    const pagesBtn = pagesNumberReducer().map((e) => (
      <button
        key={e}
        className={this.props.page === e ? s.disabled : null}
        onClick={() => checkOnClick(e)}
      >
        {e}
      </button>
    ));

    return (
      <Pagination
        {...this.props}
        totalPages={this.totalPages()}
        pagesBtn={pagesBtn}
      />
    );
  }
}

export default PaginationContainer;
