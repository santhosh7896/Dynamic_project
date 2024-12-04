document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const formData = new FormData(this); // Collect form data including files
  
    try {
      // Send form data to the server
      const response = await fetch('/submit', {
        method: 'POST',
        body: formData,
      });
  
      // Handle server response
      const result = await response.json();
      if (result.success) {
        document.getElementById('response').textContent = result.message;
      } else {
        document.getElementById('response').textContent = 'Error submitting form.';
      }
    } catch (error) {
      document.getElementById('response').textContent = 'An error occurred.';
      console.error('Error:', error);
    }
  });
  