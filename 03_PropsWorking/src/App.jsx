import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex flex-col gap-10 py-28 justify-center items-center">
        <h1 className="bg-green-700 text-white w-fit font-bold mb-4 p-4 rounded-lg">
          Tailwind Test
        </h1>
        <p className="text-lg font-bold">
          Passing the props and using them in the different styles
        </p>
      </div>
      <div className="flex gap-10 justify-center">
        <Card channel="alphaBro" btnText="click me " />
        <Card channel="BetaPlanet" btnText="visit me" />
      </div>
    </>
  );
}

export default App;
