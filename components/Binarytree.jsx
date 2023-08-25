import React from 'react';

function BinaryTreeNode({ node, onAnswer }) {
  if (!node) {
    return null;
  }

  return (
    <div>
      <p>{node.value}</p>
      <button onClick={() => onAnswer('yes')}>Yes</button>
      <button onClick={() => onAnswer('no')}>No</button>
      <BinaryTreeNode node={node.left} onAnswer={onAnswer} />
      <BinaryTreeNode node={node.right} onAnswer={onAnswer} />
    </div>
  );
}

export default BinaryTreeNode;
