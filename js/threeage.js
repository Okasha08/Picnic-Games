var data = [

    {

        "Image": "img/family1.jpg",
        "Heading": "Zume Games Portable Badminton Set with Freestanding Base",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/familly2.jpg",
        "Heading": "Tug of War Rope with Flag for Kids and Adults- 20 feet long ",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/family4.jpg",
        "Heading": "8 Foot Pong Table, Foldable, Adjustable and Portable",
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

        "Image": "img/both5.jpg",
        "Heading": "Jenga Giant JS6 (Stacks to Over 4 Feet)",
        "Description": "$140",
        "price":"Buy Now"

    },
    {

        "Image": "img/kids6.jpg",
        "Heading": "Tic-Tac-Toe Small Wooden Travel Game with Fixed, Spinning Pieces",
        "Description": "$140",
        "price":"Buy Now"

    },

    

    
];

for(var i=0; i < data.length; i++){

document.getElementById("threeage").innerHTML += `


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


