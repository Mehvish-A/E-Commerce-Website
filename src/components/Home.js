import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import classnames from "classnames";
import "../App.css";

// Carousel items for the first carousel
const carouselItems = [
  {
    id: 1,
    src: "public/images/banner.png",
    className: "d-block w-100 img-fluid",
    altText: "Slide 1",
    caption: "Welcome to our store!",
  },
  {
    id: 2,
    className: "d-block w-100 img-fluid",
    src: "public/imges/banner.png",
    caption: "Check out the latest arrivals!",
  },
];

// Testimonials carousel items
const cardItems = [
  {
    title: "John Doe",
    text: `"This is an amazing product! Highly recommended! I really apperciate your work"`,
  },
  {
    title: "Jane Smith",
    text: `"Great service and quality. I will definitely buy again.I love your products"`,
  },
  {
    title: "Alice Brown",
    text: `"Outstanding quality and great experience shopping!I will buy in future also"`,
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);
  const [carouselAnimating, setCarouselAnimating] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  // Tab toggle function
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  // Modal toggle function
  const toggleModal = () => setModal(!modal);

  // Carousel control for first carousel (banners)
  const next = () => {
    if (carouselAnimating) return;
    const nextIndex =
      carouselActiveIndex === carouselItems.length - 1
        ? 0
        : carouselActiveIndex + 1;
    setCarouselActiveIndex(nextIndex);
  };

  const previous = () => {
    if (carouselAnimating) return;
    const previousIndex =
      carouselActiveIndex === 0
        ? carouselItems.length - 1
        : carouselActiveIndex - 1;
    setCarouselActiveIndex(previousIndex);
  };

  const goToIndex = (newIndex) => {
    if (carouselAnimating) return;
    setCarouselActiveIndex(newIndex);
  };

  // Handle product click in cards to display modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    toggleModal();
  };

  // Slides for first carousel
  const slides = carouselItems.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setCarouselAnimating(true)}
        onExited={() => setCarouselAnimating(false)}
        key={item.id}
      >
        <img src={item.src} alt={item.altText} className="d-block w-100" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  // Second carousel state and controls
  const [cardCarouselActiveIndex, setCardCarouselActiveIndex] = useState(0);
  const [cardCarouselAnimating, setCardCarouselAnimating] = useState(false);

  const cardNext = () => {
    if (cardCarouselAnimating) return;
    const nextIndex =
      cardCarouselActiveIndex === cardItems.length - 1
        ? 0
        : cardCarouselActiveIndex + 1;
    setCardCarouselActiveIndex(nextIndex);
  };

  const cardPrevious = () => {
    if (cardCarouselAnimating) return;
    const previousIndex =
      cardCarouselActiveIndex === 0
        ? cardItems.length - 1
        : cardCarouselActiveIndex - 1;
    setCardCarouselActiveIndex(previousIndex);
  };

  const cardGoToIndex = (newIndex) => {
    if (cardCarouselAnimating) return;
    setCardCarouselActiveIndex(newIndex);
  };

  // Slides for second (testimonial) carousel
  const cardSlides = cardItems.map((item, index) => {
    return (
      <CarouselItem
        key={index}
        onExiting={() => setCardCarouselAnimating(true)}
        onExited={() => setCardCarouselAnimating(false)}
      >
        <Row className="justify-content-center mb-5 ">
          <Col md="6 px-5  ">
            <Card className="text-center size">
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardText>{item.text}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CarouselItem>
    );
  });

  // Example product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "New Arrival",
      image: "public/imges/product1.png",
    },
    {
      id: 2,
      name: "Product 2",
      description: "New Arrival",
      image: "public/images/product2.png",
    },
    {
      id: 3,
      name: "Product 3",
      description: "New Arrival",
      image: "public/imges/product3.png",
    },
    {
      id: 4,
      name: "Product 4",
      description: "New Arrival",
      image: "public/imges/product4.png",
    },
    {
      id: 5,
      name: "Product 5",
      description: "New Arrival",
      image: "public/imges/product5.png",
    },
    {
      id: 6,
      name: "Product 6",
      description: "New Arrival",
      image: "public/imges/product6.png",
    },
    {
      id: 7,
      name: "Product 7",
      description: "New Arrival",
      image: "public/imges/product7.png",
    },
    {
      id: 8,
      name: "Product 8",
      description: "Best Selling",
      image: "public/imges/product8.png",
    },
    {
      id: 9,
      name: "Product 9",
      description: "Best Selling",
      image: "public/imges/product9.png",
    },
    {
      id: 10,
      name: "Product 10",
      description: "New Arrival",
      image: "public/imges/product10.png",
    },
    {
      id: 11,
      name: "Product 11",
      description: "New Arrival",
      image: "public/imges/product11.png",
    },
    {
      id: 12,
      name: "Product 12",
      description: "New Arrival",
      image: "public/imges/product12.png",
    },
    {
      id: 13,
      name: "Product 13",
      description: "New Arrival",
      image: "public/imges/product13.png",
    },
    {
      id: 14,
      name: "Product 14",
      description: "New Arrival",
      image: "public/imges/product14.png",
    },
    {
      id: 15,
      name: "Product 15",
      description: "Best Selling",
      image: "public/imges/product15.png",
    },
    {
      id: 16,
      name: "Product 16",
      description: "Best Selling",
      image: "public/imges/product16.png",
    },
    {
      id: 17,
      name: "Product 17",
      description: "Best Selling",
      image: "public/imges/product17.png",
    },
    {
      id: 18,
      name: "Product 18",
      description: "Best Selling",
      image: "public/imges/product18.png",
    },
    {
      id: 19,
      name: "Product 19",
      description: "Best Selling",
      image: "public/imges/product19.png",
    },
    {
      id: 20,
      name: "Product 20",
      description: "Best Selling",
      image: "public/imges/product20.png",
    },
    {
      id: 21,
      name: "Product 21",
      description: "Best Selling",
      image: "public/imges/product21.png",
    },
    {
      id: 22,
      name: "Product 22",
      description: "Best Selling",
      image: "public/imges/product22.png",
    },
    {
      id: 23,
      name: "Product 23",
      description: "Best Selling",
      image: "public/imges/product23.png",
    },
    {
      id: 24,
      name: "Product 24",
      description: "Best Selling",
      image: "public/imges/product24.png",
    },
  ];

  return (
    <Container>
      <Row>
        <Col>
          {/* First Carousel - Banners */}
          <Carousel
            activeIndex={carouselActiveIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={carouselItems}
              activeIndex={carouselActiveIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>

          {/* Tabs for Product Categories */}
          <Nav tabs className="mt-4">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => toggle("1")}
              >
                New Arrival
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => toggle("2")}
              >
                Best Selling
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                {products
                  .filter((product) => product.description === "New Arrival")
                  .map((product) => (
                    <Col sm="3" key={product.id}>
                      <Card onClick={() => handleProductClick(product)}>
                        <CardImg
                          top
                          width="100%"
                          src={product.image}
                          alt={product.name}
                        />
                        <CardBody className="imageheight">
                          <Button onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                          </Button>
                          <CardTitle>{product.name}</CardTitle>
                          <CardText>{product.description}</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                {products
                  .filter((product) => product.description === "Best Selling")
                  .map((product) => (
                    <Col sm="3" key={product.id}>
                      <Card onClick={() => handleProductClick(product)}>
                        <CardImg
                          top
                          width="100%"
                          src={product.image}
                          alt={product.name}
                        />
                        <CardBody>
                          <CardTitle>{product.name}</CardTitle>
                          <CardText>{product.description}</CardText>
                          <Button onClick={() => dispatch(addToCart(product))}>
                            Add to Cart
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </TabPane>
          </TabContent>
        </Col>
      </Row>

      {/* Modal for Product Details */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          {selectedProduct && selectedProduct.name}
        </ModalHeader>
        <ModalBody>
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="img-fluid mb-4"
              />
              <p>{selectedProduct.description}</p>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button
            color="primary"
            onClick={() => {
              dispatch(addToCart(selectedProduct));
              toggleModal();
            }}
          >
            Add to Cart
          </Button>
        </ModalFooter>
      </Modal>

      {/* Contact Section */}
      {/* <ContactSection /> */}

      <Container className="my-5">
        <Row>
          <Col md={6}>
            {/* Replace 'your-image-url.jpg' with the actual URL of your image */}
            <CardImg
              top
              width="100%"
              src="./imges/instagram3.png"
              alt="Description of image"
            />
          </Col>

          <Col md={6}>
            <div className="animated-element height">
              <CardText>
                <h4>About the Deal</h4>
                <p>
                Unlock Exclusive Savings on Our Best-Selling Items! Enjoy up to 20% OFF on select products from top brands, plus FREE SHIPPING on all orders over $50. With our flexible payment options, you can buy now and pay later. But don't wait - this limited-time offer won't last long, so snag the best deals before they're gone and start saving today!
                </p>
              </CardText>
            </div>
          </Col>
        </Row>
        <div>
          <div className="container mt-5">
            {/* Product Categories Section */}
            <div className="row text-center mb-4">
              <div className="col-6 col-md-2 animate__animated animate__fadeIn">
                <img
                  src="./imges/cat.png"
                  alt="Kids Toys"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Kids Toys</p>
              </div>
              <div className="col-6 col-md-2 animate__animated animate__fadeIn">
                <img
                  src="./imges/cat2.png"
                  alt="Teddy Bear"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Teddy Bear</p>
              </div>
              <div className="col-6 col-md-2 animate__animated animate__fadeIn">
                <img
                  src="./imges/cat3.png"
                  alt="Boys"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Boys</p>
              </div>
              <div className="col-6 col-md-2 animate__animated animate__fadeIn">
                <img
                  src="./imges/cat4.png"
                  alt="Shoes"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Shoes</p>
              </div>
              <div className="col-6 col-md-2 animate__animated animate__fadeIn">
                <img
                  src="./imges/cat5.png"
                  alt="Cribs"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Cribs</p>
              </div>
              <div className="col-6 col-md-2 animate__animated animate__fadeIn">
                <img
                  src="./imges/cat6.png"
                  alt="Wood Toys"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Wood Toys</p>
              </div>
            </div>

            {/* Discount Section */}
            <div className="row text-center text-white  pink py-4">
              <div className="col-12 col-sm-3 animate__animated animate__bounceIn">
                <div className="discount-card">
                  <h3>10% off</h3>
                  <p>Orders of $49</p>
                </div>
              </div>
              <div className="col-12 col-sm-3 animate__animated animate__bounceIn">
                <div className="discount-card">
                  <h3>15% off</h3>
                  <p>Orders of $89</p>
                </div>
              </div>
              <div className="col-12 col-sm-3 animate__animated animate__bounceIn">
                <div className="discount-card">
                  <h3>20% off</h3>
                  <p>Orders of $149</p>
                </div>
              </div>
              <div className="col-12 col-sm-3 ">
                <button className="animate__animated animate__fadeInUp btn-oval">
                  CODE: ZORVATH-SUMMER-24
                </button>
                <p className="animate__animated animate__fadeInUp">
                  End at 21:00 – 17 June 2023
                </p>
              </div>
            </div>

            {/* Second Carousel - Testimonials */}
            <div className="mt-3">
              <h2 className="text-center">Our Happy Customer</h2>
              <Carousel
                activeIndex={cardCarouselActiveIndex}
                next={cardNext}
                previous={cardPrevious}
              >
                <CarouselIndicators
                  items={cardItems}
                  activeIndex={cardCarouselActiveIndex}
                  onClickHandler={cardGoToIndex}
                />
                {cardSlides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={cardPrevious}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={cardNext}
                />
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Home;