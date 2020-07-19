import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";

export const fetchData = (url) =>
  new Promise(async (resolve, rej) => {
    const response = await fetch(url)
      .then((res) => res.json())
      .then((res) => res);
    return resolve(response);
  });

export const menuItems = () => [
  { title: "Dashboard", key: "dashboard", path: "/", component: Dashboard },
  {
    title: "Products",
    key: "products",
    path: "/products",
    component: Products,
  },
  {
    title: "Categories",
    key: "categories",
    path: "/categories",
    component: Categories,
  },
];

export const getDefaultSelectedPath = () =>
  menuItems().find((item) => "#" + item.path === window.location.hash).key;
