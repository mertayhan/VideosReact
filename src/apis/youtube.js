 import axios from 'axios';

 const KEY = 'AIzaSyBHQT-7c-o6pFNwDc4oAwFZ3F7_JRTfUfo'; 

 export default axios.create({
     baseURL: 'https://www.googleapis.com/youtube/v3',
     params:{
         part:"snippet",
         maxResults: 5,
          key: KEY
          
     }
 })