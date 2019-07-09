class Modal {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  constructor(toggleElement) {
    console.log("Modal.constructor toggleElement:", toggleElement); //
    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax
    this.toggleElement = toggleElement;
    this.data = this.toggleElement.dataset.toggle;
    console.log(this.data);
    this.modal = document.querySelector("#exampleModal");
    this.closeBtn = document.querySelector('.btn-secondary');

    this.toggleElement.addEventListener('click', this.open.bind(this));
    this.closeBtn.addEventListener('click', this.close.bind(this));
  }

  open() {
    this.modal.classList.toggle('show');
    this.modal.style.display = "block";
    this.modal.setAttribute("aria-modal", "true");
    this.modal.setAttribute("aria-hidden", "false");
  }

  close() {
    this.modal.setAttribute("aria-hidden", "true");
    this.modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modalToggles = document.querySelectorAll(`[data-toggle="modal"]`);

  modalToggles.forEach(button => new Modal(button));
});