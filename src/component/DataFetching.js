 import React, {useState, useEffect} from 'react'
 import axios from 'axios'

 function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://v5hdg0fow7.execute-api.ap-northeast-2.amazonaws.com/Dev/pockets/test")
        .then((res) => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })
   return (
     <div>
        <ul>
            {
                posts.map(post => <li key={posts.pockect_count}>{post.count}</li>)
            }
        </ul>
     </div>
   )
 }
 
 export default DataFetching