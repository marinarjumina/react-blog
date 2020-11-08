import ReactDOM from 'react-dom';
import './styles/main.css';
import './styles/custom.css';
import routes from "./routes";

const allRoutes = routes;

ReactDOM.render(
  allRoutes,
  document.getElementById("root")
)