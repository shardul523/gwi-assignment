import { Input } from "@chakra-ui/react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Input
      placeholder="Search products"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      width={"50%"}
      my={"50px"}
      borderColor={"teal"}
    />
  );
};

export default SearchBar;
