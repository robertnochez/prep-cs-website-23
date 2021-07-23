import "./index.css";

import MainLandingPage from "./pages/MainLandingPage";
import WMCodeInfo from "./pages/WMCodeInfo";
import PREPCSInfo from "./pages/PREPCSInfo";
import SampleLesson from "./pages/SampleLesson";
import Contact from "./pages/Contact";
import Practice from "./pages/Practice";

import LoginModal from "./components/LoginModal";
import UserInfoModal from "./components/UserInfoModal";
import WMHome from "./pages/WMCode/WMHome";
import PREPHome from "./pages/PREP/PREPHome";
import VisitorHome from "./pages/Visitor/VisitorHome";

import WMCodeLesson1 from "./pages/WMCode/Lesson1";
import WMCodeLesson2 from "./pages/WMCode/Lesson2";
import WMCodeLesson3 from "./pages/WMCode/Lesson3";
import WMCodeLesson4 from "./pages/WMCode/Lesson4";
import WMCodeLesson5 from "./pages/WMCode/Lesson5";
import WMCodeLesson6 from "./pages/WMCode/Lesson6";
import WMCodeLesson7 from "./pages/WMCode/Lesson7";
import WMCodeLesson8 from "./pages/WMCode/Lesson8";
import WMCodeLesson9 from "./pages/WMCode/Lesson9";

import PREPLesson from "./pages/PREP/Lesson";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "semantic-ui-less/semantic.less";

function App() {
  // "The sooner you start to code, the longer the program will take."
  // R. Carlson

  // "Being abstract is something profoundly different from being vague...
  //      The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise."
  // E. Dijkstra

  // "Awaken people's curiosity. It is enough to open minds, do not overload them. Put there just a spark."
  // A. France

  // "Good programmers know what to write. Great ones know what to use."
  // E. Raymond

  // "Questions are the important thing, answers are less important. Learning to ask a good question is the heart of intelligence.
  //      Learning the answer---well, answers are for students. Questions are for thinkers."
  // R. Schank (in "The Connosseur's Guide to the Mind")

  // "[teaching]is rather artificial. The world is complicated and messy, with lots of loose ends, and the
  //      teacher's job is to impose order on the confusion, to convert a chaotic set of episodes into a coherent narrative."
  // I. Stewart (in "Letters to a Young Mathematician")

  // "Education is not the filling of a pail, but the lighting of a fire."
  // W.B. Yeats (See Plutarch: The mind...)

  // https://www.cs.cmu.edu/~pattis/quotations.html

  return (
    <Router>
      <Switch>
        {/* Handle routes to pages on front-end, with no authentification */}
        <Route exact path="/">
          <MainLandingPage />
        </Route>
        <Route path="/wmcode-info">
          <WMCodeInfo />
        </Route>
        <Route path="/prepcs-info">
          <PREPCSInfo />
        </Route>
        <Route path="/sample-lesson">
          <SampleLesson />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/practice">
          <Practice />
        </Route>

        {/* Route to User Info Page, after redirect from authenitication */}
        <Route path="/user-info">
          <LoginModal />
          {/* <UserInfoModal /> */}
        </Route>

        {/* Route users to respective home pages after gathering information */}
        <Route path="/wmcode">
          <WMHome />
        </Route>
        <Route path="/prepcs">
          <PREPHome />
        </Route>
        <Route path="/visitor">
          <VisitorHome />
        </Route>

        {/* Paths for WMCode Lesson Pages */}
        <Route path="/wmcode-lesson1">
          <WMCodeLesson1 />
        </Route>
        <Route path="/wmcode-lesson2">
          <WMCodeLesson2 />
        </Route>
        <Route path="/wmcode-lesson3">
          <WMCodeLesson3 />
        </Route>
        <Route path="/wmcode-lesson4">
          <WMCodeLesson4 />
        </Route>
        <Route path="/wmcode-lesson5">
          <WMCodeLesson5 />
        </Route>
        <Route path="/wmcode-lesson6">
          <WMCodeLesson6 />
        </Route>
        <Route path="/wmcode-lesson7">
          <WMCodeLesson7 />
        </Route>
        <Route path="/wmcode-lesson8">
          <WMCodeLesson8 />
        </Route>
        <Route path="/wmcode-lesson9">
          <WMCodeLesson9 />
        </Route>
        {/* 
            TODO: Jesus
         */}

        {/* Paths for PREP CS Lesson Pages */}
        <Route path="/prepcs-lesson1">
          <PREPLesson
            header="Welcome to PREP!"
            description="Hello everyone! Welcome to PREP CS 2021. This lesson is meant to be a chill one and is meant to get y'all
            situated for later lessons. Here, we'll introduce ourselves, and setup a coding environment. Glad to have you here!"
            slideSrc=""
            prevLesson={null}
            nextLesson=""
          />
        </Route>
        <Route path="/prepcs-lesson2">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson3">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson4">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson5">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson6">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson7">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson8">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson9">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson10">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson11">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson12">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson13">
          <PREPLesson />
        </Route>
        <Route path="/prepcs-lesson14">
          <PREPLesson />
        </Route>
        {/* 
            TODO: Cris
         */}
      </Switch>
    </Router>
  );
}

export default App;
