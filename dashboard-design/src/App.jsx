import "./App.css";
import Dashboard from "./pages/Dashboard";
import RightSideBar from "./components/dashboard/RightSideBar";
import Sidebar from "./components/global/Sidebar";

function App() {
  return (
    <div className="w-full relative flex flex-row-reverse">
      <div className="w-1/5 h-screen fixed top-0 left-0 bg-gray-900 text-white">
        <Sidebar />
      </div>

      <div className="w-4/5 relative bg-gray-800">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
