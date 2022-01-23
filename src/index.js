import React from "react";
import ReactDOm from "react-dom";
import Heading from "./componens/Header";
import Footer from "./componens/Footer";
import Note from "./componens/Note";

ReactDOm.render(
  <div>
    <Heading />
    <Footer />
    <Note />
  </div>,

  document.getElementById("root")
);

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
