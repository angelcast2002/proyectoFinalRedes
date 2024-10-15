/* eslint-disable react/prop-types */

const LeftPanel = ({ options }) => {
  return (
    <div className="card w-52 bg-white p-5 shadow-md shadow-purple-200/50 rounded-md">
      <ul className="w-full flex flex-col gap-2">
        {options.map((option, index) => (
          <li
            key={index}
            className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap"
          >
            <button
              className="p-16-semibold flex size-full gap-4 p-4 group bg-white
                font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner 
                focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftPanel;
