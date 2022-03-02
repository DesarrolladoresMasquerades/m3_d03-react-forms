import { useState } from "react";

function AddMovie(props) {


  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form >
        <label>Title:</label>
        <input type="text" name="title" value={title} />

        <label>Director:</label>
        <input type="text" name="director" value={director}  />

        <label>IMDB Rating:</label>
        <input type="number" name="IMDBRating" value={IMDBRating}  />

        <label>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" checked={hasOscars}  />
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
