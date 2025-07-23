import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonColor, setButtonColor] = useState("blue");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%^&*-_=+[]{}`~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

    // console.log(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
    setButtonColor("blue");
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen my-10">
        <h1 className=" text-4xl text-center text-white">Password Generator</h1>
        <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-4 py-4 my-8 text-orange-500 bg-gray-800">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" value={password} readOnly placeholder="Password" className=" bg-white outline-none w-full py-1 px-3" ref={passwordRef} />
            <button
              onClick={() => {
                copyPasswordToClipboard, setButtonColor("#3271a5");
              }}
              className="outline-none text-white px-3 py-0.5 shrink-0 cursor-pointer"
              style={{ backgroundColor: buttonColor }}
            >
              copy
            </button>
          </div>
          <div className="flex text-sm gap-x-5">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                className="cursor-pointer"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                className="cursor-pointer"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
