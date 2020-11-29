import './App.css';
import MenuCard from "./menu.item.card"
import "./menu.item.scss";
function App() {  
  return (
    <div className="homepage">
        <MenuCard name="HATS"/>
        <MenuCard name="JACKET"/>
        <MenuCard name="CAPS"/>
        <MenuCard name="JEANS"/>
        <MenuCard name="FORMALS"/>
        <MenuCard name="SKIRTS"/>
        <MenuCard name="SHOES"/>
        <MenuCard name="SHIRTS"/>
    </div>
  );
}

export default App;
