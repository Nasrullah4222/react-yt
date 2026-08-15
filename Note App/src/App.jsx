import { useState } from "react";
const App = () => {
  // 2 Way binding! for Inputs
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");

  //Mapping those 2 inputs
  const [task, settask] = useState([]);

  //Form Handeling (For stopping reloading and Submitting elem)
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    settask(copyTask);

    console.log(copyTask);

    setdetails(" ");
    settitle(" ");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    console.log(copyTask[idx]);

    copyTask.splice(idx, 1);
    settask(copyTask);
  };

  return (
    <div className="h-screen bg-black text-white lg:flex ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start lg:w-1/2 gap-4 flex-col bg-blue-950 p-10"
      >
        {/* Headins Input */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        {/* Detailed Input */}
        <textarea
          type="text"
          placeholder="Enter Details"
          className="px-5 w-full py-2 h-40 border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />
        <button className="bg-white text-black outline-none rounded px-5 py-2 w-full active:bg-gray-600">
          Add Notes
        </button>
      </form>
      <div className=" bg-yellow-300 p-10 lg:w-1/2 lg:border-l-4">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        {/* Note Page */}
        <div className="flex flex-wrap gap-10 mt-2 bg-amber-200 p-5 h-full overflow-auto ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-40 flex justify-between flex-col items-start rounded-2xl text-black pt-9 pb-4 px-8 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/709/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full bg-red-500 cursor-pointer active:scale-95 py-1 text-xs rounded font-bold text-white p-1"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
