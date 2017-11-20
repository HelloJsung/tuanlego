
    var bodySwiper = new Swiper('.body', {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        noSwiping:true
      });
    
    var mainSwiper = new Swiper('.main-swiper', {
        spaceBetween: 30,
        pagination: {
          el: '.main-pagination',
          clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          }
      });
      
    setTimeout(function(){
        var footSpan = document.querySelectorAll('.body-foot span');
        [{
          tips:'首页',
          class:  'icon-shouye'
        },{
            tips:'分类',
            class:'icon-fenlei'
        },{
            tips:'我的',
            class:'icon-wode'
        }].forEach(function(val,i){
            footSpan[i].innerText = val.tips;
            footSpan[i].classList.add('iconfont');
            footSpan[i].classList.add(val.class);
        })
    },0)