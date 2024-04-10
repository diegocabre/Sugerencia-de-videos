class Multimedia {
  constructor(url) {
    let _url = url;

    this.getURL = function () {
      return _url;
    };

    this.setInicio = function () {
      return "Este método es para realizar un cambio en la URL del video";
    };
  }
}

export default Multimedia;
