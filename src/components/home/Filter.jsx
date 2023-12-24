import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useCallback } from "react";

const Filter = ({ filter, setFilter }) => {
  const setMinPrice = useCallback(
    (e) => {
      const newMin = Number(e.target.value);
      setFilter((prev) => {
        return { max: prev.max, min: newMin };
      });
    },
    [setFilter]
  );

  const setMaxPrice = useCallback(
    (e) => {
      const newMax = Number(e.target.value);
      setFilter((prev) => {
        return { min: prev.min, max: newMax };
      });
    },
    [setFilter]
  );

  return (
    <Box w={"50%"}>
      <FormControl
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        gap={"50px"}
      >
        <Box>
          <FormLabel htmlFor="min-price">Min Price</FormLabel>
          <Input
            bg={"white"}
            id="min-price"
            type="number"
            value={filter.min}
            onChange={setMinPrice}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="max-price">Max Price</FormLabel>
          <Input
            bg={"white"}
            id="max-price"
            type="number"
            value={filter.max}
            onChange={setMaxPrice}
          />
        </Box>
      </FormControl>
    </Box>
  );
};

export default Filter;
