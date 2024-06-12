import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchProduct as fetchProductFromAPI } from "./productAPI";

export interface IProductProps {
  id: string,
  title: string,
  image: string,
  subtitle: string,
  brand: string,
  sales: object[],
  reviews: object[],
  retailer: string,
  details: object[],
  tags: string[]
}

export interface IProductSliceState {
  data: IProductProps,
  status: "idle" | "loading" | "failed";
}

const initialState: IProductSliceState = {
  data: {
    id: "",
    title: "",
    image: "",
    subtitle: "",
    brand: "",
    reviews: [],
    retailer: "",
    details: [],
    tags: [],
    sales: []
  },
  status: "idle",
};

export const productSlice = createAppSlice({
  name: "product",
  initialState,
  reducers: (create) => ({
    setProduct: create.reducer(
      (state, action: PayloadAction<IProductProps>) => {
        state.data = action.payload;
      },
    ),
    fetchProduct: create.asyncThunk(
      async (id: string) => {
        const response: object = await fetchProductFromAPI(id);
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state: IProductSliceState, action: PayloadAction<any>) => {
          state.status = "idle";
          state.data = action.payload.data[0];
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
  }),
  selectors: {
    selectProduct: (product) =>  product.data,
    selectStatus: (product) => product.status,
  },
});

export const { fetchProduct } =
  productSlice.actions;

export const { selectProduct, selectStatus, } = productSlice.selectors;
