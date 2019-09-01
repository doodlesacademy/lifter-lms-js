window.setTimeout(() => {
  const body = document.getElementsByTagName('body')[0];
  const video = document.getElementsByTagName('video')[0];

  const makeVideoFullWidth = function makeVideoFullWidth() {
    const videoParent = video.parentElement;
    let videoParentClasses;
    if (videoParent) {
      videoParentClasses = videoParent.classList;
    }

    if (videoParentClasses && videoParentClasses.contains('heroVideo')) {
      video.style.marginLeft = '0';
      const videoWidth = video.clientWidth;
      const fullBodyWidth = body.scrollWidth;
      const leftMarginOffset = `${videoWidth - fullBodyWidth}px`;
      video.style.marginLeft = leftMarginOffset;
    }
  };

  makeVideoFullWidth();

  window.addEventListener('resize', makeVideoFullWidth);
});
