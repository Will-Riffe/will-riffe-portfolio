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
        name={"Permu-Tater"}
        src={require("../../assets/permutater.png")}
        link={"https://permu-tater.herokuapp.com/"}
        githubLink={
          "https://github.com/Will-Riffe/Project-2-Permu-Tater-1/tree/main"
        }
        description={
          "Permu-Tater is a brain-child of mine that deserves more attention to development I think. I came up with it when I was in a relationship with someone who was a picky eater, and I would cook for her on Mondays so it was always an interesting event. Out of our joking about the subject, I realized we could program something which would generate recipes for us, and to weed out the undesireable bits from there. This app works by drawing extant recipes from a third party api (TheMealDB), looks at the ingredients, and pulls similar ingredients at random from an extensive and detailed ingredient JSON file to swap with the initial ingredients, and we store both the initial and randomized version of the recipe to our database to prevent duplicate calls; although it should be able to refer back to a stored recipe as well. I would like to keep working on this in the near future, flush out more ingredient information, and add to the logic so the generated recipes are inherently (and consistently) palatable."
        }
      />

      <Project
        name={"Event Scout"}
        src={require("../../assets/EventScout.png")}
        link={"https://jadyngg19.github.io/Event-Scout/"}
        githubLink={
          "https://github.com/Will-Riffe/Project-1-Event-Scout"
        }
        description={
          "Event Scout was the idea of some of my colleagues- it's a simple concept: plug in a city or address, select an event type and distance from the entered address, and Event Scout uses Google Maps API and TicketMasters API to display a series of current events going on at that location. I did most of the work with Google Maps, rendering points corresponding to events which of course relyed upon Ticketmasters API as well. I had been warned by our teachers (this was a major project in our coursework) that both of these API's are kind of a hassle. This was rather true, although Google at least has good documentation. I think the trick with the Google Maps API is simply nailing down exactly what you need; they have multiple ways of displaying a map on a page and each is slightly different in it's capabilities. I wanted to be able to display markers for the specific event, and really I wanted to do more with it than that even- such as clicking on a marker to show the specific event. I'm not sure if I necessarily want to keep working with it, as it's not really something I'm super stoked about... However, I noticed on the last run that the geocoder isn't currently working. So I may end up doing more while I try to fix it, or see if the others who worked on that project have any input. Another challenge was simply finding the location data in Ticketmasters API pulls. They don't have great documentation, and the result was simply wading through lots of cascading JSON data until I found the address information I needed to call for each event. This was our first project in the course, and I think it was arguably the most challenging."
        }
      />
    </div>
  );
}
export default displayProject;
