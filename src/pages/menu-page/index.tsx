import ScorePanel from "../../modules/score-panel";
import TopBar from "../../components/top-bar";
import { ImArrowLeft } from "react-icons/im";

function MenuPage() {
  return (
    <div>
      <TopBar
        height="40px"
        icon={
          <ImArrowLeft size="20px" color="white">
            holi
          </ImArrowLeft>
        }
        text="Level 1"
        textColor="white"
        backgroundColor="black"
      />
    </div>
  );
}

export default MenuPage;
