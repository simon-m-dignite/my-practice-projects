import "./App.css";
import MyProvider from "./MyProvider";
import UserForm from "./components/UserForm";
import { MyContext } from "./context/MyContext";

function App() {
  return (
    <MyProvider>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        consequatur.
      </p>
      <UserForm />
    </MyProvider>
  );
}

export default App;
