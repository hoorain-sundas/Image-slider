var images = []
var i = 0;

// Images list
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';
images[4] = 'image5.jpg';

function slidernext(){
     document.img6.src = images[i];
     
     console.log(images[i])
     if(i < images.length - 1){
    i++;
     }else {
          i = 0;
     }   

}

function sliderback(){
     document.img6.src = images[i];
     if(i > 0){
    i--;
     }else {
          i = images.length - 1;
     }
}