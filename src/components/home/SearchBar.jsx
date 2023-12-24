import { Box, Input } from "@chakra-ui/react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Box pt={"30px"} width={"50%"}>
      <Input
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        borderColor={"teal"}
        bg={"white"}
      />
    </Box>
  );
};

export default SearchBar;
