import api from "../api";
import { setAuth, setLoggedIn } from "../store/actions/auth";
import { wrapper } from "../store/store";

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

WrappedApp.getInitialProps = async function (appContext) {
  // const res = await api.get('/sanctum/csrf-cookie');
  console.log("passe");
  try {
    const {
      data: { data: user },
    } = await api.get("/api/user", {
      headers: appContext.ctx.req ? appContext.ctx.req.headers : undefined,
    });
    appContext.ctx.store.dispatch(setAuth(user));
    appContext.ctx.store.dispatch(setLoggedIn(true));
  } catch (error) {
    appContext.ctx.store.dispatch(setLoggedIn(false));
  }

  return { props: { ok: true } };
};

export default wrapper.withRedux(WrappedApp);
