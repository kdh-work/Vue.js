var Links={ //객체
  SetColor:function(color){ //객체에 포함된 함수=메소드
    var alist=document.querySelectorAll('a');
  var i=0;
  while(i<alist.length) {
      console.log(alist[i]);
      alist[i].style.color=color;
      i=i+1;
    }
  }
}

var Body={
  SetColor:function(color){
    document.querySelector('body').style.color=color;
  },
  SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}


function nightDayHandler(self) {
  var target=document.querySelector('body');
  if(self.value==='night') {
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value='day';

    Links.SetColor('Yellow');
  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value='night';

    Links.SetColor('blue');
  }
}