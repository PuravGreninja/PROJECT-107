Webcam.set({
    width:350,
    height:300,
    Image_format:"png",
    png_quality:90
    });
    Webcam.attach('#camera');
    function Tsnap(){
        Webcam.snap(function(Data){
        console.log(Data);
        document.getElementById("result").innerHTML="<img id='CI' src='"+Data+"'>";
        });
        }
        console.log('ml5version',ml5.version);
        var Model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3zn3NffcJ/model.json",modelLoaded);
