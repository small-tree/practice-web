function setupBanner(wraper, datas) {
  var bannerWraper = document.createElement('div');
  var dotWraper = document.createElement('div');
  initImgs(bannerWraper, datas);
  initDots(dotWraper, datas);


  function initDots(dotWraper, datas) {
    dotWraper.style.textAlign = 'center';
    dotWraper.style.width = '100%';



    for (var i = 0; i < datas.length; i++) {
      var a = datas[i];
      var span = document.createElement('span');
      span.style.width = '14px';
      span.style.height = '14px';
      span.style.margin = '0px 7px';
      span.style.display = 'inline-block';
      span.style.backgroundColor = 'rgb(242, 28, 28)';
      dotWraper.appendChild(span);
    }
    wraper.appendChild(dotWraper);
  }

  function initImgs(bannerWraper, datas) {
    bannerWraper.style.width = '100%';
    bannerWraper.style.height = '100%';
    bannerWraper.style.display = 'flex';

    for (var i = 0; i < datas.length; i++) {
      var item = datas[i];
      var img = document.createElement('img');
      img.src = item.imgurl;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.flexShrink = '0';
      img.style.backgroundSize = 'cover';
      bannerWraper.appendChild(img);
    }
  }

  wraper.appendChild(bannerWraper);
}
