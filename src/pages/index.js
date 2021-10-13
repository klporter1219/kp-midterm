import React from 'react';

import { Segment, Header, Container, Button } from 'semantic-ui-react';

import Menu from '../components/Menu';
import './index.css';

const HomePage = () => {
  return (
    <>
      <Menu />
      <Segment className="homeBody" centered>
          <Header as="h2" textAlign="center">Home</Header>
          <Container text textAlign="center">
            Some random text that needs not readen.
          </Container>
          <Container textAlign="center">
            <Button color="green" className="joinButton">
              Join Now!
            </Button>
          </Container>
      </Segment>
      <Container>
        <Header as="h3" className="newsHeader">News</Header>
        Some more random text.
      </Container>
    </>
  )
};

export default HomePage;