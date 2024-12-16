document.addEventListener("click",function(e){var t=document.querySelector(".wall"),i=t.querySelector(".spider");if(e.target===t){var l=t.clientWidth-i.clientWidth,c=t.clientHeight-i.clientHeight,n=e.offsetX-i.clientWidth/2,r=e.offsetY-i.clientHeight/2;n<0&&(n=0),r<0&&(r=0),n>l&&(n=l),r>c&&(r=c),i.style.top=r+"px",i.style.left=n+"px"}});
//# sourceMappingURL=index.01c99191.js.map
