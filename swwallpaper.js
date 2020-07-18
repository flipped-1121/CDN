<footer id="colophon" class="site-footer" role="contentinfo">
  <div class="site-info">
    <div class="footertext">
      。。。。。
    </div>
    <div class="footer-device">
    <p style="font-family: 'Ubuntu', sans-serif;">
        <span style="color: #b9b9b9;">Theme <a href="https://github.com/honjun/hexo-theme-sakura" target="_blank" style="color: #b9b9b9;;text-decoration: underline dotted rgba(0, 0, 0, .1);">Sakura</a> <i class="iconfont icon-sakura rotating" style="color: #ffc0cb;display:inline-block"></i> by <a href="https://2heng.xin/" target="_blank" style="color: #b9b9b9;;text-decoration: underline dotted rgba(0, 0, 0, .1);">Mashiro</a>&<a href="https://www.hojun.cn/" target="_blank" style="color: #b9b9b9;;text-decoration: underline dotted rgba(0, 0, 0, .1);">Hojun</a>, Powered by Hexo, Hosted by Coding Pages</a>
        </span>
      </p>
    </div>
    <!-- <i class="fa fa-fire" aria-hidden="true"></i> -->
    <span style="color: #ccc;padding-left: 20px;">
      <i class="fa fa-clock-o" aria-hidden="true"></i>
      <span id="time" align="center">载入时间中...</span>
      <script>
        var now = new Date(); 
        function createtime() { 
          var grt= new Date("2020-02-11 17:20:00");//在此处修改你的建站时间
          now.setTime(now.getTime()+250); 
          days = (now - grt ) / 1000 / 60 / 60 / 24; dnum = Math.floor(days); 
          hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum); hnum = Math.floor(hours); 
          if(String(hnum).length ==1 ){hnum = "0" + hnum;} minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum); 
          mnum = Math.floor(minutes); if(String(mnum).length ==1 ){mnum = "0" + mnum;} 
          seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum); 
          snum = Math.round(seconds); if(String(snum).length ==1 ){snum = "0" + snum;} 
          document.getElementById("time").innerHTML = "小站已经苟活 "+ dnum +" 天 "+hnum + " 小时 " + mnum + " 分 " + snum + " 秒";      
       } 
       setInterval("createtime()",250);
      </script>
      <!--不蒜子网页计数器-->
      <span style="color:#ccc;padding-left: 20px;"><i class="fa fa-eye" aria-hidden="true"></i>访问量: <span id="busuanzi_value_site_pv"></span>次</span>
    </span>
  </div><!-- .site-info -->
  <!--壁纸切换-->
  <div class="skin-menu no-select" id="mainskin"  style="position: fixed">
      <div class="theme-controls row-container">
          <ul class="menu-list">
              <li id="white-bg"> <i class="fa fa-television" aria-hidden="true"></i></li>
              <li id="sakura-bg"> <i class="iconfont icon-sakura"></i></li>
              <li id="gribs-bg"> <i class="fa fa-slack" aria-hidden="true"></i></li>
              <li id="KAdots-bg"> <i class="iconfont icon-dots"></i></li>
              <li id="totem-bg"> <i class="fa fa-optin-monster" aria-hidden="true"></i></li>
              <li id="pixiv-bg"> <i class="iconfont icon-pixiv"></i></li>
              <li id="bing-bg"> <i class="iconfont icon-bing"></i></li>
              <li id="dark-bg"> <i class="fa fa-moon-o" aria-hidden="true"></i></li>
          </ul>
      </div>
      <div class="font-family-controls row-container">
          <button type="button" class="control-btn-serif selected" data-mode="serif" onclick="mashiro_global.font_control.change_font()">Serif</button>
          <button type="button" class="control-btn-sans-serif" data-mode="sans-serif" onclick="mashiro_global.font_control.change_font()">Sans Serif</button>
      </div>
  </div>   
  <canvas id="night-mode-cover"></canvas> 
    <div class="changeSkin-gear no-select">
      <div class="keys" id="setbtn"> <span id="open-skinMenu"> 切换壁纸 | SCHEME TOOL 
        &nbsp;<i class="iconfont icon-gear inline-block rotating"></i> </span></div>
  </div><!--skin.end-->
</footer>
