// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';


export default async function handler(req, res) {
  const formData = new URLSearchParams();
  formData.append('type', 'all');
  formData.append('strength', 'all');
  formData.append('select-treatment', 'all');
  formData.append('select-skill', 'all');
  formData.append('select-impairment', 'all');
  formData.append('searchtype', 'clinicians');
  formData.append('submit', 'Search');

  const url = 'https://sciptguide.com/clinicians/clinicians-search-results/#';
/*
  try {
    const response = await axios.post(url, formData);
    res.status(200).json({ data: response.data });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
  */
  class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  const rootNode = new BinaryTreeNode('Can you take a few steps in any way? This includes walking in parallel bars, with or without a walking aid, leg brace/s and/or assistance from another person');
  rootNode.left = new BinaryTreeNode('Can you walk 10m or more in any way? This includes walking in parallel bars, with or without walking aid, leg brace/s and/or assistance.');
  rootNode.right = new BinaryTreeNode(0);
  
  rootNode.left.left = new BinaryTreeNode('Can you walk without a walking aid in any way? This includes walking with or without assistance and/or leg brace/s.');
  rootNode.left.left.left = new BinaryTreeNode('Think about walking without a walking aid. Can you walk without assistance (with or without leg brace/s)?  ');
  rootNode.left.left.left.left = new BinaryTreeNode('Think about walking without a walking aid and without assistance. Can you walk without leg brace/s?');
  rootNode.left.left.left.left.left = new BinaryTreeNode(20);
  rootNode.left.left.left.right =new BinaryTreeNode('Think about using 1 cane/crutch instead of no walking aids. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left=new BinaryTreeNode('Think about walking with 1 cane/crutch, and without leg brace/s. Can you walk without assistance?')
  rootNode.left.left.left.right.left.left= new BinaryTreeNode(19)
  rootNode.left.left.left.right.left.right= new BinaryTreeNode(18)
  rootNode.left.left.left.right.right= new BinaryTreeNode(18)
  rootNode.left.left.left.right = new BinaryTreeNode('Think about walking without a walking aid. Can you walk with assistance of 1 person (with or without leg brace/s)?')
  rootNode.left.left.left.right.left = new BinaryTreeNode('Think about walking without a walking aid, and with assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right= new BinaryTreeNode('Can you walk with 1 cane/crutch instead of no walking aids? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.left.right.left.right.left= new BinaryTreeNode('Think about walking with 1 cane/crutch. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.left = new BinaryTreeNode('Think about walking with 1 cane/crutch and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.left.left= new BinaryTreeNode(19)
  rootNode.left.left.left.right.left.right.left.left.right= new BinaryTreeNode('Think about walking with 2 crutches instead of 1 cane/crutch. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.left.right.left=new BinaryTreeNode('Think about walking with 2 crutches and without leg brace/s. Can you walk without assistance?')
  rootNode.left.left.left.right.left.right.left.left.right.right=new BinaryTreeNode(15)
  rootNode.left.left.left.right.left.right.left.left.right.left.left= new BinaryTreeNode(16)
  rootNode.left.left.left.right.left.right.left.left.right.left.right= new BinaryTreeNode(15)
  rootNode.left.left.left.right.left.right.left.right= new BinaryTreeNode('Think about walking with 1 cane/crutch. Can you walk with assistance of 1 person (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.left=new BinaryTreeNode('Think about walking with 1 cane/crutch and assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.left.left= new BinaryTreeNode('Think about using 2 crutches instead of 1 cane/crutch. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.left.left.left= new BinaryTreeNode('Think about waking with 2 crutches and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.left.left.left.right = new BinaryTreeNode(14)
  rootNode.left.left.left.right.left.right.left.right.left.left.left.left= new BinaryTreeNode(16)
  rootNode.left.left.left.right.left.right.left.right.left.left.right= new BinaryTreeNode(14)
  rootNode.left.left.left.right.left.right.left.right.left.right= new BinaryTreeNode('Think about using 2 crutches instead of 1 cane/crutch. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.left.right.left= new BinaryTreeNode('Think about walking with 2 crutches and no leg brace/s. Can you walk without assistance?')
  rootNode.left.left.left.right.left.right.left.right.left.right.left.left= new BinaryTreeNode(14)
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right= new BinaryTreeNode('Think about walking with 2 crutches and no leg brace/s. Can you walk with the assistance of 1 person?')
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.left= new BinaryTreeNode('Think about walking with 2 crutches and with your leg brace/s. Can you walk without assistance?')
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.left.left= new BinaryTreeNode('Think about using a walker. Can you walk without leg brace/s and without assistance?')
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.left.left.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.left.left.right= new BinaryTreeNode(12)
  rootNode.left.left.left.right.left.right.left.right.right= new BinaryTreeNode('Can you walk with 2 crutches instead of 1 cane/crutch? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.left.right.left.right.left.right.right.left= new BinaryTreeNode('Think about walking with 2 crutches. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.left.left= new BinaryTreeNode('Think about walking with 2 crutches and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.left.left.left= new BinaryTreeNode(16)
  rootNode.left.left.left.right.left.right.left.right.right.left.left.right= new BinaryTreeNode('Think about using a walker instead of 2 crutches. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.left.left.right.left= new BinaryTreeNode('Think about walking with a walker and without leg brace/s. Can you walk without assistance?')
  rootNode.left.left.left.right.left.right.left.right.right.left.left.right.left.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.right.left.left.right.left.right= new BinaryTreeNode(12)
  rootNode.left.left.left.right.left.right.left.right.right.left.left.right.right= new BinaryTreeNode(12)
  rootNode.left.left.left.right.right= new BinaryTreeNode('Can you walk with 1 cane/crutch in any way, instead of walking with no aids? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.left.right.right.left= new BinaryTreeNode('Think about walking with 1 cane/crutch. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.right.left.left= new BinaryTreeNode('Think about walking with 1 cane/crutch and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.right.left.left.left= new BinaryTreeNode(19)
  rootNode.left.left.right= new BinaryTreeNode('Can you walk with 1 cane/crutch in any way? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.right.left= new BinaryTreeNode('Think about walking with 1 cane/crutch. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.right.left.left= new BinaryTreeNode('Think about walking with 1 cane/crutch and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.right.left.left.left= new BinaryTreeNode(19)
  rootNode.left.left.right.left.left.right= new BinaryTreeNode('Think about walking with 2 crutches instead of 1 cane/crutch. Can you walk without leg brace/s?')
  rootNode.left.left.right.left.left.right.left= new BinaryTreeNode('Think about walking with 2 crutches and without leg brace/s. Can you walk without assistance?')
  rootNode.left.left.right.left.left.right.left.left= new BinaryTreeNode(16)
  rootNode.left.left.right.left.left.right.left.right=new BinaryTreeNode(15)
  rootNode.left.left.left.right.left.right.left.right.right.left.right= new BinaryTreeNode('Think about walking with 2 crutches. Can you walk with assistance of 1 person (with or without leg brace/s)?')

  rootNode.left.left.left.right.left.right.left.right.right.left.right.left= new BinaryTreeNode('Think about walking with 2 crutches and with assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.left= new BinaryTreeNode('Think about using a walker instead of 2 crutches. Can you walk without assistance and no leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.left.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.left.right= new BinaryTreeNode(11)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right= new BinaryTreeNode('Think about walking with a walker instead of 2 crutches. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right.left= new BinaryTreeNode('Think about walking with a walker and without leg brace/s. Can you walk without assistance?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right.left.left=new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right.left.right= new BinaryTreeNode('Think about walking with a walker and without leg brace/s. Can you walk with assistance of 1 person?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right.left.right.left= new BinaryTreeNode(8)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right.left.right.right= new BinaryTreeNode(7)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right.right= new BinaryTreeNode('Think about walking with a walker and with your leg brace/s. Can you walk without assistance?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right.right.left= new BinaryTreeNode(9)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.left.right.right.right= new BinaryTreeNode(7)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right= new BinaryTreeNode('Can you walk with a walker instead of 2 crutches? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left= new BinaryTreeNode('Think about using a walker. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.left= new BinaryTreeNode('Think about walking with a walker and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.left.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.left.right= new BinaryTreeNode(9)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right= new BinaryTreeNode('Think about using a walker. Can you walk with assistance of 1 person (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.left= new BinaryTreeNode('Think about using a walker and assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.left.left= new BinaryTreeNode(8)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.left.right= new BinaryTreeNode(6)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right= new BinaryTreeNode('Can you walk in parallel bars in any way? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left= new BinaryTreeNode('Can you walk in parallel bars without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left.left= new BinaryTreeNode(5)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left.right= new BinaryTreeNode('Think about using parallel bars. Can you walk with assistance of 1 person (with or without leg braces)?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left.right.left= new BinaryTreeNode('Think about using parallel bars and having assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left.right.left.left= new BinaryTreeNode(4)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left.right.left.right= new BinaryTreeNode(3)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left.right.right= new BinaryTreeNode('Think about using parallel bars. Can you walk the length of 10 meters (with assistance of 2 people, with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left.right.right.left= new BinaryTreeNode(2)
  rootNode.left.left.left.right.left.right.left.right.right.left.right.right.left.right.right.left.right.right.right= new BinaryTreeNode(1)
  rootNode.left.right= new BinaryTreeNode('Can you take a few steps in parallel bars in any way? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.right.left= new BinaryTreeNode(1)
  rootNode.left.right.right=  new BinaryTreeNode(0)
  rootNode.left.left.right.right= new BinaryTreeNode('Can you walk with 2 crutches in any way? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.right.right.left= new BinaryTreeNode('Think about walking with 2 crutches. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.right.right.left.left= new BinaryTreeNode('Think about walking with 2 crutches and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.right.right.left.left.left= new BinaryTreeNode(16)
  rootNode.left.left.right.right.left.left.right= new BinaryTreeNode('Think about using a walker instead of 2 crutches. Can you walk without leg brace/s?')
  rootNode.left.left.right.right.left.left.right.left= new BinaryTreeNode('Think about walking with a walker and without leg brace/s. Can you walk without assistance?')
  rootNode.left.left.right.right.left.left.right.left.left= new BinaryTreeNode(13)
  rootNode.left.left.right.right.left.left.right.left.right= new BinaryTreeNode(12)
  rootNode.left.left.right.right.left.left.right.right= new BinaryTreeNode(12)
  rootNode.left.left.right.right.left.right= new BinaryTreeNode('Think about walking with 2 crutches. Can you walk with assistance of 1 person (with or without leg brace/s)?')
  rootNode.left.left.right.right.left.right.left= new BinaryTreeNode('Think about walking with 2 crutches and with assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.right.right.left.right.left.left= new BinaryTreeNode('Think about using a walker instead of 2 crutches. Can you walk without assistance and no leg brace/s?')
  rootNode.left.left.right.right.left.right.left.left.left= new BinaryTreeNode(13)
  rootNode.left.left.right.right.left.right.left.left.right= new BinaryTreeNode(11)
  rootNode.left.left.right.right.left.right.left.right= new BinaryTreeNode('Think about walking with a walker instead of 2 crutches. Can you walk without leg brace/s?')
  rootNode.left.left.right.right.left.right.left.right.left= new BinaryTreeNode('Think about walking with a walker and without leg brace/s. Can you walk without assistance?')
  rootNode.left.left.right.right.left.right.left.right.left.left= new BinaryTreeNode(13)
  rootNode.left.left.right.right.left.right.left.right.left.right= new BinaryTreeNode('Think about walking with a walker and without leg brace/s. Can you walk with assistance of 1 person?')
  rootNode.left.left.right.right.left.right.left.right.left.right.left= new BinaryTreeNode(8)
  rootNode.left.left.right.right.left.right.left.right.left.right.right= new BinaryTreeNode(7)
  rootNode.left.left.right.right.left.right.left.right.right= new BinaryTreeNode('Think about walking with a walker and with your leg brace/s. Can you walk without assistance?')
  rootNode.left.left.right.right.left.right.left.right.right.left= new BinaryTreeNode(9)
  rootNode.left.left.right.right.left.right.left.right.right.right= new BinaryTreeNode(7)
  rootNode.left.left.right.right.left.right.right= new BinaryTreeNode('Can you walk with a walker instead of 2 crutches? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.right.right.left.right.right.left= new BinaryTreeNode('Think about using a walker. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.right.right.left.right.right.left.left= new BinaryTreeNode('Think about walking with a walker and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.right.right.left.right.right.left.left.left= new BinaryTreeNode(13)
  rootNode.left.left.right.right.left.right.right.left.left.right= new BinaryTreeNode(9)
  rootNode.left.left.right.right.left.right.right.left.right= new BinaryTreeNode('Think about using a walker. Can you walk with assistance of 1 person (with or without leg brace/s)?')
  rootNode.left.left.right.right.left.right.right.left.right.left= new BinaryTreeNode('Think about using a walker and assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.right.right.left.right.right.left.right.left.left= new BinaryTreeNode(8)
  rootNode.left.left.right.right.left.right.right.left.right.left.right= new BinaryTreeNode(6)
  rootNode.left.left.right.right.left.right.right.left.right.right= new BinaryTreeNode('Can you walk in parallel bars in any way? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.right.right.left.right.right.left.right.right.left= new BinaryTreeNode('Can you walk in parallel bars without assistance (with or without leg brace/s)?')
  rootNode.left.left.right.right.left.right.right.left.right.right.left.left= new BinaryTreeNode(5)
  rootNode.left.left.right.right.left.right.right.left.right.right.left.right= new BinaryTreeNode('Think about using parallel bars. Can you walk with assistance of 1 person (with or without leg braces)?')
  rootNode.left.left.right.right.left.right.right.left.right.right.left.right.left= new BinaryTreeNode('Think about using parallel bars and having assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.right.right.left.right.right.left.right.right.left.right.left.left= new BinaryTreeNode(4)
  rootNode.left.left.right.right.left.right.right.left.right.right.left.right.left.right= new BinaryTreeNode(3)
  rootNode.left.left.right.right.left.right.right.left.right.right.left.right.right= new BinaryTreeNode('Think about using parallel bars. Can you walk the length of 10 meters (with assistance of 2 people, with or without leg brace/s)?')
  rootNode.left.left.right.right.left.right.right.left.right.right.left.right.right.left= new BinaryTreeNode(2)
  rootNode.left.left.right.right.left.right.right.left.right.right.left.right.right.right= new BinaryTreeNode(1)
  rootNode.left.left.right.right.left.right.right.left.right.right.right= new BinaryTreeNode(0)
  rootNode.left.left.left.right.left.left= new BinaryTreeNode('Think about using 1 cane/crutch instead of no walking aid. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.left.right= new BinaryTreeNode(17)
  rootNode.left.left.left.right.left.left.left= new BinaryTreeNode('Think about walking wtih 1 cane/crutch and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.left.left.left= new BinaryTreeNode(19)
  rootNode.left.left.left.right.left.left.left.right= new BinaryTreeNode(17)
  rootNode.left.left.left.right.right.left.left.right=new BinaryTreeNode('Think about walking with 2 crutches instead of 1 cane/crutch. Can you walk without leg brace/s?')

  rootNode.left.left.left.right.right.left.left.right.right= new BinaryTreeNode(15)
  rootNode.left.left.left.right.right.left.left.right.left= new BinaryTreeNode('Think about walking with 2 crutches and without leg brace/s. Can you walk without assistance?')
  rootNode.left.left.left.right.right.left.left.right.left.left= new BinaryTreeNode(16)
  rootNode.left.left.left.right.right.left.left.right.left.right = new BinaryTreeNode(15)

  rootNode.left.left.left.right.left.right.left.right.left.right.right= new BinaryTreeNode("Think about walking with 2 crutches and with your leg brace/s. Can you walk without assistance?")
  rootNode.left.left.left.right.left.right.left.right.left.right.right.left= new BinaryTreeNode("Think about using a walker instead of 2 crutches. Can you walk without leg brace/s and no assistance?")
  rootNode.left.left.left.right.left.right.left.right.left.right.right.left.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.left.right.right.left.right= new BinaryTreeNode(12)
  rootNode.left.left.left.right.left.right.left.right.left.right.right.right=  new BinaryTreeNode('Think about using a walker instead of 2 crutches. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.left.right.right.right.right= new BinaryTreeNode(10)
  rootNode.left.left.left.right.left.right.left.right.left.right.right.right.left= new BinaryTreeNode('Think about walking with a walker and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.left.right.right.right.left.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.left.right.right.right.left.right= new BinaryTreeNode(10)
  rootNode.left.left.left.right.left.right.left.right.right.right= new BinaryTreeNode("Can you walk with a walker in any way? This includes walking with or without assistance and/or leg brace/s.")
  rootNode.left.left.left.right.left.right.left.right.right.right.left= new BinaryTreeNode('Think about using a walker. Can you walk without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.right.left.left= new BinaryTreeNode('Think about walking with a walker and without assistance. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.right.left.left.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.left.right= new BinaryTreeNode(9)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right= new BinaryTreeNode('Think about using a walker. Can you walk with assistance of 1 person (with or without leg brace/s)?')

  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.left= new BinaryTreeNode('Think about using a walker and assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right= new BinaryTreeNode('Can you walk in parallel bars in any way? This includes walking with or without assistance and/or leg brace/s')
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.left.left= new BinaryTreeNode(8)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.left.right= new BinaryTreeNode(6)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left= new BinaryTreeNode('Can you walk in parallel bars without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.right= new BinaryTreeNode(0)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left.left= new BinaryTreeNode(5)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left.right= new BinaryTreeNode('Think about using parallel bars. Can you walk with assistance of 1 person (with or without leg braces)?')
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left.right.left= new BinaryTreeNode('Think about using parallel bars and having assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left.right.left.left= new BinaryTreeNode(4)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left.right.left.right= new BinaryTreeNode(3)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left.right.right= new BinaryTreeNode('Think about using parallel bars. Can you walk the length of 10 meters (with assistance of 2 people, with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left.right.right.left= new BinaryTreeNode(2)
  rootNode.left.left.left.right.left.right.left.right.right.right.left.right.right.left.right.right.right= new BinaryTreeNode(1)
  rootNode.left.left.left.right.left.right.left.right.right.right.right= new BinaryTreeNode('Can you walk in parallel bars in any way? This includes walking with or without assistance and/or leg brace/s.')
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left= new BinaryTreeNode('Can you walk in parallel bars without assistance (with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.right.right.right= new BinaryTreeNode(0)
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left.left= new BinaryTreeNode(5)
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left.right= new BinaryTreeNode('Think about using parallel bars. Can you walk with assistance of 1 person (with or without leg braces)?')
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left.right.left= new BinaryTreeNode('Think about using parallel bars and having assistance of 1 person. Can you walk without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left.right.left.left= new BinaryTreeNode(4)
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left.right.left.right= new BinaryTreeNode(3)
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left.right.right= new BinaryTreeNode('Think about using parallel bars. Can you walk the length of 10 meters (with assistance of 2 people, with or without leg brace/s)?')
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left.right.right.left= new BinaryTreeNode(2)
  rootNode.left.left.left.right.left.right.left.right.right.right.right.left.right.right.right= new BinaryTreeNode(1)
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.left.right= new BinaryTreeNode('Think about using a walker instead of 2 crutches. Can you walk without assistances and no leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.left.right.right= new BinaryTreeNode(11)
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.left.right.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.right= new BinaryTreeNode('Think about using a walker instead of 2 crutches. Can you walk without assistance and without leg brace/s?')
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.right.left= new BinaryTreeNode(13)
  rootNode.left.left.left.right.left.right.left.right.left.right.left.right.right.right= new BinaryTreeNode(10)
    
  
  
  
  
  const binaryTreeJSON = JSON.stringify(rootNode, null, 2);
  console.log(binaryTreeJSON);
  res.status(200).json({ data: rootNode });
  

 
}
