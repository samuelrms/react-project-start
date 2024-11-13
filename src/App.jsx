import { Outlet } from "react-router-dom";
import "./assets/styles/main.scss";

function App() {
  return (
    <div>
      <h1>Meu Site</h1>
      <Outlet />
    </div>
  );
}

export default App;
