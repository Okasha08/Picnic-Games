var dataproduct = [

    {

        "Image": "img/p1-1.jpg",
        "Heading": "Fisher-adil® 4-in-1 Sling 'n Seat Tub",
        "price":"$140",
        "btn": " add to card",

    },
    
{
    "Image": "img/p1-2.jpg",
    "Heading": "Fisher-adil® 4-in-1 Sling 'n Seat Tub",
    "price":"$140",
    "btn": " add to card",

}
     
];

for(var p=0; p < data.length; p++){

document.getElementById("adil").innerHTML += `


<div class="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-6 offset-sm-1 offset-2  col-8 my-lg-0 my-2 ">
                <div class="card"> <a href="zero0p.html"><img class="card-img-top w-100" src="${dataproduct[p].Image}"></a>
                    <div class="card-body">
                        <div class="d-flex align-items-start justify-content-between">
                            <div class="d-flex flex-column">
                                <div class="h6 font-weight-bold">${dataproduct[p].Heading}</div>
                                <div class="text-muted">${dataproduct[p].price}</div>
                            </div>
                            <div class="btn heart"><span class="far fa-heart"></span></div>
                        </div>
                        <button class="button propage-btn btn-center">${dataproduct[p].btn}</button>
                    </div>
                </div>
            </div>
            
`;


}
