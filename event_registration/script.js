function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const event = document.getElementById('event').value;
  
    if (!name || !email || !event) {
      alert('Please fill in all required fields.');
      return false;
    }
  
    return true;
  }
  