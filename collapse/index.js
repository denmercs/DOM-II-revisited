class Collapse {
  // Implement your code inside this class
  // You may create additional Classes if you feel it improves readability & reuse.
  constructor(toggleElement) {
    console.log("Collapse.constructor toggleElement:", toggleElement); //
    // Hint: Get any needed data attributes from the `toggleElement`
    // Remember your "this." syntax
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const collapseToggles = document.querySelectorAll(`[data-toggle="collapse"]`);

  collapseToggles.forEach(button => new Collapse(button));
});
