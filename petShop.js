function inicio() {
    document.getElementById('info_inicio').style.display = 'flex';
    document.getElementById('info_produtos').style.display = 'none';
    document.getElementById('doacoes').style.display = "none";
  }

  function produtos() {
    document.getElementById('info_inicio').style.display = 'none';
    document.getElementById('info_produtos').style.display = 'flex';
    document.getElementById('doacoes').style.display = "none";
  }

  function doacoes() {
    document.getElementById('info_inicio').style.display = 'none';
    document.getElementById('info_produtos').style.display = 'none';
    document.getElementById('doacoes').style.display = "flex";
  }
  function portifolio(){
    window.location = 'https://github.com/lenysss';
  }