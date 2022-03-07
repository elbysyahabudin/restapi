function searchDestination(){
    $('#destination-list').html('');
        $.ajax({
            url:'https://travel-advisor.p.rapidapi.com/locations/search',
            type:'get',
            dataType:'json',
            data: {
                'rapidapi-key': 'c27b5f6b88msh7b7b86e8abbefc2p124653jsn1cf71bf120cc',
                'query': $('.search-input').val()
            },

            success: function(result){

                for(let i=1; i<result.data.length; i++){               
               
                let response = result.data[0].is_top_result
                
                if(response==true){ 
             
                let getPhoto = result.data[i].result_object.photo.images.large.url
                let getName = result.data[i].result_object.name
                let getCategory = result.data[i].result_object.subcategory[0].name
                let getAddress = result.data[i].result_object.address
                let getRate = result.data[i].result_object.rating
                let getReview = result.data[i].result_object.num_reviews
                
                           
                let cards = `
                            <div class="card" >
                                <img class="image" src=${getPhoto}>
                                    <div>
                                        <h1 class="card-title">${getName}</h1>
                                        <h2 class="category">${getCategory}</h2>
                                        <h3 class="card-location">
                                            <i class="fa-solid fa-location-dot">
                                            </i>&nbsp;${getAddress}</h3>
                                            <h4 class="rates">
                                            <i class="fa-solid fa-star">
                                            </i>&nbsp;${getRate}</h4>
                                        <h5 class="reviews">${getReview} reviews</h5>    
                                    </div>
                                </img>
                            </div>`

                            $('#destination-list').append(cards);
                            $('.search-input').val('');
                            
                }
                else{
                    $('#destination-list').html(`
                                                <div class="col">
                                                <h1 class="text-center">NOT FOUND</h1>
                                                </div>`)
                }

               
            }
           
        }
    });
}  // End of searchDestination()


$('.search-input').on('keyup', function(enter){
     
    if(enter.which==13) {
        searchDestination();
    }
  
});

// =========================================================== SIDEBAR =====================================

let navButton = document.querySelector('#navigation-button');
let sidebar = document.querySelector('.sidebar');
let main =document.querySelector('.main')

navButton.onclick = function(){
    sidebar.classList.toggle('active');
    main.classList.toggle('active');
}
