import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";

const ProductCard = ({ img, title, price }) => {
  return (
    <Card w={"250px"} h={"350px"}>
      <CardBody>
        <Image width={"150px"} h={"150px"} src={img} borderRadius={"lg"} />
        <Stack>
          <Text>{title}</Text>
          <Text>{`$ ${price}`}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
