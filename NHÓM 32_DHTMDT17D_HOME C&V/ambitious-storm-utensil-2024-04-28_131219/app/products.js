const products = [
    {
        "id": 1,
        "name":" Spaghetti ",
        "price": 150000,
        "image": "https://cdn.glitch.global/6e9b1758-0fd7-43a8-aa6f-f93832b0a650/1.PNG?v=1713717210638",
       "description": " Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
    {
        "id": 2,
        "name":" Salad ức gà",
        "price": 250000,
        "image": "https://cdn.glitch.global/6e9b1758-0fd7-43a8-aa6f-f93832b0a650/3.PNG?v=1714020945351",
       "description": " Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
    {
        "id": 3,
        "name":"Salad rau trộn",
        "price": 89000,
        "image": "https://cdn.glitch.global/6e9b1758-0fd7-43a8-aa6f-f93832b0a650/5.PNG?v=1714020961429",
     "description": " Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },
    {
        "id": 4,
        "name":" Súp bí đỏ",
        "price": 100000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/4.PNG?v=1714145893729",
     "description": " Được chế biến từ các đầu bếp nhà Home C&V đem đến cho khách hàng một trải nghiêm khó quên với công thức đặc biệt"
    },  
    {
        "id": 5,
        "name":" Bánh ngọt và trứng",
        "price": 259000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-566566.jpeg?v=1714298135340",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 6,
        "name":" Cánh gà cháy tỏi",
        "price": 125000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/2.PNG?v=1714147760140",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 7,
        "name":"Pizza cheap",
        "price": 135000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/6.PNG?v=1714147719306",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
        "id": 8,
        "name":" Pizza F Home C&V",
        "price": 100000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/pexels-photo-208537-removebg-preview.png?v=1714147693657",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
 {
        "id": 9,
        "name":" Ring Berry Home C&V (đặt trước 1 ngày)",
        "price": 103000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/pexels-photo-1092730-removebg-preview.png?v=1714148040538",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
   {
        "id": 10,
        "name":"Lover Pissca Cafe Home C&V (  đặt trước 2 ngày trước  )",
        "price": 200000,
        "image": "https://cdn.glitch.global/1308a7d4-af90-4e8f-b388-3d6fcab133f8/pexels-photo-3118421-removebg-preview.png?v=1714146409528",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },  
  {
    "id": 11,
        "name":" Nuôi",
        "price": 49000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/free-photo-of-mon-an-nha-hang-cai-thia-b-a-t-i.jpeg?v=1714299957040",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
   {
    "id": 12,
        "name":" Bắp",
        "price": 25000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-1414642-removebg-preview.png?v=1714295889991",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
   {
    "id": 13,
        "name":" Cà rốt",
        "price": 19000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-65174.jpeg?v=1714296129481",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
   {
    "id": 14,
        "name":" Thịt",
        "price": 170000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-65175.jpeg?v=1714297000897",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
    "id": 15,
        "name":" Rau mix",
        "price": 23000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-2751755-removebg-preview.png?v=1714295380260",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
    "id": 16,
        "name":" Cà chua",
        "price": 20000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-pixabay-248420-removebg-preview.png?v=1714295519439",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
    "id": 17,
        "name":" Tôm",
        "price": 200000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-3295856.jpeg?v=1714297484876",
        "description": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-3295856.jpeg?v=1714297484876"
    },
    {
    "id": 18,
        "name":" Trứng",
        "price": 5000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-3640669.webp?v=1714297684904",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
    "id": 19,
        "name":" Cá hồi",
        "price": 350000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-3296279.jpeg?v=1714297894385",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
    "id": 20,
        "name":" Salad home C&V",
        "price": 299000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-13467083.jpeg?v=1714299768467",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
    "id": 21,
        "name":" Dâu tây mix hạt điều",
        "price": 179000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-3622475.jpeg?v=1714298581982",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
    "id": 22,
        "name":" Bánh mì rau",
        "price": 139000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-1988624.jpeg?v=1714298709943",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
    {
    "id": 23,
        "name":"Ngũ cốc dinh dưỡng ",
        "price": 149000,
        "image": "https://cdn.glitch.global/6eef5d8e-ddfd-4516-ac61-1720d3e914bb/pexels-photo-4306078.jpeg?v=1714299619089",
        "description": "Expertly rendered by Carl Hansen & Søn, the lounge chair—first introduced in 1951 and enduring ever since—is available in oak or as a combination of oak and walnut, sourced from sustainable forestry. Choose from seat and back upholstery in a selection of leather options or in a custom fabric."
    },
  
];
export default products;