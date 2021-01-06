const Header = (props) => {
    return (
      <div>
        <h1>Job Board</h1>
      </div>
    )
  };
  
  const SearchForm = (props) => {
    return (
      <form onSubmit={props.onSubmit}>
        <label htmlFor="jobDescription">Job description</label>
        <input id="jobDescription" onChange={props.onChangeJobDescription}></input>
        <label htmlFor="location">Location</label>
        <input id="location" onChange={props.onChangeLocation}></input>
        <label htmlFor="full-time">Full-time</label>
        <input id="full-time" type="checkbox"></input>
        <button type="submit">Search</button>
      </form>
    );
  };
  
  const JobListing = (props) => {
    return (
      <div>
        <h4>{props.jobTitle}</h4>
        <span>{props.company}</span>
      </div>
    );
  };

  export {Header, SearchForm, JobListing};