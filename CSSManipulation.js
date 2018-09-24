function change()
{
    var backroundRed = document.getElementById("01").value;
    var backroundBlue = document.getElementById("02").value;
    var backroundGreen = document.getElementById("03").value;
    var borderColorRed = document.getElementById("04").value;
    var borderColorBlue = document.getElementById("05").value;
    var borderColorGreen = document.getElementById("06").value;
    var borderWidth = document.getElementById("07").value;
    
    var border = document.getElementById("border");
    var back = document.getElementById("back");
    

    document.getElementById("back").style.backgroundColor = "rgb(" + backroundRed + "," + backroundGreen + "," + backroundBlue + ")";
    document.getElementById("border").style.borderWidth = borderWidth;
    document.getElementById("border").style.borderColor = "rgb(" + borderColorRed + "," + borderColorGreen + "," + borderColorBlue + ")";
}