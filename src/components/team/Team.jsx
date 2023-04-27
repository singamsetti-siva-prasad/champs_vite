import "./team.css";
function Team() {
  return (
    <div className="team" id="team">
      <h2 className="team-heading">Meet our Team</h2>
      <span className="team-span">
        <img src="/teamImages/image1.png" className="team-image" />
        <span className="team-name">
          <h3 className="team-text">Seshu Karthick</h3>
          <div className="team-text">Founder</div>
          <a
            href="https://www.linkedin.com/in/seshukarthick/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/teamImages/linkedinlogo.png" className="linkedin-logo" />
          </a>
        </span>
      </span>
      <span className="team-span">
        <img src="/teamImages/image3.png" className="team-image" />
        <span className="team-name">
          <h3 className="team-text">T.N.Rao</h3>
          <div className="team-text">Investor</div>
        </span>
      </span>
      <span className="team-span">
        <img src="/teamImages/image5.png" className="team-image" />
        <span className="team-name">
          <h3 className="team-text">Gireesh</h3>
          <div className="team-text">Developer</div>
          <a
            href="https://www.linkedin.com/in/gireeshredy/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/teamImages/linkedinlogo.png" className="linkedin-logo" />
          </a>
        </span>
      </span>
      <br />
      <span className="team-span">
        <img src="/teamImages/image2.png" className="team-image" />
        <span className="team-name">
          <h3 className="team-text">Dhanush Waran</h3>
          <div className="team-text">Designer</div>
          <a
            href="https://www.linkedin.com/in/dhanush-waran-143537228/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/teamImages/linkedinlogo.png" className="linkedin-logo" />
          </a>
        </span>
      </span>
      <span className="team-span">
        <img src="/teamImages/image4.png" className="team-image" />
        <span className="team-name">
          <h3 className="team-text">Anusha</h3>
          <div className="team-text">Community</div>
          <a
            href="https://www.linkedin.com/in/anusha-karthick-547bb051/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="" className="linkedin-logo" />
          </a>
        </span>
      </span>

      <span className="team-span">
        <img src="/teamImages/image1.png" className="team-image" />
        <span className="team-name">
          <h3 className="team-text">Krishna</h3>
          <div className="team-text">Marketer</div>
        </span>
      </span>
    </div>
  );
}
export default Team;
