import React, { useState, Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import { withAuth0 } from "@auth0/auth0-react";

class LoginModal extends React.Component {
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
    };
  }

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

        submittedFirstName: this.state.firstName,
        submittedLastName: this.state.lastName,
        submittedUserName: this.state.userName,
        submittedEmail: this.state.email,
        submittedIdentity: this.state.identity,

        saved: !this.state.saved,
        modalOpen: !this.state.modalOpen,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  getUserData = (e) => {
    const { user } = useAuth0();
    console.log(user.sub);
    return user.sub;
  };

  render() {
    const { user } = this.props.auth0;
    const { name } = user;

    return (
      <Modal
        as={Form}
        onSubmit={(e) => this.handleSubmit(e)}
        open={this.state.modalOpen}
        size="large"
      >
        <Header icon={"lightbulb outline"} content="New User Sign-Up" as="h2" />
        <Modal.Content>
          <Modal.Description>
            <Header>Welcome in {name}.</Header>
            <p>
              Please fill out this form to get started with your coding
              adventure.
            </p>
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
          {/* <h3></h3> */}
          <Form.Group inline>
            <label>Identity</label>
            <Form.Radio
              label="Pre-Engineering Program Student"
              value="prep"
              name="identity"
              checked={this.state.identity === "prep"}
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
          {this.state.saved ? <div>Saved!</div> : null}{" "}
          {/* Use this to render success thingy */}
        </Modal.Content>
        <Modal.Actions>
          {/* <Button type="submit" color="red" icon="times" content="Close" /> */}
          <Button
            // TODO     Make this a function in the state, depending on what the user chooses
            // TODO     as identity. Add a handler. Rn, the Link overrides the verification.
            type="submit"
            color="green"
            icon="save"
            content="Save"
            // onClick={routeUser()}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default LoginModal;
