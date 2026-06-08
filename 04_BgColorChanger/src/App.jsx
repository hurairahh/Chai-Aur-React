import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("lightblue");

  const darkColors = [
    { name: "Black", code: "#000000" },
    { name: "Dark Gray", code: "#1C1C1C" },
    { name: "Jet Black", code: "#343434" },
    { name: "Charcoal", code: "#36454F" },
    { name: "Midnight Blue", code: "#191970" },
    { name: "Slate Blue", code: "#483D8B" },
    { name: "Dark Green", code: "#006400" },
    { name: "Olive Green", code: "#556B2F" },
    { name: "Cyan", code: "#008B8B" },
    { name: "Teal", code: "#014D4E" },
    { name: "Red", code: "#8B0000" },
    { name: "Dark Brown", code: "#654321" },
    { name: "Saddle Brown", code: "#8B4513" },
    { name: "Chocolate", code: "#3D1C02" },
    { name: "Violet", code: "#9400D3" },
    { name: "Magenta", code: "#8B008B" },
    { name: "Goldenrod", code: "#B8860B" },
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-600 border-2 border-white px-3 py-3 rounded-3xl">
          {darkColors.map((passedColor) => {
            <button
              key={passedColor.name}
              className="outline-none px-4 py-1 rounded-full text-white shadow -lg"
              style={{ backgroundColor: passedColor.code }}
              onClick={() => setColor(passedColor.code)}
            >
              {passedColor.name}
            </button>;
          })}

          {darkColors.map((colorObj) => (
            <button
              key={colorObj.name}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: colorObj.code }}
              onClick={() => setColor(colorObj.code)}
            >
              {colorObj.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
