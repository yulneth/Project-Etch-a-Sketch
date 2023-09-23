const container = document.querySelector('container');
const leftContainer = document.getElementById("left-container");
const rightContainer = document.getElementById("right-container");

    for(i=1;i<=((16*16)/2);i++){
        let div = document.createElement('div');
        div.classList.add('grid'); 
        leftContainer.appendChild(div);
    }
    for(i=1;i<=((16*16)/2);i++){
        let div = document.createElement('div');
        div.classList.add('grid'); ;
        rightContainer.appendChild(div);
    }
 
    function getRandomColor (){ //random color generator
        let letter ="123456789ABCDEF";
        let color ="#";
        for(let i = 1;i<=6;i++){
            color += letter[Math.floor(Math.random()*16)]

        }
        return color;
    }

    function setRandomColor (){
        $("colorpad").css("background-color", getRandomColor());
    }

   let gridField = document.querySelectorAll('.grid');

   for (let i = 0;i<gridField.length;i++) {
        //gridField[i].style.cssText = `background-color: ${getRandomColor()}`;
        gridField[i].addEventListener('mouseover', () =>{
        let letter ="123456789ABCDEF";
        let color ="#";
        for(let i = 1;i<=6;i++){
            color += letter[Math.floor(Math.random()*16)]

        }
        return gridField[i].style.cssText = `background-color: ${color}`;
        });
   }

   console.log(getRandomColor());
