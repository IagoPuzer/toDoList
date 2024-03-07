import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import PropTypes from "prop-types";

export function Card({ id, name, removeTask }) {
  const [checkTask, setCheckTask] = useState(false);

  const handleCheckTask = () => {
    setCheckTask((prevState) => !prevState);
  };

  return (
    <div className="w-96 h-24 bg-white shadow-md rounded-md p-4 mb-4 hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between">
        <p
          className={`w-full text-lg font-semibold whitespace-normal overflow-hidden ${
            checkTask ? "line-through" : ""
          }`}
        >
          {name}
        </p>

        <div className="flex gap-4">
          <button
            onClick={handleCheckTask}
            className="text-green-500 hover:text-green-700 ml-2"
          >
            <FaCheck />
          </button>
          <button
            onClick={() => removeTask(id)}
            className="text-red-500 hover:text-red-700 ml-2"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  removeTask: PropTypes.func.isRequired,
};
