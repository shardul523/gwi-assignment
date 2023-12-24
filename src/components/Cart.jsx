import { HStack, Box, Button } from "@chakra-ui/react";
import { useCart } from "../context";

const Cart = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (accCount, item) => accCount + (item.count ? item.count : 0),
    0
  );

  const totalPrice = cart.reduce(
    (accSum, item) => accSum + (item.count ? item.price * item.count : 0),
    0
  );

  return (
    <HStack>
      <Button bg={"white"} rounded={100}>
        {totalItems}
      </Button>
      <Box>{`$ ${totalPrice}`}</Box>
    </HStack>
  );
};
export default Cart;
