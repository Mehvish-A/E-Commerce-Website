
import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const products = [
  // Product data as defined earlier...
  {
    id: 1,
    name: "Product 1",
    description: "New Arrival",
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: "This is a detailed description of Product 1.",
  },
  {
    id: 2,
    name: "Product 2",
    description: "New Arrival",
    image:
      "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600",
    details: "This is a detailed description of Product 2.",
  },
  // Add more products as needed...
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <Row>
        <Col sm="6">
          <Card>
            <CardImg top width="100%" src={product.image} alt={product.name} />
          </Card>
        </Col>
        <Col sm="6">
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardText>{product.description}</CardText>
            <CardText>{product.details}</CardText>
            <Button onClick={() => window.history.back()}>Back</Button>
          </CardBody>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;