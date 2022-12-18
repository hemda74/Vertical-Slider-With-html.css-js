const slidcon=document.querySelector('.slider-container');
const slidr=document.querySelector('.right-slide');
const slidl=document.querySelector('.left-slide');
const slidupb=document.querySelector('.up-button');
const sliddb=document.querySelector('.down-button');
const slidlength=slidr.querySelectorAll('div').length;
console.log(slidlength);
let activeslidindx=0
slidl.style.top=`-${(slidlength-1)*100}vh`
slidupb.addEventListener('click',()=>changeslide('up'))
sliddb.addEventListener('click',()=>changeslide('down'))
const changeslide=(dirction)=>{
    const sliderhight=slidcon.clientHeight
    if(dirction==='up'){
        activeslidindx++
        if(activeslidindx>slidlength-1){
            activeslidindx=0
        }
    }
    else if(dirction==='down'){
        activeslidindx--
        if(activeslidindx<0){
            activeslidindx= slidlength-1
        }
    }
    slidr.style.transform=`translateY(-${activeslidindx*sliderhight}px)`
    slidl.style.transform=`translateY(${activeslidindx*sliderhight}px)`

}
