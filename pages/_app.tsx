import "../styles/globals.css";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import App from "next/app";
import getConfig from "next/config";
import { NextComponentType } from "next";
import { appWithTranslation } from "next-i18next";

interface Props {
  config: any;
}

const MyApp: NextComponentType<
  AppContext,
  AppInitialProps & Props,
  AppProps & Props
> = ({ Component, pageProps, config }) => {
  console.log("client-side: ", config);
  return <Component {...pageProps} />;
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const config = getConfig();
  console.log("server-side: ", config);
  return { ...appProps, config };
};

export default appWithTranslation(MyApp);
