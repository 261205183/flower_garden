document.querySelectorAll('.butterfly').forEach(function(el){
  el.addEventListener('mouseover',function(){
    el.style.left = (800 * Math.random() + 50) + 'px';
    el.style.top = (125 * Math.random() + 250) + 'px';
  });
});

document.querySelectorAll('.foo').forEach(function(el){
  el.addEventListener('click',function(){
    el.style.left = (250 * Math.random() + 375) + 'px';
    el.style.top = (75 * Math.random() + 225) + 'px';
  });
});