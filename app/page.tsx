import type { Metadata } from "next";
import { Product } from "./components/product/Product";

export default function IndexPage() {
  return <Product />;
}

export const metadata: Metadata = {
  title: "React Frontend Assessment",
};
