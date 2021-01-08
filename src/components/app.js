import React, {useState} from "react";
import {Header, SearchForm, JobListing, Pagination} from "./main-components.js";
import {apiCall} from "../services/api-call.js";

export const App = (props) => {
    const [listings, setListings] = useState([]);
    const [location, setLocation] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [fullTime, setFullTime] = useState(false);
    const [page, setPage] = useState(1);
    const [hidePagination, setHidePagination] = useState(true);

    // Event handlers
    const onSubmit = (event) => {
      event.preventDefault();
  
      const newPage = 1;
  
      apiCall(jobDescription, location, fullTime, newPage)
        .then(data => {
          setListings(data);
        });
  
      setHidePagination(false);
    };
  
    const onChangeLocation = (event) => {
      setLocation(event.target.value);
    };
  
    const onChangeJobDescription = (event) => {
      setJobDescription(event.target.value);
    };
  
    const onChangeFullTime = (event) => {
      setFullTime(event.target.checked);
    };
  
    const onClickPagination = (event) => {
      const newPage = page + 1;
  
      apiCall(jobDescription, location, fullTime, newPage)
        .then(data => {
          setListings(data);
        });
  
      setPage(page + 1);
    };
  
    return (
      <div>
        <Header />
        <SearchForm 
          onSubmit={onSubmit}
          onChangeLocation={onChangeLocation}
          onChangeJobDescription={onChangeJobDescription}
          onChangeFullTime={onChangeFullTime}
        />
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
        <Pagination onClick={onClickPagination} hide={hidePagination} />
      </div>
    );
};