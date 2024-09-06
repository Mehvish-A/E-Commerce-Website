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
    src: "https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    className: "d-block w-50 img-fluid",
    altText: "Slide 1",
    caption: "Welcome to our store!",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE2fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    className: "d-block w-50 img-fluid",
    caption: "Check out the latest arrivals!",
  },
];

// Testimonials carousel items
const cardItems = [
  {
    title: "John Doe",
    text: "This is an amazing product! Highly recommended! I really apperciate your work",
  },
  {
    title: "Jane Smith",
    text: "Great service and quality. I will definitely buy again.I love your products",
  },
  {
    title: "Alice Brown",
    text: "Outstanding quality and great experience shopping!I will buy in future also",
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
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      description: "New Arrival",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/pair-trainers_144627-3798.jpg?uid=R27608263&ga=GA1.1.1406659089.1721897367&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Product 4",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/men-shoes_1203-8654.jpg?t=st=1725527060~exp=1725530660~hmac=e6d4f149c161500f7274b62f3b36796f9948ea06b46bde495536cb11282dec0a&w=996",
    },
    {
      id: 5,
      name: "Product 5",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?t=st=1725515109~exp=1725518709~hmac=4c25430efac5ca043083470e204966c3f555cb60d9a8cf2ac778f8466188b2e7&w=996",
    },
    {
      id: 6,
      name: "Product 6",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/shoes_1203-8138.jpg?t=st=1725527453~exp=1725531053~hmac=3602a3b49b0b452856ca32c57b54bb85be3d804ca72385a5da228d8cef33c91d&w=996",
    },
    {
      id: 7,
      name: "Product 7",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/shoes_1203-8154.jpg?uid=R27608263&ga=GA1.1.1406659089.1721897367&semt=ais_hybrid",
    },
    
    {
      id: 8,
      name: "Product 8",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/sport-shoes-running_1203-7549.jpg?t=st=1725547018~exp=1725550618~hmac=cb4f13ec0d34f0b04a85e251bd02ad7c3a333fdcce4d3167ffb3df0f83a6ecca&w=996",
    },
    {
      id: 9,
      name: "Product 9",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/shoes-men-white-top-two_1203-6455.jpg?t=st=1725547622~exp=1725551222~hmac=157c06fb622fb0e520f52a4745c0a99bd8acb4302717c3bba0c4c1e42905cbc7&w=996",
    },
    {
      id: 10,
      name: "Product 10",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/men-shoes_1203-7424.jpg?uid=R27608263&ga=GA1.1.1406659089.1721897367&semt=ais_hybrid",
    },
    {
      id: 11,
      name: "Product 11",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/men-shoes_1203-8435.jpg?uid=R27608263&ga=GA1.1.1406659089.1721897367&semt=ais_hybrid",
    },
    {
      id: 12,
      name: "Product 12",
      description: "New Arrival",
      image: "https://img.freepik.com/free-photo/men-shoes_1203-8698.jpg?uid=R27608263&ga=GA1.1.1406659089.1721897367&semt=ais_hybrid",
    },
    {
      id: 13,
      name: "Product 13",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 14,
      name: "Product 14",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 15,
      name: "Product 15",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1574946943172-4800feadfab7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHNob2VzfGVufDB8fDB8fHww",
    },
    {
      id: 16,
      name: "Product 16",
      description: "Best Selling",
      image: "https://plus.unsplash.com/premium_photo-1663134176589-eb782d207d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHNob2VzfGVufDB8fDB8fHww",
    },
    {
      id: 17,
      name: "Product 17",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNob2VzfGVufDB8fDB8fHww",
    },
    {
      id: 18,
      name: "Product 18",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHNob2VzfGVufDB8fDB8fHww",
    },
    {
      id: 19,
      name: "Product 19",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1556048219-bb6978360b84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDMxfHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 20,
      name: "Product 20",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1542840410-51984f97783a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTA4fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 21,
      name: "Product 21",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1597594839610-79160ac6a654?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjU1fHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 22,
      name: "Product 22",
      description: "Best Selling",
      image: "https://images.unsplash.com/photo-1723082053696-f94b182d4693?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjYxfHxzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
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
              src="https://i.pinimg.com/236x/4f/ee/89/4fee8975130a2d04c0ffd2b930674d4b.jpg"
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
              <div className="col-6 col-md-2 animate_animated animate_fadeIn">
                <img
                  src="https://images-cdn.ubuy.co.in/637ec3b56af2800ead4fe525-christmas-men-lace-business-leather.jpg"
                  alt=" Casual Shoes"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Casual Shoes</p>
              </div>
              <div className="col-6 col-md-2 animate_animated animate_fadeIn">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17WRSd4UXPpPQHuyoBMxM_pDxjGn8HfADBQ&s"
                  alt="Boots"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Boots</p>
              </div>
              <div className="col-6 col-md-2 animate_animated animate_fadeIn">
                <img
                  src="https://sloshoes.com/cdn/shop/products/GenuineLeathershoesGianteBLK_1.jpg?v=1673431523"
                  alt="Loafers"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Loafers</p>
              </div>
              <div className="col-6 col-md-2 animate_animated animate_fadeIn">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGgf7tkSzdCV25NKmyT-vYg7q68sF1N6L-Q&s"
                  alt="Sneakers"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Sneakers</p>
              </div>
              <div className="col-6 col-md-2 animate_animated animate_fadeIn">
                <img
                  src="https://ae-pic-a1.aliexpress-media.com/kf/S5f9cc8482af54316ba3a838b8427fa2dx.jpg_640x640Q90.jpg_.webp"
                  alt="Sandals"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Sandals</p>
              </div>
              <div className="col-6 col-md-2 animate_animated animate_fadeIn">
                <img
                  src="https://kaisz.pk/wp-content/uploads/2022/12/black-kat.jpg"
                  alt="Joggers"
                  className="img-fluid rounded-circle mb-2"
                />
                <p>Joggers</p>
              </div>
            </div>

            {/* Discount Section */}
            <div className="row text-center text-white  pink py-4">
              <div className="col-12 col-sm-3 animate_animated animate_bounceIn">
                <div className="discount-card">
                  <h3>10% off</h3>
                  <p>Orders of $49</p>
                </div>
              </div>
              <div className="col-12 col-sm-3 animate_animated animate_bounceIn">
                <div className="discount-card">
                  <h3>15% off</h3>
                  <p>Orders of $89</p>
                </div>
              </div>
              <div className="col-12 col-sm-3 animate_animated animate_bounceIn">
                <div className="discount-card">
                  <h3>20% off</h3>
                  <p>Orders of $149</p>
                </div>
              </div>
              <div className="col-12 col-sm-3 ">
                <button className="animate_animated animate_fadeInUp btn-oval">
                  CODE: ZORVATH-SUMMER-24
                </button>
                <p className="animate_animated animate_fadeInUp">
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
