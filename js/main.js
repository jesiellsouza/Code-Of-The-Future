var typed = new Typed(".auto-type", {
    strings: ["O Futuro Está Aqui!", "A melhor forma de prever o futuro é criá-lo!"],
    typeSpeed: 150,
    loop: true
});


let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio" +count).checked = true;
}