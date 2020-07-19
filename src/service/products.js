import { fetchData } from "../utils";
export const fetchProductsAPI = () =>
  fetchData("http://localhost:8000/products");
