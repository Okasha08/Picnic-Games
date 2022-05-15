var data = [

    {

        "Image": "img/brandpagefour1.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagefour2.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagefour3.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagefour4.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagefour5.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagefour6.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagefour7.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },
    {

        "Image": "img/brandpagefour8.jpg",
        "Heading": "quick view",
        "Description": "Maisto 1:10 Desert Rebels School Bus RC Vehicle",
        "price":"Rs.10,250.00"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("brandjson4").innerHTML += `


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


