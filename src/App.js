import "./App.css";
import Categories from "./Categories";
import Menu from "./Menu";

const App = () => {
  return(
    <main>
      <section className="menu section">
        <h2>our menu</h2>
        <div className="underline"></div>
        <Categories />
        <Menu />
      </section>
    </main>
  ) 
};

export default App;