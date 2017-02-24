/**
 * Created by Suraj on 02/21/2017.
 */

document.onkeydown = function(element){
    var audioTags = document.querySelectorAll("audio");
    //var keyTags = document.querySelectorAll("div");


    // borrowing methods from the Array prototype and send in our nodelist as a argument.
    Array.prototype.forEach.call(audioTags, function (audioTag) {
        if (audioTag.getAttribute("data-key") == element.keyCode) {
            audioTag.currentTime = 0;
            audioTag.play();
            //console.log(element.keyCode);
        }
    });
};