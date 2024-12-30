const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    accountName: document.getElementById('accountName').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  try {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Account created successfully!');
      window.location.href = 'login.html'; // نقل المستخدم إلى صفحة تسجيل الدخول
    } else {
      alert(data.error || 'Error creating account');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Unable to register. Please try again later.');
  }
});