// const accordionParts = document.querySelectorAll('.footer__button-wrapper');
// const acoordionContent = document.querySelectorAll('.footer__accordion-content');
// const breakpoint = window.matchMedia('(min-width:768px)');
// const accordionButtons = document.querySelectorAll('.footer__section-title');


// const hideAccordionContent = (action) => {
//   acoordionContent.forEach((el) => {
//     el.classList[action]('visually-hidden');
//   });
//   accordionButtons.forEach((el) => {
//     el.style.backgroundImage = 'url("./img/svg/plus.svg")';
//   });
// };

// const breakpointChecker = () => {
//   if (!breakpoint.matches) {
//     if (accordionParts) {
//       hideAccordionContent('add');
//       for (let i = 0; i < accordionParts.length; i++) {
//         accordionParts[i].addEventListener('click', (evt) => {
//           let content = evt.currentTarget.closest('section').querySelector('.footer__accordion-content');
//           let button = evt.currentTarget.closest('section').querySelector('.footer__section-title');
//           if (accordionParts[i].getAttribute('data-accordion-state') === 'close') {
//             hideAccordionContent('add');
//             content.classList.remove('visually-hidden');
//             accordionParts[i].setAttribute('data-accordion-state', 'open');
//             button.style.backgroundImage = 'url("./img/svg/minus.svg")';
//             content.scrollIntoView({
//               behavior: 'smooth',
//               block: 'start',
//             });
//           } else {
//             hideAccordionContent('add');
//             accordionParts[i].setAttribute('data-accordion-state', 'close');
//           }
//         });
//       }
//     }
//   } else {
//     hideAccordionContent('remove');
//     accordionButtons.forEach((el) => {
//       el.style.backgroundImage = 'none';
//     });
//   }
// };

// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

const accordionParts = document.querySelectorAll(".footer__button-wrapper");
const acoordionContent = document.querySelectorAll(
  ".footer__accordion-content"
);
const breakpoint = window.matchMedia("(min-width:768px)");
const accordionButtons = document.querySelectorAll(".footer__section-title");

const hideAccordionContent = (action) => {
  acoordionContent.forEach((el) => {
    el.classList[action]("visually-hidden");
  });
  accordionButtons.forEach((el) => {
    el.style.backgroundImage = 'url("./img/svg/plus.svg")';
  });
};

const onPartClick = (evt) => {
  let content = evt.currentTarget
    .closest("section")
    .querySelector(".footer__accordion-content");
  let button = evt.currentTarget
    .closest("section")
    .querySelector(".footer__section-title");
    for (let i = 0; i < accordionParts.length; i++) {

  if (accordionParts[i].getAttribute("data-accordion-state") === "close") {
    hideAccordionContent("add");
    content.classList.remove("visually-hidden");
    accordionParts[i].setAttribute("data-accordion-state", "open");
    button.style.backgroundImage = 'url("./img/svg/minus.svg")';
    content.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    hideAccordionContent("add");
    accordionParts[i].setAttribute("data-accordion-state", "close");
  }
}
};

const breakpointChecker = () => {
  if (!breakpoint.matches) {
    hideAccordionContent("add");
    accordionParts.forEach((el) => {
      el.addEventListener("click", onPartClick);
    });
  } else {
    hideAccordionContent("remove");
    accordionParts.forEach((el) => {
      el.removeEventListener("click", onPartClick);
    });
    accordionButtons.forEach((el) => {
      el.style.backgroundImage = "none";
    });
  }
};

const init = () => {
  if (!accordionParts) {
    return;
  }

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

init();
