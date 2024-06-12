"use client";

import { useEffect } from "react";
import { ProductSalesGraph } from "./ProductSalesGraph";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import layoutStyles from "../../styles/layout.module.css"
import styles from "./Product.module.css";

import {selectProduct, fetchProduct } from "@/lib/features/product/productSlice";
import { ProductDetails } from "@/app/components/product/ProductDetails";

export const Product = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);

  // TODO: Rewrite to fetch this data server-side
  // TODO: Rewrite to use product ID from URL
  useEffect(() => {
    dispatch(fetchProduct('B007TIE0GQ'));
  }, [])

  return (
    <>
      <main className={layoutStyles.main}>
        <h2 className={styles.productHeader}>Retail Sales</h2>
        <ProductSalesGraph sales={product.sales} />
      </main>
      <aside className={layoutStyles.aside}>
        <ProductDetails product={product} />
      </aside>
    </>
  );
};
