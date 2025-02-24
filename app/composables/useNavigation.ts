const links = [
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
  },
  {
    name: "Portfolios",
    path: "/portfolios",
  },
  {
    name: "About me",
    path: "/about",
  },
];

export const useNavigation = () => {
  return {
    links,
  };
};
