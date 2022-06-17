// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts : builder.query({
      query: () => '/products',
      providesTags:['Products']
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST"
      }),
      invalidatesTags:['Products']
  }),
}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByIdQuery, useAddProductMutation,useGetProductsQuery } = productApi
