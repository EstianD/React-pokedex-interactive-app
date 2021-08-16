import React from "react";
import { elementColors } from "../../element-colors";

function ElementType({ name }) {
  console.log("name: ", name);
  console.log("color: ", elementColors[name]);

  return (
    <div
      className="element-type"
      style={{
        backgroundColor: `#${elementColors[name]}`,
      }}
    >
      {name}
    </div>
  );
}

export default ElementType;
