import axios from 'axios';
//change the base url when dealing with online server;
export default axios.create({
    baseURL:"http://localhost:3006/"


})