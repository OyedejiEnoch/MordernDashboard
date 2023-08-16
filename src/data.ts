export const menu =[
    {   
        id:1,
        title:"Main",
        listItem:[
            {
                id:1,
                title:"Homepage",
                url:"/",
                icon:"home.svg"
            },
            {
                id:2,
                title:"Profile",
                url:"/users/1",
                icon:"user.svg"
            },
        ]
    },
    {   
        id:2,
        title:"Lists",
        listItem:[
            {
                id:1,
                title:"Users",
                url:"/users",
                icon:"user.svg"
            },
            {
                id:2,
                title:"Products",
                url:"/products",
                icon:"product.svg"
            },
            {
                id:3,
                title:"Orders",
                url:"/orders",
                icon:"order.svg"
            },
            {
                id:4,
                title:"Posts",
                url:"/posts",
                icon:"post2.svg"
            },
        ]
    },
    {   
        id:3,
        title:"general",
        listItem:[
            {
                id:1,
                title:"Elements",
                url:"/",
                icon:"element.svg"
            },
            {
                id:2,
                title:"Notes",
                url:"/",
                icon:"note.svg"
            },
            {
                id:3,
                title:"Forms",
                url:"/",
                icon:"form.svg"
            },
            {
                id:4,
                title:"Calendar",
                url:"/",
                icon:"calendar.svg"
            },
        ]
    },
    {   
        id:4,
        title:"analytics",
        listItem:[
            {
                id:1,
                title:"Charts",
                url:"/",
                icon:"chart.svg"
            },
            {
                id:2,
                title:"Logs",
                url:"/",
                icon:"log.svg"
            },
        ]
    },

]



export const topDealUsers=[
    {   
        id:1,
        img:"https://images.unsplash.com/photo-1660162129606-c12ece87e967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        username: "Angela",
        email: "angela@gmail.com",
        amount: "5406"
    },
    {   
        id:2,
        img:"https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        username: "James",
        email: "james@gmail.com",
        amount: "1030"
    },
    {   
        id:3,
        img:"https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        username: "Kelvin",
        email: "kelvin@gmail.com",
        amount: "2803"
    },
    {   
        id:4,
        img:"https://images.unsplash.com/photo-1690040158054-04a19549b43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        username: "Luke",
        email: "luke@gmail.com",
        amount: "3000"
    },
    {   
        id:5,
        img:"https://images.unsplash.com/photo-1690088141648-3d6d6757cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        username: "luise",
        email: "luise@gmail.com",
        amount: "6000"
    },
    {   
        id:6,
        img:"https://images.unsplash.com/photo-1604882737321-e6937fd6f519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        username: "Jane",
        email: "Jane@gmail.com",
        amount: "5000"
    },
    {   
        id:7,
        img:"https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        username: "Matthew",
        email: "matthew@gmail.com",
        amount: "2140"
    },
]


export const chartBoxUser ={
    color:"#8884d0",
    icon:"/userIcon.svg",
    title:"Total Users",
    number:"11.238",
    dataKey:"users",
    percentage:45,
    chartData:[
        {name:"Sun", users:"400"},
        {name:"Monday", users:"600"},
        {name:"Tue", users:"500"},
        {name:"Wed", users:"700"},
        {name:"Thur", users:"800"},
        {name:"Fri", users:"600"},
    ]
}
export const chartBoxProduct ={
    color:"skyblue",
    icon:"/productIcon.svg",
    title:"Total Products",
    number:"238",
    dataKey:"products",
    percentage:12,
    chartData:[
        {name:"Sun", products:"200"},
        {name:"Monday", products:"300"},
        {name:"Tue", products:"400"},
        {name:"Wed", products:"700"},
        {name:"Thur", products:"500"},
        {name:"Fri", products:"300"},
    ]
}
export const chartBoxRevenue ={
    color:"teal",
    icon:"/revenueIcon.svg",
    title:"Total Revenue",
    number:"31000",
    dataKey:"revenue",
    percentage:-12,
    chartData:[
        {name:"Sun", revenue:"800"},
        {name:"Monday", revenue:"300"},
        {name:"Tue", revenue:"600"},
        {name:"Wed", revenue:"700"},
        {name:"Thur", revenue:"500"},
        {name:"Fri", revenue:"300"},
    ]
}
export const chartBoxConversion ={
    color:"gold",
    icon:"/conversionIcon.svg",
    title:"Total Ratio",
    number:"33.6",
    dataKey:"ratio",
    percentage:12,
    chartData:[
        {name:"Sun", ratio:"200"},
        {name:"Monday", ratio:"300"},
        {name:"Tue", ratio:"500"},
        {name:"Wed", ratio:"700"},
        {name:"Thur", ratio:"300"},
        {name:"Fri", ratio:"200"},
    ]
}


