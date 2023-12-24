import { Input } from "@chakra-ui/react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Input
      placeholder="Search products"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      marginRight={"20px"}
      w={"300px"}
      my={"50px"}
    />
  );
};

export default SearchBar;
