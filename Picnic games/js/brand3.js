var data = [

    {

        "Image": "img/brandpagethree1.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagethree2.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagethree3.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagethree4.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagethree5.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagethree6.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagethree7.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagethree8.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("brandjson3").innerHTML += `


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


