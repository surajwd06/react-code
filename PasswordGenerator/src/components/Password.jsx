import React, { useCallback, useEffect, useRef, useState } from "react";

const Password = () => {
  const [length, setLength] = useState(8);
  const [numberAlloewd, setNumberAllowed] = useState(false);
  const [charAlloewd, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // use refHook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAlloewd) str += "0123456789";
    if (charAlloewd) str += "!@#$%^&*()";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAlloewd, charAlloewd.setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAlloewd, numberAlloewd, setPassword]);

  const copyPasswordRef=()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5)
  }
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
          onClick={copyPasswordRef}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              className="cursor-pointer"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length:{length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={numberAlloewd}
              onChange={(e) => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={charAlloewd}
              onChange={(e) => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
