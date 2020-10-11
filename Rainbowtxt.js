function random_keyframes(){
    var a='@keyframes Pshake_Crazy{',b='%{transform:translate(',c='px,',d='px) rotate(',e='deg);}', f='0%,100%{transform:translate(0,0) rotate(0);}}',g='',i=1, 
        jitter=30 /*抖动幅度 >=10*/ , level=1 /*抖动程度 1~99*/;
    function XYRrandom(){
        let _xyr_num=((~(Math.random()*jitter))+(~~(Math.random()*jitter)) )/10;
    return _xyr_num;}
    for (i; i<100; i+=level) {
        g=i+b+XYRrandom()+c+XYRrandom()+d+XYRrandom()+e;a=a+g;
    }
return a+f;}
