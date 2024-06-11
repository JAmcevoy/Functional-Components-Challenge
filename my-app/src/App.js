import css from "./App.module.css";
import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarSimple name="Josh" />
      <Sidebar />

    </div>
  );
}

export default App;