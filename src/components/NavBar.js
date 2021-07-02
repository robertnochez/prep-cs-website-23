import React from "react";

import MainNav from "./MainNav";
import AuthNav from "./AuthNav";
import LoggedInNav from "./LoggedInNav";

// import { useAuth0 } from "@auth0/auth0-react";

function NavBar(props) {
  // const { isAuthenticated } = useAuth0();

  // return isAuthenticated ? (
  //   <div>
  //     <LoggedInNav
  //       img={props.img}
  //       title={props.title}
  //       description={props.description}
  //       // button={<AuthNav />}
  //     />
  //   </div>
  // ) : (
  return (
    <div>
      <MainNav
        img={props.img}
        title={props.title}
        description={props.description}
        // button={<AuthNav />}
      />
    </div>
  );
}

export default NavBar;
