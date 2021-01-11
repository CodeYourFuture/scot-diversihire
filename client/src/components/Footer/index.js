import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { Segment, Divider, Grid, Button } from "semantic-ui-react";
import "./style.css";

const Footer = () => (
  <Segment className="footer-all">
    <Segment.Group horizontal className="footer-content">
      <Segment>
        <List className="custom-list" horizontal>
          <List.Item to="" as={Link}>
            TERMS & CONDITIONS
          </List.Item>

          <List.Item to="" as={Link}>
            PRIVACY POLICY
          </List.Item>

          <List.Item to="" as={Link}>
            COOKIE POLICY
          </List.Item>

          <List.Item to="" as={Link}>
            CONTACT US
          </List.Item>
        </List>
      </Segment>
      <Segment textAlign="right">
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={6} className="follow-us">
              <h5>FOLLOW US</h5>
            </Grid.Column>
            <Grid.Column width={10} className="social-icons">
              <Button icon="instagram" inverted />
              <Button icon="twitter" inverted />
              <Button icon="facebook" inverted />
              <Button icon="youtube" inverted />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Segment.Group>
    <Divider className="divider" horizontal />

    <Segment className="footer-bottom">
      <List horizontal>
        <List.Item>LANGUAGE:</List.Item>

        <List.Item>ENGLISH</List.Item>
      </List>
    </Segment>
  </Segment>
);

export default Footer;
