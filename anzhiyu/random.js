var posts=["2024/04/16/专属歌曲点我（下载-歌词提取）/","2024/04/17/关于本站的信息/","2024/04/16/新站开放通知/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };