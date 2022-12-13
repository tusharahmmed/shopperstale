import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://shopperstale.onrender.com/",
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["User", "PaymentMethods", "india", "uk", "china"],

  endpoints: (builder) => ({
    // user method
    addUserToDb: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),

    editUserToDb: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    getUserDetails: builder.query({
      query: (email) => `/users/${email}`,
      providesTags: ["User"],
    }),

    // payment methods
    getPaymentMethods: builder.query({
      query: () => `/payment-methods`,
      providesTags: ["PaymentMethods"],
    }),
    addPaymentMethod: builder.mutation({
      query: (data) => ({
        url: "/payment-methods",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["PaymentMethods"],
    }),
    deletePaymentMethod: builder.mutation({
      query: (id) => ({
        url: "/payment-methods",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["PaymentMethods"],
    }),

    // india market
    getIndianSite: builder.query({
      query: () => `/market/india`,
      providesTags: ["india"],
    }),
    deleteIndianSite: builder.mutation({
      query: (id) => ({
        url: "/market/india",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["india"],
    }),

    // china market
    getChinaSite: builder.query({
      query: () => `/market/china`,
      providesTags: ["china"],
    }),
    deleteChinaSite: builder.mutation({
      query: (id) => ({
        url: "/market/china",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["china"],
    }),

    // uk market
    getUkSite: builder.query({
      query: () => `/market/uk`,
      providesTags: ["uk"],
    }),
    deleteUkSite: builder.mutation({
      query: (id) => ({
        url: "/market/uk",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["uk"],
    }),

    addNewSite: builder.mutation({
      query: (data) => ({
        url: "/add-new-site",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, erro, args) => [`${args?.country}`],
    }),

    // invoice api
    generateInvoice: builder.mutation({
      query: (data) => ({
        url: "/invoice",
        body: data,
        method: "POST",
      }),
    }),
    getInvoice: builder.query({
      query: () => `/market/china`,
    })

  }),
});

export const {
  useGetPaymentMethodsQuery,
  useAddPaymentMethodMutation,
  useDeletePaymentMethodMutation,
  useGetIndianSiteQuery,
  useGetChinaSiteQuery,
  useGetUkSiteQuery,
  useAddNewSiteMutation,
  useDeleteIndianSiteMutation,
  useDeleteChinaSiteMutation,
  useDeleteUkSiteMutation,
  useAddUserToDbMutation,
  useEditUserToDbMutation,
  useGetUserDetailsQuery,
  useGenerateInvoiceMutation,
  useGetInvoiceQuery
} = ApiSlice;
