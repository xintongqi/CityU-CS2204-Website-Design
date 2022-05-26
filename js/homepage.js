//random display
function number() {
    return Math.floor(Math.random() * 3);
}
let randnum;
randnum = number();

promotion = new Array(3);
promotion[0] = "Lunch Time Special Offer-$188 Sushi Set 12 pieces";
promotion[1] = "For Children-$88 Sushi Set 6 pieces";
promotion[2] = "BBQ Special-$288 for Your Family";

window.onload = pro;

function pro(){
    document.querySelector("#Promotion dt").innerHTML = "<h3>" + promotion[randnum] + "</h3>";
}

//continuous display
window.onload = rotate;
function rotate(){
    randnum++;
    if (randnum == promotion.length){
        randnum = 0;
    }
    document.querySelector("#Promotion dt").innerHTML = "<h3>" + promotion[randnum] + "</h3>";
    setTimeout("rotate()",3 * 1000);
}

//switch video
/*
for (let i = 0; i < 100; i++) {
    let n;    
    n = 0;

        function switchVideo(n) {
            document.getElementById("video").pause();
            switch(n){
                case 0 :
                    s = document.querySelectorAll("video source");
                    s[0].src = "http://courses.cs.cityu.edu.hk/cs2204/barbeque.mp4";
                    s[1].src = "http://courses.cs.cityu.edu.hk/cs2204/barbeque.ogg";
                    document.getElementById("video").load();
                    break;
                case 1 :
                    s = document.querySelectorAll("video source");
                    s[0].src = "http://courses.cs.cityu.edu.hk/cs2204/cakemaking-s.mp4";
                    s[1].src = "http://courses.cs.cityu.edu.hk/cs2204/cakemaking-s.ogg";
                    document.getElementById("video").load();
                    break;
            }
        }
    n = 1 - n;
}
*/

//switch videos
let videoSource = new Array();
videoSource[0] = "http://courses.cs.cityu.edu.hk/cs2204/barbecue.mp4";
videoSource[1] = "http://courses.cs.cityu.edu.hk/cs2204/barbecue.ogg";
videoSource[2] = "http://courses.cs.cityu.edu.hk/cs2204/cakemaking-s.mp4";
videoSource[3] = "http://courses.cs.cityu.edu.hk/cs2204/cakemaking-s.ogg";
let videoCount = videoSource.length;
let i = 0;
function videoPlay(videoNum) {
    document.querySelector("#myVideo").setAttribute("src",videoSource[videoNum]);
    document.querySelector("#myVideo").load();
    document.querySelector("#myVideo").play();
}
document.querySelector("#myVideo").addEventListener("ended",loopVideo,false);
videoPlay(0);
function loopVideo() {
    i++;
    if (i == (videoCount - 1)) {
        i = 0;
        videoPlay(i);
    }
    else {
        videoPlay(i);
    }
}
loopVideo();

//check validity and use library
function formCheck(){
   let dateLen;
   let timeLen;
   let numberLen;
   let date;
   let time;
   let no;
   dateLen = document.querySelector("#Date").value.length;
   timeLen = document.querySelector("#Time").value.length;
   numberLen = document.querySelector("#Number").value.length;
   dateSpaceLength = document.querySelector("#Date").value.trim().length;
   timeSpaceLength = document.querySelector("#Time").value.trim().length;
   numberSpaceLength = document.querySelector("#Number").value.trim().length;
   date = document.querySelector("#Date").value;
   time = document.querySelector("#Time").value;
   no = document.querySelector("#Number").value;
   if (dateLen < 1 || timeLen < 1 || numberLen < 1 || dateSpaceLength < 1 || timeSpaceLength == 0 || numberSpaceLength == 0) {
        document.querySelector("#notComp").innerHTML = "<p> Data not completed,please re-enter! </p>";
        return false;
   }
   else {
        let displayResult = reserve(date,time,no);
        if (displayResult == true) {
            document.querySelector("#notComp").innerHTML = "<p> Reservation Done. Thank You. </p>";
        }
        else {
            document.querySelector("#notComp").innerHTML = "<p> No Table Is Available for The Date and Time. </p>";
        }
        return false;
   }
}
