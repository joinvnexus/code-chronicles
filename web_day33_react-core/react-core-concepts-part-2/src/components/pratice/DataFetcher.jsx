import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect Hook-এর ব্যবহার:
  useEffect(() => {
    // এটি হলো Side Effect (API call)
    console.log("API থেকে ডেটা আনা শুরু হচ্ছে...");
    
    // একটি ডামি (dummy) ডেটা ফেচিং ফাংশন
    fetch('https://jsonplaceholder.typicode.com/todos/1') 
      .then(response => response.json())
      .then(json => {
        setData(json); // fetched data দিয়ে state আপডেট করা হলো
        setLoading(false);
      });
      
  }, []); // <-- এই খালি Array ([]) মানে হলো: Effect টি শুধুমাত্র **প্রথম রেন্ডারের পর** একবারই চলবে।

  return (
    <div>
      <hr />
      <h3>২. useEffect উদাহরণ (ডেটা ফেচিং)</h3>
      {loading ? (
        <p>ডেটা লোড হচ্ছে...</p>
      ) : (
        <>
          <p>ডেটা সফলভাবে লোড হয়েছে।</p>
          <p>আইডি: **{data.id}**, টাইটেল: **{data.title}**</p>
        </>
      )}
    </div>
  );
}

 export default DataFetcher;