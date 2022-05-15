var header=[
    {

        "head1": "TOYOTOYS",
        "head2": " Here you can use rows and columns to organize your footer ",
        
        "head3": "   Products",
        "head4":"DOLL", 
        
        "head5": "VEHICAL",
        "Head6": "GAME",
        "head7": "TOYS",
        "head8":"MY LITTLE PONY",
        "head9": " Useful links",
        "Head10": "SHOP BY AGE",
        "head11": " BRAND",
        "head12":"CONTACT US", 
        
        "head13": "Help",
        "Head14": "APTECT STAR GATE",
        "head15": "info@example.com",
        "head16":"+ 92 234 567 88",
        "head17": " + 92 234 567 89",
     
       

    },
];

for(var i=0; i < data.length; i++){
    document.getElementById("headjson").innerHTML +=`
  
    <div class="row mt-3">
    <!-- Grid column -->
    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      <!-- Content -->
      <h6 class="text-uppercase fw-bold mb-4">
        <i class="fas fa-gem me-3"></i> ${header[i].head1}
      </h6>
      <p>
      ${header[i].head2}
      </p>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      <!-- Links -->
      <h6 class="text-uppercase fw-bold mb-4">
      ${header[i].head3}
      </h6>
      <p>
        <a href="#!" class="text-reset">${header[i].head4}</a>
      </p>
      <p>
        <a href="#!" class="text-reset">${header[i].head5}</a>
      </p>
      <p>
        <a href="#!" class="text-reset">${header[i].head6}</a>
      </p>
      <p>
        <a href="#!" class="text-reset">${header[i].head7}</a>
      </p>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      <!-- Links -->
      <h6 class="text-uppercase fw-bold mb-4">
      ${header[i].head8}
      </h6>
      <p>
        <a href="#!" class="text-reset">${header[i].head9}</a>
      </p>
      <p>
        <a href="#!" class="text-reset">${header[i].head10}</a>
      </p>
      <p>
        <a href="#!" class="text-reset">${header[i].head11}</a>
      </p>
      <p>
        <a href="#!" class="text-reset">${header[i].head12}</a>
      </p>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      <!-- Links -->
      <h6 class="text-uppercase fw-bold mb-4">
      ${header[i].head13}
      </h6>
      <p><i class="fas fa-home me-3"></i> ${header[i].head14}</p>
      <p>
        <i class="fas fa-envelope me-3"></i>
        ${header[i].head15}
      </p>
      <p><i class="fas fa-phone me-3"></i> ${header[i].head16}</p>
      <p><i class="fas fa-print me-3"></i>${header[i].head17}</p>
    </div>
    <!-- Grid column -->
  </div>
        
    
    
    `;

    
}