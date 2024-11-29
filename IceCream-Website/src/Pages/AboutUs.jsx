import React from "react";
import story from "../assets/about-image.jpg";
import choc from "../assets/choc-scoop.jpg";
import blue from "../assets/blueberry-cream.jpg";
import nut from "../assets/hazelnut-scoop.jpg";
import Footer from "../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="our-story">Our Story-Chill Remedy</h1>
        <div className="story-part1">
          <div className="story-left">
            <img
              src={story}
              alt="a group of 3 friends eating ice cream"
              className="about-image"
            />
          </div>
          <div className="story-right">
            <h3 className="story-subHeading">
              A scoop of Happiness, One Chill at a Time
            </h3>
            <p className="story-paragraph">
              It all began on a warm summer evening, the kind where the sunset
              lingers a little longer, and laughter fills the air. We were three
              dreamers sitting on a couch of our res room, sharing a scoop of
              ice cream and talking about life's little joys. The world felt a
              little less chaotic with every creamy, sweet bite. That's when it
              hit us: ice cream isn't just a dessert; it's therapy in a cone. We
              dreamed of a place where people could escape the hustle of
              everyday life and find their “chill.” A place where every scoop
              carried the magic of nostalgia, the comfort of home, and the
              excitement of trying something new. With that vision, Chill Remedy
              was born—a little sanctuary for sweet tooths and big dreamers
              alike.
            </p>
          </div>
        </div>
        <div className="story-part">
          <h3 className="story-subHeading">
            Built on Love, Sprinkles, and a Whole Lot of Heart
          </h3>
          <p className="story-flavorDescription">
            From the very beginning, we've been passionate about crafting more
            than just ice cream. Every flavor tells a story:
          </p>
          <div className="flavor-storyContainer">
            <div>
              <div className="circle-text yellow">
                <span>
                  <strong>“Hazel-Nutty” </strong>was inspired by our late-night
                  brainstorming sessions over peppermint tea.
                </span>
              </div>
              <img
                src={nut}
                alt="hazelnuts spread out on the table and a bowl of hazelnut ice cream"
                className="story-flavor"
              />
            </div>
            <div>
              <div className="circle-text purple">
                <span>
                  {" "}
                  <strong>“Berry Bliss” </strong> is a tribute to the local
                  farmers who bring us the freshest ingredients.
                </span>
              </div>
              <img
                src={blue}
                alt="a scoop of berry ice cream"
                className="story-flavor"
              />
            </div>
            <div>
              <div className="circle-text brown">
                <span>
                  <strong> “Choco Therapy” </strong> Well, that one's simply
                  because life is better with chocolate.
                </span>
              </div>
              <img
                src={choc}
                alt="chocolate ice cream with a scooped inside a container"
                className="story-flavor"
              />
            </div>
          </div>
        </div>
        <div className="story-part">
          <h3 className="story-subHeading">More Than Just Ice Cream</h3>
          <p>
            We're not just about cones and sundaes; we're about creating
            moments. Whether it's a first date, a family outing,an event or
            simply treating yourself after a long day, we want to be part of
            your story. Our cozy shop is a place where strangers become friends,
            and every bite feels like a warm hug. We believe ice cream has the
            power to turn a bad day into a good one, and a good day into
            something unforgettable. From our humble beginnings, we've grown
            into a community of ice cream lovers who share a passion for life's
            simple pleasures. But this is just the start! We're always dreaming
            up new flavors, hosting fun events, and finding new ways to make
            your day a little sweeter. At Chill Remedy, it's not just about ice
            cream—it's about finding your chill, savoring the moment, and
            creating memories that last. So, grab a cone, take a deep breath,
            and let us remind you that sometimes, all you need is a little scoop
            of happiness.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
