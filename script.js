//creates elements with unique ID and Class names used to update the 
//content from the API call. On movie title click the image and title will fade away
//to display the content of the movie overview. 

//TODO --> figure out why the p element at the bottom not hiding
//-------> separate the title from the image class

$(document).ready(()=> {
  $.ajax({url: "https://api.themoviedb.org/3/movie/now_playing?api_key=527e6b5189c6580e11e56817349e5a05&language=en-US&page=1", success: function(result){
      //for loop to change the id number to be associated with the array
      for(i = 0; i < 20;i++){
          //create header element to store movie title at array index
          var h1 = document.createElement('h1');
          h1.innerHTML = result.results[i].original_title;
          h1.className = "img" + i;
          h1.id = "overview" + i;
          $('#movie').append(h1);

          //create image to append, 
          var img = document.createElement('img');
          img.className = "img" + i;
          img.src = "https://www.themoviedb.org/t/p/w440_and_h660_face" + result.results[i].poster_path;
          $('#movie').append(img);

          //create text for overview to append, over into variable to use to toggle visibility
          var p = document.createElement('p');
          //hide element until ready to be shown
          $('p').hide();
          p.className = "overview" + i;
          p.id = "img" + i;
          p.innerHTML = result.results[i].original_title + "<br><br>" + result.results[i].overview;
          $('#movie').append(p); 

          //on single click hide the image, show the overview
          $(document).delegate('h1', 'click', function(event){
            var showOverview = event.target.id;
            var hideImage = event.target.className;
            //when title is click hide the classes(title, img), upon 
            //completion reveal the overview
            $('.' + hideImage).hide(2000, function(){
              $('.' + showOverview).show(1000);
            });
          })//clickToReveal
      }//for

      //outside of foor loop, on text click return image and title
      $(document).delegate('p', 'click', function(event){
        var show = event.target.id;
        var hide = event.target.className;
        //show classes(title, img) that were hidden, upon
        //completion, hide the overview 
        $('.' + show).show(2000,function(){
          $('.' + hide).hide(2000);
        });
      })//clickToReturn
        
}});//ajax

})//documentReady


  