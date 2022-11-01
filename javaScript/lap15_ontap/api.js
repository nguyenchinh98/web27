const PROVINCE_API = "https://provinces.open-api.vn/api/";
const DISTRICT_API = "https://provinces.open-api.vn/api/p";
const WARD_API = "https://provinces.open-api.vn/api/d";

export const getProvinces = async () => {
    return await fetch(PROVINCE_API)
    .then((res) => res.json())
}
