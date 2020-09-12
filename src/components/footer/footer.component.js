import React from "react";
import { Grid, Container, Header } from "semantic-ui-react";

import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <Container>
      <Grid columns={4} divided>
        <Grid.Row>
          <Grid.Column>
            <Header as="h5">Contact us</Header>
            <p>Email:</p>
            <p>Tel</p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h5">Who we are</Header>
            <p>Location</p>
            <p>Visit</p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h5">News & Info </Header>
            <p>Latest Release</p>
            <p>New Doctors</p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h5">Schedule a meeting</Header>
            <p>Checkout Doc.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid Column centered style={{marginTop: '80px'}}>
      © 2020 All Rights Reserved
      </Grid>
    </Container>
  </div>
);

export default Footer;