export const barChartBoxVisit={
    title:"Total Visit",
    color:"#ff8042",
    dataKey:"visit",
    barChartData: [
        {name:"Sun", visit:400},
        {name:"Mon", visit:800},
        {name:"Tue", visit:1100},
        {name:"Wed", visit:600},
        {name:"Thur", visit:600},
        {name:"Fri", visit:400},
        {name:"Sat", visit:300},
    ]
}
export const barChartBoxRevenue={
    title:"Profit Revenue",
    color:"#8884d8",
    dataKey:"profit",
    barChartData: [
        {name:"Sun", profit:200},
        {name:"Mon", profit:600},
        {name:"Tue", profit:1100},
        {name:"Wed", profit:700},
        {name:"Thur", profit:800},
        {name:"Fri", profit:400},
        {name:"Sat", profit:600},
    ]
}



export const userRows= [
    {
        id:1,
        firstName:"Smith",
        lastName:"John ",
        img:"https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        phone:"+123 456 789",
        email: "john@gmail.com",
        age: 24,
        payment:"Paid"
   },
   {
    id:2,
    firstName:"Susan",
    lastName:"Allan ",
    img:"https://images.unsplash.com/photo-1690151711465-2bfe4e69f241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    phone:"+123 456 789",
    email: "allan@gmail.com",
    age: 20,
    payment:"Paid"
    },
    {
        id:3,
        firstName:"jones",
        lastName:"Rihana ",
        img:"https://images.unsplash.com/photo-1690148721103-56e9a0dc24ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        phone:"+123 456 789",
        email: "rihana@gmail.com",
        age: 32,
        payment:"Pending"
   },
   {
    id:4,
    firstName:"Ruue",
    lastName:"Ellen ",
    img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    phone:"+123 456 789",
    email:  "ellen@gmail.com",
    age: 24,
    payment:"Pending"
    },
   {
    id:5,
    firstName:"Posh",
    lastName:"James ",
    img:"https://images.unsplash.com/photo-1690527425856-43307d16d5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    phone:"+123 456 789",
    email:  "posh@gmail.com",
    age: 24,
    payment:"Paid"
    },
   {
    id:6,
    firstName:"Jones",
    lastName:"Nickolie ",
    img:"https://images.unsplash.com/photo-1690207714547-6e76b0e61b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    phone:"+123 456 789",
    email:  "Nikolie@gmail.com",
    age: 24,
    payment:"Pending"
    },
   {
    id:7,
    firstName:"Martinez",
    lastName:"Grabriel ",
    img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    phone:"+123 456 789",
    email:  "grabriel@gmail.com",
    age: 24,
    payment:"Paid"
    },
  ];


  export const products =[
    {
        id:1,
        title:"Iphone 14",
        color:"Cream ",
        img:"https://images.unsplash.com/photo-1625102216513-7f77b654e1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdhZGdldHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        producer:"Iplus",
        price:  "2000",
        createdAt: "01.02.20.03",
        inStock:true
    },
    {
        id:2,
        title:"Mac book",
        color:"sliver ",
        img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        producer:"Iplus",
        price:  "4000",
        createdAt: "01.02.20.03",
        inStock:true
    },
    {
        id:3,
        title:"Lenovo Laptop",
        color:"Black ",
        img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FkZ2V0cyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        producer:"Lenovo",
        price:  "1100",
        createdAt: "01.02.20.03",
        inStock:false
    },
    {
        id:4,
        title:"Air Pods Pro",
        color:"White ",
        img:"https://images.unsplash.com/photo-1651169611492-764ff25da660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdhZGdldHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        producer:"Iplus",
        price:  "500",
        createdAt: "01.02.20.03",
        inStock:true
    },
    {
        id:5,
        title:"Samsung fold",
        color:"Black ",
        img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        producer:"Samsung",
        price:  "2000",
        createdAt: "01.02.20.03",
        inStock:true
    },
    {
        id:6,
        title:"Samsung fold",
        color:"Black ",
        img:"https://images.unsplash.com/photo-1680948676063-bdc079cb11a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        producer:"Samsung",
        price:  "2000",
        createdAt: "01.02.20.03",
        inStock:true
    },
    {
        id:6,
        title:"Samsung fold",
        color:"Black ",
        img:"https://images.unsplash.com/photo-1625102216513-7f77b654e1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdhZGdldHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        producer:"Samsung",
        price:  "2000",
        createdAt: "01.02.20.03",
        inStock:true
    },
  ]


