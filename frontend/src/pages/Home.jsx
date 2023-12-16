import React from 'react';
import './../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpeg'
import heroImg02 from '../assets/images/hero-img02.jpeg'
import heroVideo from '../assets/images/hero-video2.mp4'
import WorldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

import ServiceList from '../services/ServiceList';

function Home() {
  return (<>
  <Container>
    <div className="home-container">
      <section className="text-section">
        <div className='quote'>
          <Subtitle subtitle={'Know Before You Go'}/>
          <img src={WorldImg} alt="World" />
        </div>
        <h1>Travel More, Create Stories that Last a <span>Lifetime.</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa asperiores quidem temporibus tempore tempora.</p>
      </section>
      <section className="media-section">
        <div className="image-container">
          <img src={heroImg} alt="Image1" />
        </div>
        <div className="video-container">
          <video controls>
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="image-container">
          <img src={heroImg02} alt="Image2" />
        </div>
      </section>
   </div>
   </Container>
   <Container>
   <section className='search-sec'>
    
   < div className='search-bar '>
    <SearchBar></SearchBar>
    </div>
    </section>
    </Container>


    <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services_subtitle">What we serve</h5>
          <h2 className='services_title'>We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
   </section>
   <section>
    <Container>
      <Row>
        <Col lg='12' className='"mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured_tour-title">Our featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
   </section>

   <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className="experience_content">
          <Subtitle subtitle={'Experience'}/>

          <h2>With our all experience <br/> we will serve you</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br/>
          Ex corporis culpa non blanditiis, sunt odit! Natus ex soluta nesciunt ipsum </p>
        </div>
        <div className="counter_wrapper d-flex align-items-center gap-5">
          <div className="counter_box">
            <span>12k+</span>
            <h6>Successfull Trip</h6>
          </div>
          <div className="counter_box">
            <span>2k+</span>
            <h6>Regular clients</h6>
          </div>
          <div className="counter_box">
            <span>15</span>
            <h6>Years experience</h6>
          </div>
        </div>
        </Col>
        <Col lg='6'>
         <div className="experience_img">
          <img src={experienceImg} alt="" />
         </div>
        </Col>
      </Row>
    </Container>
   </section>

   <section>
    <Container>
      <Row>
        < Col lg='12'>
          <Subtitle subtitle={'Gallery'} />
          <h2 className="gallery_title">Visit our customers tour gallery</h2>
        </Col>
        <Col lg='12'>
          <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
   </section>

   <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Customers Love'}/>
          <h2 className='testimonial_title'>What our customers say about us</h2>
          <Testimonial/>
        </Col>
      </Row>
    </Container>
   </section>

   <Newsletter></Newsletter>
   
  
  
</>
  );
}

export default Home;
