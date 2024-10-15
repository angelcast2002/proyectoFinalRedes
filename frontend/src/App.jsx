import "./App.css";
import LeftPanel from "./components/leftPanel/leftPanel";

function App() {
  const options = [
    { name: "Dashboard" },
    { name: "Profile" },
    { name: "Settings" },
    { name: "Logout" },
  ];
  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-full w-1/6 content-center grid place-items-center ">
        <LeftPanel options={options} />
      </div>
    </div>
  );
}

export default App;
