const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const credentials = {
    email: document.getElementById('loginEmail').value,
    password: document.getElementById('loginPassword').value,
  };

  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token); // حفظ التوكن
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // نقل المستخدم إلى لوحة التحكم
    } else {
      alert(data.error || 'Invalid login credentials');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Unable to login. Please try again later.');
  }
});