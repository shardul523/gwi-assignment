import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

import "./home.css";
import ProductCard from "./ProductCard";

const itemsPerPage = 8;

const Products = ({ data, search, filter, ...props }) => {
  const [page, setPage] = useState(0);

  const { products = [] } = useMemo(() => data, [data]);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        if (product.price < filter.min || product.price > filter.max)
          return false;
        const { title } = product;
        const lowerTitle = title.toLowerCase();
        const lowerSearch = search.toLowerCase();
        return lowerTitle.includes(lowerSearch);
      }),
    [search, products, filter]
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => setPage(0), [search]);

  if (filteredProducts.length === 0)
    return <Center>No product to display</Center>;

  return (
    <Box {...props} justifyContent={"space-between"}>
      <SimpleGrid
        columns={[2, 2, 3, 4]}
        spacing={"40px"}
        my={"20px"}
        ml={"20px"}
      >
        {filteredProducts
          .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
          .map((product) => (
            <ProductCard
              key={product.id}
              img={product.thumbnail}
              price={product.price}
              description={product.description}
              title={product.title}
            />
          ))}
      </SimpleGrid>
      <Box bg={"teal"} color={"white"}>
        <ReactPaginate
          className="paginate"
          nextLabel="next"
          breakLabel="..."
          previousLabel="prev"
          renderOnZeroPageCount={null}
          pageCount={totalPages}
          pageRangeDisplayed={1}
          forcePage={page}
          onPageChange={(e) => setPage(e.selected)}
          activeClassName="active-page"
        />
      </Box>
    </Box>
  );
};

export default Products;
