import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/button.css";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleIputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    // setCategories((cats) => [inputValue, ...cats ]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleIputChange}
        placeholder="Buscar gifs"
      />
      <button className="button-26" type="submit">
        Agregar categoria
      </button>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory : PropTypes.func.isRequired
}
