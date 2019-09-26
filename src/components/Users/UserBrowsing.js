import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import UserBrowsingCards from "./UserBrowsingCards";
import styled from "styled-components";
import splashPhotos from "../../images/gerneral-landing-images/unSplashData";
import './UserBrowsing.css';
import Header from "./UserHeader";

const UserBrowsing = props => {
  const [browser, setBrowser] = useState([]);
  const [search, setSearch] = useState({
    searchTerm: ""
  })
  const [foundItems, setFoundItems] = useState([])
  var idArray = []

const [exprnc, setExprnc] = useState([{}]);
  
  useEffect(() => {
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/exp`)
      .then(res => {
        setBrowser(res.data);
        setExprnc(res.data.id, res.data.name)
        // console.log(res)
      })
      .catch(err => console.log("Loading Error Experinces", err));
  }, []);
  // ^ for cards

  const handleChange = e => {
    // console.log(search)
    setSearch({searchTerm: e.target.value});
  }

  const submitSearch = e => {
    localStorage.setItem("SearchResults", "")
    e.preventDefault();
    axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/exp`)
    .then(res => {
      console.log(`this is res.data`, res.data)
      res.data.map(item => {
        // console.log(item) 
        var re = new RegExp(search.searchTerm, 'gi');
        console.log(`this is item.name`, item.name)
        console.log(`this is search`, re)
        var check = item.name.match(re)
        // console.log(`this is check`, check)
        if (check) {
          var id = item.id 
          // setFoundItems({...foundItems, id})
          idArray.push(id)
          console.log(`found`, idArray)
        } else {
          console.log('not found')
        }
      }).then(
        console.log(foundItems),
        localStorage.setItem("SearchResults", JSON.stringify(idArray)),
        props.history.push("/search-results")
      )
  })
  .catch(err => console.log("Loading Error Experinces", err));
}

  const UserBrowsingWrapper = styled.div`
    position: relative;
    top: 10vh;
  `;

  const BrowseAllListWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  `;

  const Button = styled.button`
    padding: 5px 40px;
    margin: 10px auto;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.24);
  `;


  
  return (
    <>
    <div className = "searchForm">
      <div>
        <form onSubmit={submitSearch}>
          <h2 className = "search-header">Search Experiences</h2>
          <input
            type="text"
            placeholder="Search Experiences"
            onChange = {(e) => handleChange(e)}
            value = {search.searchTerm}
          ></input>
        </form>
      </div>
    </div>
      <Header />
      <UserBrowsingWrapper>
        <BrowseAllListWrapper>
          {browser.map(browse => {
            return (
              <div>
                <UserBrowsingCards
                  id={browse.id}
                  desc={browse.description}
                  title={browse.name}
                  hours={browse.duration}
                  date={browse.date}
                  completed={browse.complted}
                  organizerID={browse.organizer_id}
                  location={browse.location_id}
                  image={splashPhotos[browse.id]}
                  exprnc={exprnc}
                />
              </div>
            );
          })}
        </BrowseAllListWrapper>
      </UserBrowsingWrapper>
    </>
  );
};
export default UserBrowsing;
  
