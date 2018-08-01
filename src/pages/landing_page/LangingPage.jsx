import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import MediaQuery from "react-responsive";

import "./LandingPage.css";
import faucet from "../../assets/img/faucet.png";
import dogWalker from "../../assets/img/dog_walking.png";
import electrician from "../../assets/img/electrician.png";
import comp from "../../assets/img/computer.png";
import lawn from "../../assets/img/lawn-mower.png";
import nurse from "../../assets/img/nurse.png";
import painter from "../../assets/img/paint-brushes.png";
import photo from "../../assets/img/photo-camera.png";
import user1 from "../../assets/img/user1.jpg";



/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <a>
      <Header
        as="span"
        content="Gig"
        inverted
        style={{
          fontFamily: "Pacifico",
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em",
          color: "#2196f3"
        }}
      />
      <Header
        as="span"
        content="App"
        inverted
        style={{
          fontFamily: "Pacifico",
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em",
          color: "#ff1744"
        }}
      />
    </a>

    <Header
      as="h2"
      content="Free your fingers! Let us do the work for you"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          {/* <Segment className="overlay"> */}

          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
            className="pepe"
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Location</Menu.Item>
                <Menu.Item as="a">The Gigs</Menu.Item>
                <Menu.Item as="a">About us</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed} color={"blue"}>
                    Log in
                  </Button>

                  <Button
                    as="a"
                    inverted={!fixed}
                    color={"red"}
                    // primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>

          {/* </Segment> */}
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Location</Menu.Item>
            <Menu.Item as="a">The Gigs</Menu.Item>
            <Menu.Item as="a">About us</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted color={"blue"}>
                      Log in
                    </Button>
                    <Button
                      as="a"
                      inverted
                      color={"red"}
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const ServicesDesktop = () => (
  <Grid columns={6}>
    <Grid.Row centered>
      <Grid.Column floated="left">
        <Image src={electrician} size="tiny" />
        <h4>Electrician</h4>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={faucet} size="tiny" />
        <h4>Plumber</h4>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={dogWalker} size="tiny" />
        <h4>Dog Walker</h4>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={painter} size="tiny" />
        <h4>Painter</h4>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered>
      <Grid.Column floated="left">
        <Image src={comp} size="tiny" />
        <h4>Computer repair</h4>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={lawn} size="tiny" />
        <h4>Lawn Mowing</h4>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={nurse} size="tiny" />
        <h4>Home Care</h4>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={photo} size="tiny" />
        <h4>Photography</h4>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const ServicesMobile = () => (
  <Grid columns={6}>
    <Grid.Row centered>
      <Grid.Column floated="left">
        <Image src={electrician} size="tiny" />
        <h5>Electrician</h5>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={faucet} size="tiny" />
        <h5>Plumber</h5>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={dogWalker} size="tiny" />
        <h5>Dog Walker</h5>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={painter} size="tiny" />
        <h5>Painter</h5>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered>
      <Grid.Column floated="left">
        <Image src={comp} size="tiny" />
        <h5>Computer repair</h5>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={lawn} size="tiny" />
        <h5>Lawn Mowing</h5>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={nurse} size="tiny" />
        <h5>Home Care</h5>
      </Grid.Column>

      <Grid.Column floated="right">
        <Image src={photo} size="tiny" />
        <h5>Photography</h5>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable>
        <Grid.Row centered>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Be Local. Hire Local!
          </Header>
        </Grid.Row>

        <Grid.Row>

          <MediaQuery maxWidth={700}>
            {matches => {
              if (matches) {
                return <ServicesMobile />;
              } else {
                return <ServicesDesktop />;
              }
            }}
          </MediaQuery>

          {/* <Grid.Column>
            <ServicesDesktop />
          </Grid.Column> */}
        </Grid.Row>

        <Grid.Row>

          <Grid.Column textAlign="center">
            <Button color={'blue'} size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

              <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Not your grandpa's "Classifieds" site!!
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Need some work done? Any type of work, well post it
          and rest ! Yes you don't have to endlessly search, scroll and call
          for someone to come to the rescue. We made it easy for professional and
          occasional gigster to actually search you out, connect and bid for your bussiness! 
        </p>
        <Button color={"blue"} as="a" size="large">
          Read More
        </Button>
        {/* <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button> */}
      </Container>
    </Segment>


    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src={user1} />
              <b>Jen</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;
