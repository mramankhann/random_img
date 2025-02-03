var btn = document.querySelector(".btn")

function random(){
   var randomImage = ["https://static.vecteezy.com/system/resources/thumbnails/024/346/446/small_2x/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png",
      "https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-clipart-of-young-boy-singing-song-png-image_12710000.png",
      "https://png.pngtree.com/png-vector/20241016/ourmid/pngtree-teenage-boy-character-looking-at-mobile-phone-clipart-png-image_13871859.png",
      "https://freepngimg.com/save/10955-cartoon-transparent/344x395",
      "https://pngimg.com/d/mickey_mouse_PNG64.png"
   ]
var randomX = Math.random()*100
var randomY = Math.random()*90
return [randomX, randomY,randomImage ];
}
random()

btn.addEventListener('click',()=>{
   var [randomX, randomY, randomImage] = random();
   var img =  document.createElement("img")

   document.body.appendChild(img);
   img.style.height = "100px"
   img.style.position = 'absolute';
   
   img.src = randomImage[Math.floor(Math.random() * randomImage.length)];
   img.style.left = randomX +'%';
   img.style.top = randomY +'%';
})