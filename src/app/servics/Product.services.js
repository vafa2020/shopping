import { ProductDataList } from "../data/Product.data";

const getProducts = (id) => {
  const a = parseInt(id, 10);
  return ProductDataList.find((x) => x.id === a);
};

export { getProducts };
