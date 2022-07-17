import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory)
    // setCategories( [newCategory, ...cats ]);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory
        //  setCategories={setCategories}
        onNewCategory={(newCat) => onAddCategory(newCat)}
      />
      <hr />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
