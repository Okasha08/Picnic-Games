var data = [

    {

        "Image": "img/both5.jpg",
        "Heading": "Jenga Giant JS6 (Stacks to Over 4 Feet)",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/both6.jpg",
        "Heading": "Jumbo Checkers Rug Game, Machine Washable",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/both4.jpg",
        "Heading": "Croquet Set- Wooden Outdoor Deluxe Sports Set with Carrying Case",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids7.jpg",
        "Heading": "UNO Card Game, with 112 Cards in a Sturdy Storage Tin",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/family5.jpg",
        "Heading": "Kan Jam Original Disc Toss Game",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/both3.jpg",
        "Heading": "Daring Contest Family Game- A Funny Card Game",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/both2.jpg",
        "Heading": "Franklin Sports Horseshoes - American, Starter, Professional Sets",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/both1.jpg",
        "Heading": "GoSports Get Low Limbo Premium Wooden Limbo Game",
        "Description": "$140",
        "price":"Buy Now"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("twoage").innerHTML += `


<div class="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-9 offset-sm-2 offset-2  col-8 my-lg-0 my-2 ">
<div class="card mt-3"> <a href="zero0p.html"><img class="card-img-top w-100" style="height:250px" src="${data[i].Image}"></a>
    <div class="card-body carddd">
        <div class="d-flex align-items-start justify-content-between">
            <div class="d-flex flex-column">
                <div class="h6 font-weight-bold" style="height:50px">${data[i].Heading}</div>
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


