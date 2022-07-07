import MenuItem from "./MenuItem";

const texts = ["apple", "banana", "milk", "eggs", "chicken"];
function Menu() {
  return (
    <div>
      {texts.map((item) => {
        return <MenuItem key={item} text={item} />;
      })}
    </div>
  );
}

export default Menu;
