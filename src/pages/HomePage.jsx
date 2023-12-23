import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchAllProducts } from "../utility";
import LoaderScreen from "../components/LoaderScreen";
import { Flex } from "@chakra-ui/react";
import Filter from "../components/home/Filter";
import SearchBar from "../components/home/SearchBar";
import Products from "../components/home/Products";

const HomePage = () => {
  const [page, setPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: ["fetchProducts", page],
    queryFn: fetchAllProducts,
  });

  if (isPending) return <LoaderScreen />;

  const { products } = data;

  console.log(products);

  return (
    <Flex>
      <Flex
        flexDir={"column"}
        borderRightWidth={"1px"}
        borderRightColor={"grey"}
      >
        <SearchBar />
        <Filter />
      </Flex>
      <Products />
    </Flex>
  );
};

export default HomePage;
