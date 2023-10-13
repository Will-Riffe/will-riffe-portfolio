import React from "react";

function displayProject(props) {
  return (
    <div>
      <Project
        name={"Sustain-A-Plate"}
        src={require("../../assets/Sustain-a-Plate-Page.png")}
        link={"https://sustain-a-plate-a492ad2a8239.herokuapp.com/"}
        githubLink={"https://github.com/Will-Riffe/Sustain-A-Plate"}
        description={
          "The concept behind Sustain-A-Plate was to bring consumers and businesses together to help reduce food waste. I came up with much of the front end for the web app, and I put in some work with date formatting on the back end. This was our final project for bootcamp, and as such, I hadn't done much front end work for the other projects; I had a chip on my shoulder and really wanted to nail a solid UI and general design. I spent a lot of time coming up with the CSS, and strove to make it pretty responsive to the viewport size. Much of the challenge was researching similar websites, and seeing what I could do as well or better; such as presenting more smooth but eye-popping cards. Not to mention, many such websites feel cluttered or like you wind up in a hole at the bottom of a few links. Sustain-a-Plate was pretty clean. Minimalistic, but still thoughtful, and pretty well balanced visually."
        }
      />

      <Project
        name={"Sustain-A-Plate"}
        src={require("../../assets/Sustain-a-Plate-Page.png")}
        link={"https://sustain-a-plate-a492ad2a8239.herokuapp.com/"}
        githubLink={"https://github.com/Will-Riffe/Sustain-A-Plate"}
        description={
          "The concept behind Sustain-A-Plate was to bring consumers and businesses together to help reduce food waste. I came up with much of the front end for the web app, and I put in some work with date formatting on the back end. This was our final project for bootcamp, and as such, I hadn't done much front end work for the other projects; I had a chip on my shoulder and really wanted to nail a solid UI and general design. I spent a lot of time coming up with the CSS, and strove to make it pretty responsive to the viewport size. Much of the challenge was researching similar websites, and seeing what I could do as well or better; such as presenting more smooth but eye-popping cards. Not to mention, many such websites feel cluttered or like you wind up in a hole at the bottom of a few links. Sustain-a-Plate was pretty clean. Minimalistic, but still thoughtful, and pretty well balanced visually."
        }
      />
    </div>
  );
}
export default displayProject;
