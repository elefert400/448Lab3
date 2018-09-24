function SlideShow(y)
{
    var theImage = document.getElementById("0");
    var images = ["Image1.jpg","Image2.jpg", "Image3.jpg", "Image4.jpg", "Image5.jpg"];
    //console.log(theImage.id);
    //console.log(theImage.src);
    var array = theImage.src.split("/")
    var ind = array.length - 1;
    var srcImage = array[ind];
    var w = images.indexOf(srcImage);
    console.log(array);
    console.log(array[ind]);
    //console.log (images.indexOf("Image1.jpg"));
    console.log (w);
    if(y == 1)
        {
            if(w != 4)
                {
                    theImage.src = images[w + 1];
                }
            else{
                theImage.src = images[0];
            }

        }
    if(y == -1)
        {
            if(w != 0 )
                {
                    theImage.src = images[w - 1];
                }
            else{
                theImage.src = images[4];
            }
        }
}