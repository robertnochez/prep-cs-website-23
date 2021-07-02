import React, { Component } from "react";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";
import { withAuth0 } from "@auth0/auth0-react";
import { Redirect, Link } from "react-router-dom";

import { Modal, Form, Header, Button } from "semantic-ui-react";

class LoginModal extends Component {
  // const [saved, setSaved] = useState(false);
  // const [modalOpen, setModalOpen] = useState(true);

  // handleSubmit(e) {
  //   e.preventDefault();

  //   setSaved(true);
  //   setModalOpen(false);
  // }

  // routeUser() {
  //   console.log("submitted!");
  //   // return <Link to="/wmcode-info"></Link>;
  // }

  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      authId: "",

      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      identity: "",
      submittedFirstName: "",
      submittedLastName: "",
      submittedUserName: "",
      submittedEmail: "",
      submittedIdentity: "",

      saved: false,
      modalOpen: true,

      redirectUrl: "",
    };
  }

  componentDidMount = (e) => {
    // const { user } = this.props.auth0;
    // const { name, user_id } = user;
  };

  handleChange = (e, { name, value }) => {
    // console.log(name);
    // console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(
      {
        userId: uuidv4(),
        // authId: this.props.auth0.user_id,

        submittedFirstName: this.state.firstName,
        submittedLastName: this.state.lastName,
        submittedUserName: this.state.userName,
        submittedEmail: this.state.email,
        submittedIdentity: this.state.identity,

        saved: !this.state.saved,
        modalOpen: !this.state.modalOpen,

        redirectUrl: "/" + this.state.identity,
      },
      () => {
        console.log(this.state);
        console.log("identity: " + this.state.submittedIdentity);
        console.log("url -- " + this.state.redirectUrl);
        // this.handleRedirect(e)
      }
    );

    const user = {
      firstName: this.state.submittedFirstName,
      lastName: this.state.submittedLastName,
      userName: this.state.submittedUserName,
      email: this.state.submittedEmail,
      identity: this.state.submittedIdentity,
    };

    const newHeaders = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        "/api/users",
        {
          firstName: this.state.submittedFirstName,
          lastName: this.state.submittedLastName,
          userName: this.state.submittedUserName,
          email: this.state.submittedEmail,
          identity: this.state.submittedIdentity,
        },
        {
          headers: newHeaders,
        }
      )
      .then((response) => console.log(response))
      .catch((error) => {
        console.log("There was an error!", error);
      });
  };

  // TODO handRedirect has to go within render() so that redirects work.
  // https://stackoverflow.com/questions/45089386/what-is-the-best-way-to-redirect-a-page-using-react-router

  // handleRedirect = (e) => {
  //   e.preventDefault();

  //   const userIdentity = this.state.identity;
  //   console.log(userIdentity);

  //   if (userIdentity === "prep") {
  //     console.log("Redirecting to: prepcs");
  //     this.setState({ redirectUrl: "/prepcs" }, () => {
  //       console.log("Redirect URL: " + this.state.redirectUrl);
  //     });
  //     // return <Redirect to="/prepcs" />;
  //   } else if (userIdentity === "wmcode") {
  //     console.log("Redirecting to: wmcode");
  //     this.setState({ redirectUrl: "/wmcode" }, () => {
  //       console.log("Redirect URL: " + this.state.redirectUrl);
  //     });
  //     // return <Redirect to="/wmcode" />;
  //   } else {
  //     console.log("Redirecting to: visitor");
  //     this.setState({ redirectUrl: "/visitor" }, () => {
  //       console.log("Redirect URL: " + this.state.redirectUrl);
  //     });
  //     // return <Redirect to="/visitor" />;
  //   }

  //   // console.log("Redirect URL: " + this.state.redirectUrl);
  // };

  render() {
    // const { user } = this.props.auth0;
    // const { name, user_id } = user;
    // console.log(name);
    // console.log(user_id);

    if (this.state.saved && this.state.identity) {
      console.log("Should be redirecting to: " + this.state.submittedIdentity);
      return <Redirect push to={this.state.redirectUrl} />;
    }

    return (
      <Modal
        as={Form}
        onSubmit={(e) => this.handleSubmit(e)}
        open={this.state.modalOpen}
        size="large"
      >
        <Header
          icon={"lightbulb outline"}
          content="Welcome to Learning-Platform"
          as="h2"
        />
        <Modal.Content>
          <Modal.Description>
            <Header as={"h3"}>
              Please fill out this form to get started with your coding
              adventure
              <br />
              <br />
            </Header>
          </Modal.Description>
          <Form.Group widths={"equal"}>
            <Form.Input
              label="First Name"
              required
              fluid
              type="text"
              name="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Last Name"
              required
              fluid
              type="text"
              name="lastName"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths={"equal"}>
            <Form.Input
              label="Username"
              required
              fluid
              type="text"
              name="userName"
              placeholder="Username"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Email"
              required
              fluid
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group inline>
            <label>Identity</label>
            <Form.Radio
              label="Pre-Engineering Program Student"
              value="prepcs"
              name="identity"
              checked={this.state.identity === "prepcs"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Wave-Maker Code Student"
              value="wmcode"
              name="identity"
              checked={this.state.identity === "wmcode"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Visitor"
              value="visitor"
              name="identity"
              checked={this.state.identity === "visitor"}
              onChange={this.handleChange}
            />
          </Form.Group>
        </Modal.Content>
        <Modal.Actions>
          <Button type="submit" color="green" icon="save" content="Save" />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default withAuth0(LoginModal);
