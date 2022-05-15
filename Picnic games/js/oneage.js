var data = [

    {

        "Image": "img/one1.png",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/one2.png",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/one3.png",
        "Heading": "qFisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/one4.png",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/one5.png",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/one6.png",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/one7.png",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/one8.png",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("oneage").innerHTML += `


<div class="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-9 offset-2  col-8   offset-sm-2 my-lg-0 my-2 ">
<div class="card mt-3"> <a href="zero0p.html"><img class="card-img-top w-100" src="${data[i].Image}"></a>
    <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
            <div class="d-flex flex-column">
                <div class="h6 font-weight-bold">${data[i].Heading}</div>
                <div class="text-muted">${data[i].Description}</div>
            </div>
            <div class="btn heart"><span class="far fa-heart"></span></div>
        </div>
        <button class="button propage-btn btn-center" onclick="ThankYou();">${data[i].price}</button>
    </div>
</div>
</div> 



`;

}


