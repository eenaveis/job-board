const Header = (props) => {
    return (
      <div id="header">
        <h1>Job Board</h1>
      </div>
    )
  };
  
  const SearchForm = (props) => {
    return (
      <form id="search-form" onSubmit={props.onSubmit}>
        <div className="search-box">
          <label htmlFor="jobDescription">Job description</label>
          <input id="jobDescription" onChange={props.onChangeJobDescription} />
        </div>
        <div className="search-box">
          <label htmlFor="location">Location</label>
          <input id="location" onChange={props.onChangeLocation} />
        </div>
        <div id="full-time-box">
          <input id="full-time" type="checkbox" onChange={props.onChangeFullTime} />
          <label id="full-time-label" htmlFor="full-time">Full Time Only</label>
        </div>
        <button id="submit-button" type="submit">Search</button>
      </form>
    );
  };
  
  const JobListing = (props) => {
    return (
      <div className="listing">
        <div className="title">
          <h4>{props.jobTitle}</h4>
          <span>{props.company}</span>
        </div>
        <div className="meta">
          <span>{props.location}</span>
          <span>{props.timeElapsed}</span>
        </div>
      </div>
    );
  };

  const Pagination = (props) => {
    const styling = {
      display: "none"
    }
    
    if(!props.hide) {
      styling.display = "block";
    }

    return (
      <div>
        <button id="pagination-button" onClick={props.onClick} style={styling}>Show more awesome jobs</button>
      </div>
    )
  }

  export {Header, SearchForm, JobListing, Pagination};