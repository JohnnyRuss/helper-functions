//////////////////////////////////////////////////
////////////////// API Doc //////////////////////
////////////////////////////////////////////////

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ProductT {
  id: number;
  title: string;
  description: string;
  price: number;
}

interface GetProductT {
  id: number;
  text: string;
}

export const dummyProductsApi = createApi({
  reducerPath: "videosApi", // to identify api
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8800",
    prepareHeaders: (headers, { getState, endpoint }) => {
      if (endpoint === "refresh") {
      }

      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["PRODUCTS"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductT[], void>({
      query: () => "/products?_start=0&_end=15",
      providesTags: ["PRODUCTS"],
    }),

    getProduct: builder.query<ProductT, GetProductT>({
      query: ({ id, text }) => `/products/${id}`,
    }),

    addProduct: builder.mutation<void, ProductT>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["PRODUCTS"],
    }),

    updateProduct: builder.mutation<
      void,
      { id: string; credentials: ProductT }
    >({
      query: ({ id, credentials }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["PRODUCTS"],
    }),

    deleteProduct: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        url: `/products${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PRODUCTS"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useGetProductQuery,
  useLazyGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = dummyProductsApi;

// 1.0
// const { error, isError, isLoading, isFetching, isSuccess,refetch } =
//   useGetAllProductsQuery();
// 2.0
// const [getProoducts] = useLazyGetAllProductsQuery();
// const {} = getProoducts();

// 2.
// const { data } = useGetProductQuery({
//   id: 1,
//   text: "text",
// });

// 3.
// const [addProduct, { data, isError, isLoading }] = useAddProductMutation();
// await addProduct({ description: "desc", id: 2, price: 40, title: "title" });

////////////////////////////////////////////////////
////////////////// Store Doc //////////////////////
//////////////////////////////////////////////////
import { configureStore } from "@reduxjs/toolkit";
import root from "./reducers/root";
import { dummyProductsApi } from "./api";

const dummyProductsMiddleware = dummyProductsApi.middleware;

const store = configureStore({
  reducer: {
    [dummyProductsApi.reducerPath]: dummyProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyProductsMiddleware),
});

export type RootStateT = ReturnType<typeof store.getState>;
export type DispatchT = typeof store.dispatch;

export default store;
