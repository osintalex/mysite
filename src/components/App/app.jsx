/* eslint-disable no-irregular-whitespace */
/* eslint-disable max-len */
import React from "react";
import LandingPage from "../Landing/landing.jsx";
import About from "../About/about.jsx";
import Blog from "../Blog/blog.jsx";
import Work from "../Work/work.jsx";
import Talks from "../Talks/talks.jsx";
import NotFound from "../NotFound/404.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../Theme/theme.js";

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
      <ChakraProvider value={system}>
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/work" element={<Work />} />
            <Route path="/talks" element={<Talks />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
