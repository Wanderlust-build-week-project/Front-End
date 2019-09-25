//this page will not be displayed but will take in data from the User Browsing page and return it as cards
import { Route, Link } from "react-router-dom";
import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardDeck
} from "reactstrap";
import styled from "styled-components";
/* good going on the reactstrap cards, Cori. They look really nice :) */
const UserBrowsingCards = props => {
  // console.log (props)
  const [place, setPlace] = useState({
    place: ""
  });
  const [oranizer, setOrganizer] = useState({
    oranizer: ""
  });
  useEffect(() => {
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/locations/${props.location}`)
      .then(response => {
        // console.log(`this is the display location`, response.data.location)
        setPlace({ place: response.data.location });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    //   console.log(props.organizerID)
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/organizers/${props.organizerID}`)
      .then(response => {
        // console.log(`these are the organizers`, response)
        setOrganizer({ oranizer: response.data.name });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
<<<<<<< HEAD

      return (
        <>
        <UserBrowsingWrapper>
         <Header />
          <BrowserCarousel />
          <BrowseAllListWrapper>
            <div>
            {browser.map(browse => {
              return (
                <UserBrowsingCards 
                  id = {browse.id}
                  desc={browse.description}
                  title={browse.name}
                  hours={browse.duration}
                  date={browse.date}
                  completed ={browse.complted}
                  organizerID ={browse.organizer_id}
                  location ={browse.location_id}
                />)
            })}
          </div>
            <Route
              path="/user-browsing-page/browse-all-list/:id"
              render={props => (
                <UserExperience
                  {...props}
                  tripsData={tripsData}
                  images={slpashImages}
                />
              )}
            />
          </BrowseAllListWrapper>
        </UserBrowsingWrapper> 
        </>
      );
};


export default UserBrowsingCards
=======
  return (
    <div>
      <CardDeck>
        <Card>
          <Link to={`/user-browsing-page/browse-all-list/${props.id}`}>
            <CardImg top width="100%" src={props.image} alt={props.title} />
            <CardBody {...props.key}>
              <CardTitle>{props.title}</CardTitle>
              <CardSubtitle>{props.desc}</CardSubtitle>
              <CardText>{place.place}</CardText>
              <CardText>{props.hours}</CardText>
              <CardText>{props.date}</CardText>
              <CardText>{oranizer.oranizer}</CardText>
            </CardBody>
          </Link>
        </Card>
      </CardDeck>
    </div>
  );
};
export default UserBrowsingCards;
>>>>>>> b0631859241473e7d85c4d6e247419bd6f37d237
