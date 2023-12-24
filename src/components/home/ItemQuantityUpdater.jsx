import { Flex, IconButton } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCart } from "../../context";

const ItemQuantityUpdater = ({ product }) => {
  const { cart, dispatch } = useCart();

  let currCount = cart.find((item) => item.id === product.id)?.count;

  if (!currCount) currCount = 0;

  const onIncrement = () =>
    dispatch({ itemId: product.id, type: "update", itemCount: currCount + 1 });
  const onDecrement = () =>
    dispatch({ itemId: product.id, type: "update", itemCount: currCount - 1 });

  return (
    <Flex justify={"space-around"} align={"center"}>
      <IconButton
        icon={<AiOutlineMinus />}
        onClick={onDecrement}
        rounded={100}
      />
      {currCount}
      <IconButton
        icon={<AiOutlinePlus />}
        onClick={onIncrement}
        rounded={100}
      />
    </Flex>
  );
};
export default ItemQuantityUpdater;
