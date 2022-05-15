var data = [

    {

        "Image": "img/brandpageight1.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpageight2.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpageight3.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpageight4.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpageight5.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpageight6.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpageight7.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpageight8.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("brandjson8").innerHTML += `


<div class="cardbrandss">
<div class="imgbrand imgbrand">
    <img src="${data[i].Image}" alt=""  class="shadow-lg">
    <h2>${data[i].Heading}</h2>
  
</div>
<div class="content">
 
    <p>${data[i].Description}</p>
    <h5>${data[i].price}</h5>
   
</div>
</div>




`;

}


