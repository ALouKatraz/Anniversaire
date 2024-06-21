// Calcul du nombre de jours avant anniversaire
let date = new Date();
let date2 = new Date("june 15, 2024 00:00:00 UTC+1");

// différence des jours
if (date2 > date) {
  function jour_diff() {
    let time_dif = date2.getTime() - date.getTime();
    let days_diff = Math.ceil(time_dif / (1000 * 3600 * 24));
    return days_diff;
  }
  document.getElementById("jours").innerHTML =
    "Dans " + jour_diff() + " jours, le 15 juin Louise fête son anniversaire!";
} else {
  function jour_diff() {
    let time_dif = -(date2.getTime() - date.getTime());
    let days_diff = Math.ceil(time_dif / (1000 * 3600 * 24));
    return days_diff;
  }
  document.getElementById("jours").innerHTML =
    "Son anniversaire <b><U>était</b></U> il y a   " +
    jour_diff() +
    " jours ! Envoyez lui vite un cadeau ou des sous!";
}

// texte qui s'écrit seul
const typed = new Typed(".multiple-text", {
  strings: [
    "géniale",
    "motivée",
    "extraordinaire",
    "parfaite",
    "celle qui fait ce site",
    "époustouflante",
    "modeste",
    "magnifique",
    "charismatique",
    "toujours celle qui fait ce site",
    "lumineuse",
    "merveilleuse",
    "remarquable",
    "talentueuse",
    "encore celle qui fait ce site",
    "humble",
    "précieuse",
    "prodigieuse",
    "généreuse",
    "",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
