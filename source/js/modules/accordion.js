const breakpoint = window.matchMedia('(min-width: 768px)');
const accordionParts = document.querySelectorAll('.footer__button-wrapper');

let isMobile;

const checkBreakpoint = () => {
  isMobile = !breakpoint.matches;

  accordionParts.forEach((el) => {
    el.setAttribute('tabindex', isMobile ? 0 : -1);
  });
};

const init = () => {
  if (!accordionParts.length) {
    return;
  }

  accordionParts.forEach((accordionPart) => {
    // Если не кнопка, по клавиатуре не работает
    accordionPart.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter') {
        accordionPart.click();
      }
    });

    accordionPart.addEventListener('click', (evt) => {
      if (!isMobile) {
        return;
      }

      accordionParts.forEach((accordionPart) => {
        if (
          accordionPart === evt.currentTarget &&
          accordionPart.dataset.accordionState === 'close'
        ) {
          accordionPart.dataset.accordionState = 'open';
          accordionPart.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          accordionPart.dataset.accordionState = 'close';
        }
      });
    });
  });

  breakpoint.addListener(checkBreakpoint);
  checkBreakpoint();
};

init();
