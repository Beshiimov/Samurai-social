import s from "./Users.module.css";
import User from "./User/User";
import PaginationContainer from "./Pagination/PaginationContainer";

const Users = (props) => {
  return (
    <div className={s.users}>
      <User {...props} />

      <PaginationContainer
        page={props.page}
        setPage={props.setPage}
        totalCount={props.totalCount}
      />
    </div>
  );
};
export default Users;
