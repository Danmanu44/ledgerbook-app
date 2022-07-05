import axios from 'axios';
//change the base url when dealing with online server;
// baseURL:"https://truthful-wind-yumberry.glitch.me/"
export default axios.create({
    baseURL:"http://localhost:3006/"


})