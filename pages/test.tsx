
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const test = () => {
    const [htmlString, setData] = useState("");
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('/api/hello');
            setData(response.data.data);
            
          } catch (error) {
            console.error('Error:', error);
          }
        }
    
        fetchData();
      }, []); // The empty array means this effect runs only once after initial render
    
  return (
    <iframe className="w-full h-screen"src={"https://sciptguide.com/clinicians/clinicians-search-results/?type=all&strength=all&select-treatment=all&select-skill=all&select-impairment=all&searchtype=consumers&submit=Search#"} title="Embedded Website" frameBorder="0"></iframe>
  )
}

export default test