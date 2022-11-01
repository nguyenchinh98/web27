// Fetch API - fetch - prommise(bất đồng bộ)
// - các trạng thái Pending - Fullfilld - Reject
// - Thao tác với Promise: sử dụng  then/catch/finaline or async/await/try/catch
// 

import {getProvinces } from "./api.js";
window.onload = async function (){
    try {
        const provinces = await getProvinces();
        console.log(provinces)
    }
    catch(err){
        console.log(err)
    }
}