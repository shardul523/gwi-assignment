import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchAllProducts } from "../utility";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import Filter from "../components/home/Filter";
import SearchBar from "../components/home/SearchBar";
import Products from "../components/home/Products";

const INITIAL_PRICE_FILTER = { min: 0, max: 2000 };

const HomePage = () => {
  const [searchParam, setSearchParam] = useState("");
  const [priceFilter, setPriceFilter] = useState(INITIAL_PRICE_FILTER);
  const [isDesktop] = useMediaQuery("(min-width: 550px)");

  const { data, isPending } = useQuery({
    queryKey: ["fetchProducts"],
    queryFn: fetchAllProducts,
  });

  return (
    <Flex flexDir={"column"} minH={"90vh"}>
      <Flex
        flexDir={isDesktop ? "row" : "column"}
        alignItems={"center"}
        gap={5}
        py={"30px"}
        mx={"20px"}
      >
        <SearchBar search={searchParam} setSearch={setSearchParam} />
        <Filter filter={priceFilter} setFilter={setPriceFilter} />
      </Flex>
      {isPending && <div>Loading Products...</div>}
      {!isPending && (
        <Products
          search={searchParam}
          data={data}
          flexGrow={1}
          filter={priceFilter}
        />
      )}
    </Flex>
  );
};

export default HomePage;
