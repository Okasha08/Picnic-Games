var data = [

    {

        "Image": "img/kids1.jpg",
        "Heading": "Elite Sportz Ring Toss Games for Kids",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids8.jpg",
        "Heading": "Seaside Sidekicks Sand Baking Play Set",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids4.jpg",
        "Heading": "Twister Ultimate: Bigger Mat, More Colored Spots- Kids Party Game Age 6+",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids5.jpg",
        "Heading": "Kids Scoop Ball Game: Classic",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids3.jpg",
        "Heading": "GoSports Pro Grade Ladder Toss Indoor/Outdoor Game Set",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids2.jpg",
        "Heading": "Champion Sports Indoor/Outdoor Horseshoe Set",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids6.jpg",
        "Heading": "Tic-Tac-Toe Small Wooden Travel Game with Fixed, Spinning Pieces",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids7.jpg",
        "Heading": " Card Game, with 112 Cards in a Sturdy Storage Tin- Age7+",
        "Description": "$140",
        "price":"Buy Now"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("agezero").innerHTML += `


<div class="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-8 col-xs-6 offset-2  col-8 offset-sm-1 my-lg-0 my-2 ">
<div class="card mt-3"> <a href=""><img class="card-img-top w-100" style="height:250px" src="${data[i].Image}"></a>
    <div class="card-body carddd">
        <div class="">
            <div class="d-flex flex-column">
                <div class="h6 font-weight-bold"  style="height:50px">${data[i].Heading}</div>
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


