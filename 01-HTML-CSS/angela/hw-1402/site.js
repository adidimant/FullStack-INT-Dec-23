function displayPopup() {
    setTimeout(function() {
      document.getElementById('popup').style.display = 'block';
    }, 7000); 
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  displayPopup();

