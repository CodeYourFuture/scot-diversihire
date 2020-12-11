import React from "react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import { Segment, Divider, Grid, Button } from "semantic-ui-react";
import "./style.css";

const Footer = () => (
  <Segment
    style={{
      backgroundColor: "rgba(17, 17, 17, 1)",
      margin: 0
    }}
  >
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
              <Button icon="instagram" inverted style={{ marginRight: 10 }} />
              <Button icon="twitter" inverted style={{ marginRight: 10 }} />
              <Button icon="facebook" inverted style={{ marginRight: 10 }} />
              <Button icon="youtube" inverted style={{ marginRight: 10 }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Segment.Group>
    <Divider className="divider" horizontal />

    <Segment className="footer-bottom">
      <List horizontal>
        <List.Item

        /*        style={{
            color: "#ffffff",
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 12,
            lineHeight: "96%",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }} */
        >
          LANGUAGE:
        </List.Item>

        <List.Item
        /*       style={{
            color: "#ffffff",
            fontWeight: "bold",
            marginRight: 15,
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontSize: 12,
            lineHeight: "96%",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }} */
        >
          ENGLISH
        </List.Item>
      </List>
    </Segment>
  </Segment>
);

export default Footer;
