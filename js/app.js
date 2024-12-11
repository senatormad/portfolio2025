'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // Utility functions for toggling classes
  const addClass = (element, className = 'active') => element?.classList.add(className);
  const removeClass = (element, className = 'active') => element?.classList.remove(className);
  const toggleClass = (element, className = 'active') => element?.classList.toggle(className);

  // Sidebar toggle
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');

  sidebarBtn?.addEventListener('click', () => toggleClass(sidebar));

  // Modal testimonial
  const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
  const modalContainer = document.querySelector('[data-modal-container]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const overlay = document.querySelector('[data-overlay]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalText = document.querySelector('[data-modal-text]');

  const toggleModal = () => {
    toggleClass(modalContainer);
    toggleClass(overlay);
  };

  testimonialsItems.forEach(item => {
    item.addEventListener('click', () => {
      modalTitle.innerHTML = item.querySelector('[data-testimonials-title]').innerHTML;
      modalText.innerHTML = item.querySelector('[data-testimonials-text]').innerHTML;
      toggleModal();
    });
  });

  modalCloseBtn?.addEventListener('click', toggleModal);
  overlay?.addEventListener('click', toggleModal);

  // Filter Select and Filtering
  const select = document.querySelector('[data-select]');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const selectValue = document.querySelector('[data-select-value]');
  const filterItems = document.querySelectorAll('[data-filter-item]');
  const filterBtns = document.querySelectorAll('[data-filter-btn]');

  const filterFunc = selectedValue => {
    filterItems.forEach(item => {
      if (selectedValue === 'all' || selectedValue === item.dataset.category) {
        addClass(item);
      } else {
        removeClass(item);
      }
    });
  };

  select?.addEventListener('click', () => toggleClass(select));

  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      const selectedValue = item.innerText.toLowerCase();
      selectValue.innerText = item.innerText;
      removeClass(select);
      filterFunc(selectedValue);
    });
  });

  let lastClickedBtn = filterBtns[0];

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedValue = btn.innerText.toLowerCase();
      selectValue.innerText = btn.innerText;
      filterFunc(selectedValue);

      removeClass(lastClickedBtn);
      addClass(btn);
      lastClickedBtn = btn;
    });
  });

  // Form validation
  const form = document.querySelector('[data-form]');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const formBtn = document.querySelector('[data-form-btn]');

  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      formBtn.disabled = !form.checkValidity();
    });
  });

  // Page navigation
  const navigationLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  navigationLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      pages.forEach((page, pageIndex) => {
        if (index === pageIndex) {
          addClass(page);
          addClass(link);
          window.scrollTo(0, 0);
        } else {
          removeClass(page);
          removeClass(navigationLinks[pageIndex]);
        }
      });
    });
  });
});
