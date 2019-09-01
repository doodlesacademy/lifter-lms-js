window.setTimeout(() => {
  const body = document.getElementsByTagName('body')[0];
  const heroVideoParentFigure = document.querySelector('.heroVideo');
  const doodlesHandWithText = document.createElement('img');
  doodlesHandWithText.src =
    'https://www.doodles-academy.org/assets/doodle_white-4e0d2d5f8411959adf32178ecd69c2782bf2f72949053b634d9cfa1edb1dd423.png';
  doodlesHandWithText.style.position = 'absolute';
  /**
   * These top & left values are placeholders and should not be static.
   */
  doodlesHandWithText.style.top = '250px';
  doodlesHandWithText.style.left = '250px';
  doodlesHandWithText.style.width = '350px';

  const makeVideoFullWidth = function makeVideoFullWidth(video: HTMLVideoElement) {
    video.style.marginLeft = '0';
    const videoWidth = video.clientWidth;
    const fullBodyWidth = body.scrollWidth;
    const leftMarginOffset = `${videoWidth - fullBodyWidth}px`;
    video.style.marginLeft = leftMarginOffset;
  };

  if (heroVideoParentFigure) {
    heroVideoParentFigure.appendChild(doodlesHandWithText);
    const video = heroVideoParentFigure.getElementsByTagName('video')[0];

    if (video) {
      makeVideoFullWidth(video);

      window.addEventListener('resize', () => {
        makeVideoFullWidth(video);
      });
    }
  }
});
