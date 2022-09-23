/* eslint-disable no-irregular-whitespace */
/* eslint-disable max-len */
import React from "react";
import LandingPage from "../Landing/landing.js";
import About from "../About/about.js";
import Blog from "../Blog/blog.js";
import Work from "../Work/work.js";
import NotFound from "../NotFound/404.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../Theme/theme.js";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://e0d16eb7c2964ae9846cce4381edf397@o1423625.ingest.sentry.io/6771320",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      ),
    }),
  ],
  tracesSampleRate: 1.0,
});

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

/**
 * Main App function. Uses client side routing with React Router.
 * @return {ReactElement} the applicaiton!
 */
function App() {
  console.log(`
  ░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗  ████████╗░█████╗░  ███╗░░░███╗██╗░░░██╗
  ░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝  ╚══██╔══╝██╔══██╗  ████╗░████║╚██╗░██╔╝
  ░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░  ░░░██║░░░██║░░██║  ██╔████╔██║░╚████╔╝░
  ░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░  ░░░██║░░░██║░░██║  ██║╚██╔╝██║░░╚██╔╝░░
  ░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗  ░░░██║░░░╚█████╔╝  ██║░╚═╝░██║░░░██║░░░
  ░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝  ░░░╚═╝░░░░╚════╝░  ╚═╝░░░░░╚═╝░░░╚═╝░░░
  
  ░██████╗██╗████████╗███████╗
  ██╔════╝██║╚══██╔══╝██╔════╝
  ╚█████╗░██║░░░██║░░░█████╗░░
  ░╚═══██╗██║░░░██║░░░██╔══╝░░
  ██████╔╝██║░░░██║░░░███████╗
  ╚═════╝░╚═╝░░░╚═╝░░░╚══════╝`);
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Router>
          <SentryRoutes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/work" element={<Work />}></Route>
          </SentryRoutes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
