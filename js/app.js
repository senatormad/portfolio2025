'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Opening or closing side bar
  const elementAddFunc = function (elem) { elem.classList.add("active"); }
  const elementRemoveFunc = function (elem) { elem.classList.remove("active"); }

  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  sidebarBtn.addEventListener("click", function() {
    if (sidebar.classList.contains("active")) {
      elementRemoveFunc(sidebar);
    } else {
      elementAddFunc(sidebar);
    }
  });

  // Activating Modal-testimonial
  const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
  const modalContainer = document.querySelector('[data-modal-container]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const overlay = document.querySelector('[data-overlay]');

  const modalImg = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalText = document.querySelector('[data-modal-text]');

  const testimonialsModalFunc = function () {
    if (modalContainer.classList.contains('active')) {
      elementRemoveFunc(modalContainer);
      elementRemoveFunc(overlay);
    } else {
      elementAddFunc(modalContainer);
      elementAddFunc(overlay);
    }
  }

  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
      // modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
      // modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
      modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
      modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

      testimonialsModalFunc();
    })
  }

  // Activating close button in modal-testimonial
  modalCloseBtn.addEventListener('click', testimonialsModalFunc);
  overlay.addEventListener('click', testimonialsModalFunc);

  // Activating Filter Select and filtering options
  const select = document.querySelector('[data-select]');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const selectValue = document.querySelector('[data-select-value]');
  const filterBtn = document.querySelectorAll('[data-filter-btn]');

  select.addEventListener('click', function () {
    if (select.classList.contains("active")) {
      elementRemoveFunc(select);
    } else {
      elementAddFunc(select);
    }
  });

  for(let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function() {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementRemoveFunc(select);
      filterFunc(selectedValue);
    });
  }

  const filterItems = document.querySelectorAll('[data-filter-item]');

  const filterFunc = function (selectedValue) {
    for(let i = 0; i < filterItems.length; i++) {
      if(selectedValue == "all") {
        elementAddFunc(filterItems[i]);
      } else if (selectedValue == filterItems[i].dataset.category) {
        elementAddFunc(filterItems[i]);
      } else {
        elementRemoveFunc(filterItems[i]);
      }
    }
  }

  // Enabling filter button for larger screens
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function() {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      elementRemoveFunc(lastClickedBtn);
      elementAddFunc(this);
      lastClickedBtn = this;
    })
  }

  // Enabling Contact Form
  const form = document.querySelector('[data-form]');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const formBtn = document.querySelector('[data-form-btn]');

  for(let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
      if(form.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    })
  }

  // Enabling Page Navigation
  const navigationLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  for(let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function() {
      for(let i = 0; i < pages.length; i++) {
        if(this.innerHTML.toLowerCase() == pages[i].dataset.page) {
          elementAddFunc(pages[i]);
          elementAddFunc(navigationLinks[i]);
          window.scrollTo(0, 0);
        } else {
          elementRemoveFunc(pages[i]);
          elementRemoveFunc(navigationLinks[i]);
        }
      }
    });
  }
});
