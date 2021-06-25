import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import api from "../api";
import { logout, setAuth, setLoggedIn } from "../store/actions/auth";
import { wrapper } from "../store/store";

const Index = (props) => {
  const auth = useSelector((state) => state.authReducer.auth);
  const loggedIn = useSelector((state) => state.authReducer.loggedIn);
  const dispatch = useDispatch();

  return (
    <>
      {loggedIn && (
        <div>
          <h2>{auth.email}</h2>
          <button
            onClick={() => {
              logout(dispatch);
            }}
          >
            Logout
          </button>
        </div>
      )}
      {!loggedIn && (
        <h2>
          <LoginForm />
        </h2>
      )}
    </>
  );
};
export default Index;
