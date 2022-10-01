import s from "../Users.module.css";

const Pagination = (props) => {
  return (
    <div className={s.pagination}>
      {props.page >= 4 && (
        <>
          <button
            onClick={() => {
              props.setPage(1);
            }}
          >
            1
          </button>
          <span>...</span>
        </>
      )}

      <div className={s.pages}>{props.pagesBtn}</div>

      {props.page < props.totalPages - 3 && (
        <>
          <span>...</span>
          <button
            onClick={() => {
              props.setPage(props.totalPages);
            }}
          >
            {props.totalPages}
          </button>
        </>
      )}
    </div>
  );
};

export default Pagination;
