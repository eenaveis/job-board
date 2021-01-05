import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const Header = (props) => {
  return (
    <div>
      <h1>Job Board</h1>
    </div>
  )
}

const SearchForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="jobDescription">Job description</label>
      <input id="jobDescription" onChange={props.jobDescriptionOnChange}></input>
      <label htmlFor="location">Location</label>
      <input id="location" onChange={props.locationOnChange}></input>
      <label htmlFor="full-time">Full-time</label>
      <input id="full-time" type="checkbox"></input>
      <button type="submit">Search</button>
    </form>
  );
}

const JobListing = (props) => {
  return (
    <div>
      <h4>{props.jobTitle}</h4>
      <span>{props.company}</span>
    </div>
  );
}

const App = (props) => {
  const [listings, setListings] = useState([]);
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  
  const handleOnSubmit = (event) => {
    event.preventDefault();

    console.log(`https://jobs.github.com/positions.json?description=${jobDescription}&location=${location}`);

    axios
      .get(`https://jobs.github.com/positions.json?description=${jobDescription}&location=${location}`)
      .then(response => {
        setListings(response.data)
      });
  };

  const locationOnChange = (event) => {
    setLocation(event.target.value);
  };

  const jobDescriptionOnChange = (event) => {
    setJobDescription(event.target.value);
  };

  return (
    <div>
      <Header />
      <SearchForm 
        onSubmit={handleOnSubmit}
        locationOnChange={locationOnChange}
        jobDescriptionOnChange={jobDescriptionOnChange}
      />
      <h1>Jobs</h1>
      <div id="listings">
        <ul>
          {listings.map((listing, i) => {
            return <li key={i}>
              <JobListing 
                jobTitle={listing.title}
                company={listing.company}
              />
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
