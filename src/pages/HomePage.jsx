import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchAllProducts } from "../utility";
import LoaderScreen from "../components/LoaderScreen";
import { Divider, Flex, useMediaQuery } from "@chakra-ui/react";
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

  if (isPending) return <LoaderScreen />;

  return (
    <Flex flexDir={"column"}>
      <Flex
        flexDir={isDesktop ? "row" : "column"}
        alignItems={"center"}
        gap={5}
      >
        <SearchBar search={searchParam} setSearch={setSearchParam} />
        <Filter filter={priceFilter} setFilter={setPriceFilter} />
      </Flex>
      <Divider orientation="horizontal" ml={"20px"} />
      <Products
        search={searchParam}
        data={data}
        flexGrow={1}
        filter={priceFilter}
      />
    </Flex>
  );
};

export default HomePage;
