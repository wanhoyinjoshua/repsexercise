import React, { useEffect, useState } from 'react';
import BinaryTreeNode from '../components/Binarytree'
const BinaryTree = () => {
    const [data, setData] = useState(null);
    const [currentNode, setCurrentNode] = useState(data); // Replace 'data' with your JSON


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/hello');
          const jsonData = await response.json();
          setData(jsonData.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

function left(){
    setData(data.left);

}
function right(){
    setData(data.right);

}
  const handleAnswer = (answer) => {
    if (answer === 'yes' && currentNode.left) {
      setCurrentNode(currentNode.left);
    } else if (answer === 'no' && currentNode.right) {
      setCurrentNode(currentNode.right);
    }
  };
  return (
    <div>
        {JSON.stringify(currentNode)}
    <h1>Binary Tree Questions</h1>
    {data&&data.value}
    <br></br>
    <button onClick={left}>yes</button>
    <button onClick={right}>no</button>
    
  </div>
  )
}

export default BinaryTree