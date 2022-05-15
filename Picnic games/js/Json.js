var data = [

    {

        "Image": "img/hoverimage1.jpg",
        "Heading": "DOLL",
        "Description": "A doll is a child's toy toys for children they are also used to comfort people and also to teach. type of toy that looks like a bear. The teddy bear is normally a cub or baby bear.Teddy bears are often toys for children they are also used to comfort people and also to teach. A teddy bear is a popular and well-known toy."

    }
    ,
    {

        "Image": "img/hoverimage2.jpg",
        "Heading": "CAR",
        "Description": "A model car or toy car is a miniaturetoys for children they are also used to comfort people and also to teach. type of toy that looks like a bear. The teddy bear is normally a cub or baby bear.Teddy bears are often toys for children they are also used to comfort people and also to teach. A teddy bear is a popular and well-known toy."

    },
    {

        "Image": "img/hoverimage3.jpg",
        "Heading": "TEDDY BEAR",
        "Description": "A teddy bear is a type of toy that looks like a bear. The teddy bear is normally a cub or baby bear.Teddy bears are often toys for children they are also used to comfort people and also to teach. type of toy that looks like a bear. The teddy bear is normally a cub or baby bear.Teddy bears are often toys for children they are also used to comfort people and also to teach. A teddy bear is a popular and well-known toy."

    }
    
];

for(var i=0; i < data.length; i++){

document.getElementById("asad").innerHTML += `

<div class="box">
          <div class="imgbx">
            <img src="${data[i].Image}" alt="">

          </div>
          <div class="content">
            <h2>${data[i].Heading}</h2>
            <p>${data[i].Description}</p>

         </div>
</div>

`;

}

// var datablog = [

//     {

//         "Image": "img/blog1.jpg",
//         "Heading": "upon on season eart",
//         "Description": "he teddy bear is normally a cub or baby bear.Teddy bears are often toys for children they are also used to comfort people and also to ",
//         "btn":"PUSHER",

//     }
//     ,
    
//     {

//         "Image": "img/blog3.jpg",
//         "Heading": "upon on season eart",
//         "Description": "he teddy bear is normally a cub or baby bear.Teddy bears are often toys for children they are also used to comfort people and also to ",
//         "btn":"PUSHER",
//     }
    
// ];

// for(var i=0; i < data.length; i++){

// document.getElementById("blog").innerHTML += `

// <div class="blogbox">
//           <div class="zoomin frame">
//             <img src="${datablog[i].Image}" title="Scale on Hover with Transition using CSS" />
//           </div>
//           <div class="zoomcontent">
//             <h5> ${datablog[i].Heading}</h5>
//             <h4>${datablog[i].Description}</h4>
//             <button class="zoombtn"> ${datablog[i].btn}</button>
//           </div>
          

// `;

// }

var dataproduct = [

    {

        "Image": "img/p1-1.jpg",
        "Heading": "-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "btn": "add to card"
    }
    ,
    {

        "Image": "img/p1-2.jpg",
        "Heading": "Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "btn": "add to card"

    },
    {

        "Image": "img/p1-3.jpg",
        "Heading": "-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "btn": "add to card"

    }
    
];

for(var i=0; i < data.length; i++){

document.getElementById("adil").innerHTML += `

<div class="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-6 offset-sm-1 my-lg-0 my-2 ">
                <div class="card"> <a href="zero0p.html"><img class="card-img-top w-100" src="${dataproduct[i].Image}"></a>
                    <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                            <div class="d-flex flex-column">
                                <div class="h6 font-weight-bold">${dataproduct[i].Heading}</div>
                                <div class="text-muted">${dataproduct[i].Description}</div>
                            </div>
                            <div class="btn heart"><span class="far fa-heart"></span></div>
                        </div>
                        <button class="button propage-btn btn-center">${dataproduct[i].btn}</button>
                    </div>
                </div>
            </div> 

`;

}
