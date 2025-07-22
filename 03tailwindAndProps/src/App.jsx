import "./App.css";
import Card from "./components/Card";

function App() {
  // let someArr = [1, 2, 3];
  // let someObj = {
  //   name: "Apurva",
  // };

  return (
    <>
      <h1 className="bg-green-500 text-black p-2 rounded-xl mb-3">Tailwind CSS</h1>
      {/* <Card userName="Alisa" someObj={someObj} someArr={someArr} /> */}
      <Card userName="Alisa" buttonText="Click Me" />
      <Card userName="Milli" />
    </>
  );
}

export default App;
