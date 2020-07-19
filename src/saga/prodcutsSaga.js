import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchProductsAPI } from "../service/products";
import { Creators } from "../reducer/index";

const { successRequestProucts } = Creators;

function* fetchProducts(action) {
  try {
    const products = yield call(fetchProductsAPI);
    yield put(successRequestProucts({ products: products }));
  } catch (err) {}
}

export function* fetchProductsSaga() {
  yield takeEvery("REQUEST_PRODUCTS", fetchProducts);
}
