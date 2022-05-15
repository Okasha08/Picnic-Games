var data = [

    {

        "Image": "img/p1-1.jpg",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/p1-2.jpg",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/p1-3.jpg",
        "Heading": "qFisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/p1-4.jpg",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/p1-5.jpg",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/p1-6.jpg",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/p1-7.jpg",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/p1-8.jpg",
        "Heading": "Fisher-Price® 4-in-1 Sling 'n Seat Tub",
        "Description": "$140",
        "price":"Buy Now"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("agezero").innerHTML += `


<div class="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-8 col-xs-6 offset-2  col-8 offset-sm-1 my-lg-0 my-2 ">
<div class="card mt-3"> <a href=""><img class="card-img-top w-100" src="${data[i].Image}"></a>
    <div class="card-body">
        <div class="">
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


