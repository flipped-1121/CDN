 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/flipped-1121/BlogPictures/flipped-1121-PIC/36.ico");
         document.title = '(つェ⊂)我藏好了哦~';
         clearTimeout(titleTime);
     } 
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/flipped-1121/BlogPictures/flipped-1121-PIC/36.ico");
         document.title = '(*´∇｀*) 被你发现啦~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
