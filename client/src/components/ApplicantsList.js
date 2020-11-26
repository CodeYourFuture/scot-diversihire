import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Label, Button, Segment, Header } from "semantic-ui-react";
import { getAllProfiles } from "../api/profiles";
import ContactApplicantButton from "./ContactApplicantButton";
import "../styles/ApplicantsList.css";

const ApplicantsList = () => {
  const [profiles, setProfiles] = useState([]);
  const fetchProfiles = async () => {
    const response = await getAllProfiles();
    setProfiles(response);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return profiles.map((profile, key) => {
    return (
      <Segment key={key + "1s"} raised>
        <Grid key={key + "2g"}>
          <Grid.Column key={key + "3g"} width={12}>
            <Label key={key + "4l"} as="label">
              Job Title
            </Label>
            <Segment key={key + "5s"} size="small">
              <Header key={key + "6h"} as="h2" size="small">
                {profile.job_title}
              </Header>
            </Segment>
            <Label key={key + "7l"} as="label">
              Bio
            </Label>
            <Segment key={key + "8s"}>
              <p>{profile.bio}</p>
            </Segment>
          </Grid.Column>

          <Grid.Column key={key + "9g"} width={3}>
            <div key={key + "10d"} className="button-style">
              <Button
                key={key + "11b"}
                fluid
                primary
                as={Link}
                to={`/public-applicant-profiles/${profile.profile_public_id}`}
              >
                View Profile
              </Button>
            </div>

            <div key={key + "12d"} className="button-style">
              <ContactApplicantButton
                profilePublicId={profile.id /* profile_public_id */}
              />
            </div>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  });
};

export default ApplicantsList;