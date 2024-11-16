import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You have to create a packing list for your flight 🚀</em>
      </footer>
    );

  // DERIVED STATES
  const numItems = items.length;
  const packedList = items.filter((item) => item.packed).length;
  const remainingList = items.filter((item) => !item.packed).length;
  const percentage = Math.round((packedList / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are ready to flight ✈️`
          : `💼 You have ${numItems} items on your list, you already packed ${packedList} and you have to packed more ${remainingList}, ${percentage}%`}
      </em>
    </footer>
  );
};

export default Stats;
