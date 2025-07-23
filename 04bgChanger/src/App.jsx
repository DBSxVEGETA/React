import { useState } from "react";

function App() {
  const [color, setColor] = useState("violet");

  return (
    <div className="w-full h-screen duration-500" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center rounded-3xl" style={{ backgroundColor: "white" }}>
          <button onClick={() => setColor("red")} className="m-2 px-2 py-1 rounded-full text-white hover:cursor-pointer" style={{ backgroundColor: "red" }}>
            Red
          </button>
          <button onClick={() => setColor("blue")} className="m-2 px-2 py-1 rounded-full text-white hover:cursor-pointer" style={{ backgroundColor: "Blue" }}>
            Blue
          </button>
          <button onClick={() => setColor("green")} className="m-2 px-2 py-1 rounded-full text-white hover:cursor-pointer" style={{ backgroundColor: "Green" }}>
            Green
          </button>
          <button onClick={() => setColor("white")} className="m-2 px-2 py-1 rounded-full hover:cursor-pointer" style={{ backgroundColor: "White" }}>
            White
          </button>
          <button onClick={() => setColor("black")} className="outline-0 m-2 px-2 py-1 rounded-full text-white hover:cursor-pointer" style={{ backgroundColor: "Black" }}>
            Black
          </button>
          <button onClick={() => setColor("lavender")} className="m-2 px-2 py-1 rounded-full hover:cursor-pointer" style={{ backgroundColor: "Lavender" }}>
            Lavender
          </button>
          <button onClick={() => setColor("gray")} className="m-2 px-2 py-1 rounded-full hover:cursor-pointer" style={{ backgroundColor: "gray" }}>
            Gray
          </button>
          <button onClick={() => setColor("yellow")} className="m-2 px-2 py-1 rounded-full hover:cursor-pointer" style={{ backgroundColor: "yellow" }}>
            Yellow
          </button>
          <button onClick={() => setColor("olive")} className="m-2 px-2 py-1 rounded-full hover:cursor-pointer" style={{ backgroundColor: "olive" }}>
            Olive
          </button>
          <button onClick={() => setColor("pink")} className="m-2 px-2 py-1 rounded-full hover:cursor-pointer" style={{ backgroundColor: "pink" }}>
            Pink
          </button>{" "}
          <button onClick={() => setColor("purple")} className="m-2 px-2 py-1 rounded-full hover:cursor-pointer" style={{ backgroundColor: "purple" }}>
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
