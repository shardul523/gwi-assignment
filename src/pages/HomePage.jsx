import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchAllProducts } from "../utility";
import LoaderScreen from "../components/LoaderScreen";
import { Divider, Flex } from "@chakra-ui/react";
import Filter from "../components/home/Filter";
import SearchBar from "../components/home/SearchBar";
import Products from "../components/home/Products";

const HomePage = () => {
  const [searchParam, setSearchParam] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: fetchAllProducts,
  });

  if (isPending) return <LoaderScreen />;

  return (
    <Flex>
      <Flex flexDir={"column"}>
        <SearchBar search={searchParam} setSearch={setSearchParam} />
        <Filter />
      </Flex>
      <Divider orientation="vertical" height={"100vh"} />
      <Products search={searchParam} data={data} flexGrow={1} />
    </Flex>
  );
};

export default HomePage;
