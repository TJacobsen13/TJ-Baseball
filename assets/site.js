// Stripe payment links. Paste each link between the quotes.
// Until a link is added, that button goes to the video upload section instead.
var STRIPE_LINKS = {
  single:  "https://buy.stripe.com/fZueVd3AAe0dddO3DkdnW00",
  starter: "https://buy.stripe.com/4gM5kDc7609nflW2zgdnW01",
  pro:     "https://buy.stripe.com/dRm00j4EEaO11v6gq6dnW02",
  elite:   "https://buy.stripe.com/fZu28r5II6xL4HiehYdnW04"
};
document.querySelectorAll("[data-plan]").forEach(function (b) {
  var url = STRIPE_LINKS[b.getAttribute("data-plan")];
  if (url) { b.href = url; b.target = "_blank"; b.rel = "noopener"; }
});

var yr = document.getElementById("yr");
if (yr) yr.textContent = new Date().getFullYear();

// Mobile menu
var menuBtn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}
