import { Box, HStack, Link } from "@chakra-ui/react";
import React from "react";
import logo from "./initials.svg";
import { useNavigate } from "react-router";
import "../CSS/loading.css";
// Each of the links on the top navbar
const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/work",
    title: "Work",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/about",
    title: "About",
  },
];

/**
 * Navigation menu component.
 */
const Navbar = () => {
  const navigate = useNavigate();
  const menuBar = () => {
    return (
      <HStack
        isInline
        spacing={4}
        alignItems="center"
        aria-label="navigation-menu"
      >
        {[
          links.map((link) => {
            return (
              <Box key={link.url}>
                <Link
                  px={4}
                  py={2}
                  onClick={() => navigate(link.url)}
                  rounded="sm"
                  fontSize="sm"
                  _hover={{
                    textDecoration: "none",
                    bgColor: "gray.800",
                  }}
                  _focus={{ outline: "none" }}
                >
                  {link.title}
                </Link>
              </Box>
            );
          }),
        ]}
      </HStack>
    );
  };

  return (
    <Box as="header" zIndex={1} borderTopWidth={5} borderColor="blue.400">
      <Box maxW="6xl" mx="auto" px={4}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          py={4}
          flexDir={["column", "column", "row"]}
          gridGap={[4, 4, 0]}
        >
          <Box d="flex" alignItems="center">
            <Link
              onClick={() => navigate("/")}
              d="flex"
              _focus={{ outline: "none" }}
              aria-label="Logo"
            >
              <img
                alt="site-logo"
                aria-label="return-home"
                height={40}
                width={40}
                src={logo}
                id="image-that-loads"
              />
            </Link>
          </Box>
          {menuBar()}
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
