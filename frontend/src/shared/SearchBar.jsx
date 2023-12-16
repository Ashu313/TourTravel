import React, { useState } from 'react';
import './SearchBar.css';
import { Col, Form, FormGroup } from 'reactstrap';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [distance, setDistance] = useState(0);
  const [maxGroupSize, setMaxGroupSize] = useState(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    console.log({ location, distance, maxGroupSize });

    if (location === '' || distance === '' || maxGroupSize === '') {
      alert('All fields are required');
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
      console.log(res);

      if (!res.ok) {
        alert('Something went wrong');
        return;
      }

      const result = await res.json();

      navigate(`/tours/search?city=${location}`, {
        state: result.data
      });
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-compass-3-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input type="text" placeholder="Where are you going?" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-time-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="number" placeholder="Distance Km" value={distance} onChange={(e) => setDistance(e.target.value)} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-group-line"></i>
            </span>
            <div>
              <h6>Max people</h6>
              <input type="number" placeholder="0" value={maxGroupSize} onChange={(e) => setMaxGroupSize(e.target.value)} />
            </div>
          </FormGroup>

          <span className="search_icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
