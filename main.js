https://teachablemachine.withgoogle.com/models/-PLixHZiL/

Webcam.set({
    width:350,
    height:300,
    dest_width:680,
    dest_height:480,
    image_format:png,
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snapshot(){
    webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="capture_image"src="'+data_uri+'"/> ';
    })
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/-PLixHZiL/',modelloaded);
function modelloaded(){
    console.log("model loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data1="The first prediction is "+prediction_1;
    speak_data2="And the second prediction is "+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterthis);
}
function check(){
    img=document.getElementById("capture_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_hand_gestuer").innerHTML=results[0].label;
        document.getElementById("result_hand_gestuer2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak();
        if (results[0].label=="victory"){
            document.getElementById("update_gesture").innerHTML="&#9996;";
        }
        else  if (results[0].label=="amazing"){
            document.getElementById("update_gesture").innerHTML="&#128076;";
        }
        else  if (results[0].label=="best"){
            document.getElementById("update_gesture").innerHTML="&#128077;";
        }
        else  if (results[0].label=="hifi"){
            document.getElementById("update_gesture").innerHTML="&#9995;";
        }
        else  if (results[0].label=="yo"){
            document.getElementById("update_gesture").innerHTML="&#129304;
        }

        if (results[1].label=="victory"){
            document.getElementById("update_gesture").innerHTML="&#9996;";
        }
        else  if (results[1].label=="amazing"){
            document.getElementById("update_gesture").innerHTML="&#128076;";
        }
        else  if (results[1].label=="best"){
            document.getElementById("update_gesture").innerHTML="&#128077;";
        }
        else  if (results[1].label=="hifi"){
            document.getElementById("update_gesture").innerHTML="&#9995;";
        }
        else  if (results[1].label=="yo"){
            document.getElementById("update_gesture").innerHTML="&#129304;";
        }
    }
}