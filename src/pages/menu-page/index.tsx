import Keyboard from "../../modules/key-board";

function MenuPage() {
  var letters = [
    "A",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
    "C",
    "B",
  ];

  return (
    <div>
      <Keyboard
        width="350px"
        height="230px"
        letters={letters}
        buttonSize="57px"
        fontSize="30px"
      />
    </div>
  );
}

export default MenuPage;
