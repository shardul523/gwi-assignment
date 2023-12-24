import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useCart } from "../../context";
import ItemQuantityUpdater from "./ItemQuantityUpdater";

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();

  const inCart = cart.some((item) => item.id === product.id);
  const inStock = product.stock > 0;

  const onAdd = () =>
    dispatch({
      itemId: product.id,
      type: "add",
      itemPrice: product.price,
    });

  return (
    <Card borderRadius={"2xl"} w={"225px"}>
      <CardBody>
        <Stack spacing={"5"}>
          <Image
            position={"relative"}
            left={"20px"}
            src={product.thumbnail}
            objectFit={"contain"}
            boxSize={"150px"}
            borderRadius={"lg"}
          />
          <Heading fontSize={"md"}>{product.title}</Heading>
          <Text fontWeight={"bold"}>${product.price}</Text>
          {inCart ? (
            <ItemQuantityUpdater product={product} />
          ) : (
            <Button onClick={onAdd} isDisabled={!inStock}>
              Add to Cart
            </Button>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
