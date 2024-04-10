import Reproductor from "./reproductor.js";

const musicaReproductor = new Reproductor(
  "https://www.youtube.com/embed/mjKBjRevfq0",
  "musica"
);
const peliculasReproductor = new Reproductor(
  "https://www.youtube.com/embed/smUZqf27-Mw",
  "peliculas"
);
const seriesReproductor = new Reproductor(
  "https://www.youtube.com/embed/bzZ8s8ka_Eo",
  "series"
);

musicaReproductor.playMultimedia();
peliculasReproductor.playMultimedia();
seriesReproductor.playMultimedia();

musicaReproductor.setInicio(30);
peliculasReproductor.setInicio(10);
seriesReproductor.setInicio(20);

document.getElementById("musica").src = musicaReproductor.getURL();
document.getElementById("peliculas").src = peliculasReproductor.getURL();
document.getElementById("series").src = seriesReproductor.getURL();
