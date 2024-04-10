import Multimedia from "./multimedia.js";

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;

    const mostrarVideo = function (url, id) {
      const iframe = document.getElementById(id);
      iframe.setAttribute("src", url);
    };

    this.playMultimedia = function () {
      mostrarVideo(this.getURL(), _id);
    };

    this.setInicio = function (tiempo) {
      const url = this.getURL() + `?start=${tiempo}`;
      mostrarVideo(url, _id);
    };
  }
}

export default Reproductor;
