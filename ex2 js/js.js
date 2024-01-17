//we use this kind of function so tht it executes directly when we click on the refresh buttn in browser

(function(){
    "use strict";//pour declarer une erreur en cas ou j'oublie var
    let currentimg = 0;
    const myimgs=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    const container=document.getElementById('content');
    const nextbtn= document.getElementById('next');
    const prevbtn=document.getElementById('previous');

    nextbtn.addEventListener('click',function(event){
        event.preventDefault();//when we tape on a link we must prevent the browser from acting with links as it does in default

        currentimg++;
        if (currentimg> (myimgs.length-1)){
            currentimg=0;
        }
        swapimg();
    })

    prevbtn.addEventListener('click',function(event){
        event.preventDefault();//when we tape on a link we must prevent the browser from acting with links as it does in default

        currentimg--;
        if (currentimg<0){
            currentimg=myimgs.length-1;
        }
        swapimg();
    })

    function swapimg(){
        const newslide= document.createElement('img');
        newslide.src=`slides/${myimgs[currentimg]}`;
        newslide.className="fadeinimg";
        container.appendChild(newslide);
    
        //remove the extra imgs when the new ones come in
        if(container.children.length>2){
            container.removeChild(container.children[0]);
        }
    }
})();