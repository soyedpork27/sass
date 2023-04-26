

const arr_btn = document.querySelectorAll('.tab_btn');

  for(let i of arr_btn){
    console.log(i);
  }


for(let i of arr_btn){
  let btn_height = i.clientHeight;
  i.children.style.lineHeight=btn_height;
}