export const singleUser ={
    id:1,
    img:"https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    title:"John Doe",
    info:{
        username:"Johndoe",
        fullname:"John doe",
        email:"Johndoe@gmail.com",
        phone:"+123 234 345",
        role:"user",
    },
    chart:{
        dataKeys:[
            {name:"visits", color:"#82ca9d"},
            {name:"clicks", color:"#8884d8"},
        ]
    },
    data:[
        {
            name:"Sun",
            visits:300,
            orders:200
        },
        {
            name:"Mon",
            visits:400,
            orders:320
        },
        {
            name:"Wed",
            visits:200,
            orders:150
        },
        {
            name:"Thur",
            visits:520,
            orders:400
        },
        {
            name:"Fri",
            visits:600,
            orders:580
        },
        {
            name:"Sat",
            visits:700,
            orders:630
        },
    ],
    activities:[
        {time:"3 days age", text:"John Doe registered on the site"},
        {time:"2 days age", text:"John Doe purchased a product on the site"},
        {time:"1 days age", text:"John Doe paid for a pending product on the site"},
    ]
}
export const singleProduct ={
    id:1,
    img:"https://images.unsplash.com/photo-1625102216513-7f77b654e1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdhZGdldHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title:"Iphone 14 pro",
    info:{
        productId:"#f220gh17309sp1",
        color:"Cream",
        price:"2200",
        producer:"Apple",
        export:"America",
    },
    chart:{
        dataKeys:[
            {name:"visits", color:"#82ca9d"},
            {name:"orders", color:"#8884d8"},
        ]
    },
    data:[
        {
            name:"sun",
            visits:1000,
            orders:300
        },
        {
            name:"Mon",
            visits:3000,
            orders:620
        },
        {
            name:"Wed",
            visits:7000,
            orders:850
        },
        {
            name:"Thur",
            visits:1020,
            orders:400
        },
        {
            name:"Fri",
            visits:6000,
            orders:580
        },
        {
            name:"Sat",
            visits:5000,
            orders:630
        },
    ],
    activities:[
        {time:"5 days age", text:"John Doe purchased on the site"},
        {time:"5 days age", text:"Item was added to cart by 1000 users"},
        {time:"5 days age", text:"Anna purchased on the site"},
        {time:"5 days age", text:"Philip purchased on the site"},
        {time:"4 days age", text:"Enoch purchased on the site"},
        {time:"3 days age", text:"Mike paid for a pending product on the site"},
    ]
}