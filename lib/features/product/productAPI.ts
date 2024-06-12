export const fetchProduct = async (id: string) => {
  const response = await fetch("/api/product", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};
