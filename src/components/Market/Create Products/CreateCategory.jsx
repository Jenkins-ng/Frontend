import React from "react";

const CreateCategory = () => {
  return (
    <div>
      <h1>Create Categories</h1>
      <form action="">
        <div>
          <label htmlFor="categoryName">
            Category Name
            <input type="text" name="categoryName" id="categoryName" />
          </label>
        </div>
        <div>
          <label htmlFor="categoryImage">
            Category Image
            <input type="file" name="categoryImage" id="categoryImage" />
          </label>
              </div>
              <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default CreateCategory;
