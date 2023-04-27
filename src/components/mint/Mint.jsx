import "./mint.css";
import MintButton from "../mintButton/MintButton";

// import Timer from "../../timer/timer";
function Mint() {
  // const [launchText, setLaunchText] = useState("Launch Day-30 Nov 2022");

  return (
    <>
      <div className="mint-container">
        <img src="/mintImages/image1.gif" className="mint-image" />
        {/* <h4>{launchText}</h4>
        <br />
        <Timer setLaunchText={setLaunchText} />
        <br /> */}

        <br />
        <h5 className="current-price-text">
          Current Price = FREE / Negligible
        </h5>
        <MintButton />
      </div>
    </>
  );
}
export default Mint;
