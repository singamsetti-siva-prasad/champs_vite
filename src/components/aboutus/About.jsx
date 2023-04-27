import "./about.css";

const About = () => {
  return (
    <>
      <h2 className="about-heading">ABOUT US</h2>
      <br />
      <div className="part1" id="about">
        <div className="img1">
          <img src="/aboutImages/image1.gif" className="allimg1" />
          <img src="/aboutImages/image2.gif" className="allimg1" />
        </div>
        <div className="img2">
          <img src="/aboutImages/image3.gif" className="allimg" />
          <img src="/aboutImages/image4.gif" className="allimg" />
        </div>
      </div>

      <div className="part2">
        <p>
          ALT Champs are those who love new tech, web3 and favor Global Unity.
          The champs strive in creating a world of people helping each other
          grow, nations collaborating for betterment, and human beings living in
          harmony with the nature.
        </p>
        <p>
          The holders of ALT Space Champs NFTs become part of an exclusive
          token-gated community lounge. They enjoy the various benefits by being
          part of this tech community.
        </p>
      </div>
    </>
  );
};
export default About;
