import axios from "axios";
import { FC } from "react";

export function getProductData(id: number) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then(function (response) {
      return response.data;
    });
}

export function getProductsByIds(ids: number[]) {
  const commaSepeartedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSepeartedIds,
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export const getProductList = (
  sortBy: string,
  search: string,
  page: number,
  sortType: string
) => {
  let params: {
    sortBy?: string;
    search?: string;
    page?: number;
    sortType?: string;
  } = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }

  if (sortType) {
    params.sortType = sortType;
  }

  if (search) {
    params.search = search;
  }

  if (page) {
    params.page = page;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then(function (response) {
      return response.data;
    });
};

export function saveCart(cart: {}) {

  return axios
    .post(
      "https://myeasykart.codeyogi.io/carts",
      { data: cart },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then(function (response) {
      return response.data;
    });
}

export function getCart() {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then(function (response) {
      return response.data;
    });
}