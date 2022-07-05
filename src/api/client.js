import axios from 'axios';
//change the base url when dealing with online server;
// baseURL:"https://truthful-wind-yumberry.glitch.me/"
//local :
// baseURL:"http://localhost:3006/"
export default axios.create({
   
    baseURL:"https://truthful-wind-yumberry.glitch.me/"

})