/*==================================
=            Products             =
==================================*/

document.addEventListener('DOMContentLoaded', function(){
  let disableEl = document.querySelectorAll('.products .disabled'),
      defaultEl = document.querySelectorAll('.js-selected'),
      defaultBottomText = document.querySelector('.product__bottom-text').innerHTML,
      defaultTopText = document.querySelector('.product__top-text').innerHTML,
      hoverItem;

  // add text for the disabled element and delete href attribute
  disableEl.forEach(function (item, i, arr) {
    let descrText = item.querySelector('.product__subtitle').innerHTML,
        textElem = `Печалька, ${descrText} закончился.`;
    item.querySelector('.product').removeAttribute('href');
    item.querySelector('.product__bottom-text').textContent = textElem;
  });


  // add text for the selected element
  defaultEl.forEach(function (item, i, arr) {
    item.addEventListener( 'click', function (e) {
      e.preventDefault();
      if(this.classList.contains('disabled')) return false;

      let dataItem = this.dataset.item,
          bottomTextEl = this.querySelector('.product__bottom-text'),
          selectedText;

      if(+dataItem === 0){
        selectedText = 'Печень утки разварная с артишоками.'
      }else if(+dataItem === 1){
        selectedText = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
      }else{
        selectedText = 'Филе из цыплят с трюфелями в бульоне.'
      }

      this.classList.toggle('selected');

      if(this.classList.contains('selected')){
        bottomTextEl.textContent = selectedText;
        this.classList.add('hover');
      }else{
        bottomTextEl.innerHTML = defaultBottomText;
        this.classList.remove('hover');
        this.querySelector('.product__top-text').textContent = defaultTopText
      }

      hoverItem = this;
      item.addEventListener( 'mouseenter', function (e){
        if(e.target === hoverItem){
          this.classList.remove('hover');
        }
      });
    });

    item.addEventListener( 'mouseenter', function (e){
      if(this.classList.contains('selected')){
        this.querySelector('.selected .product__top-text').textContent = 'Котэ не одобряет?'
      }else{
        this.querySelector('.product__top-text').textContent = defaultTopText
      }

    });

    item.addEventListener( 'mouseleave', function (e){
      if(this.classList.contains('selected')){
        this.querySelector('.selected .product__top-text').textContent = defaultTopText
      }

    });

  });

});

