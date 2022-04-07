import React from "react";

const BabyNames= (props) => {
  return (
    <div className="BabyNames">
      {props.babyNames
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, sex }) => {
          return (
            <p key={id} className={`name ${sex === "m" ? "boy" : "girl"}`}>
              {name}
            </p>
          );
        })}
    </div>
  );
};

export default BabyNames;