const handleLogin = async (e) => {
    e.preventDefault();
  
    const email = document.querySelector("#login_email");
  
    const password = document.querySelector("#login_password");
  
    const emailPayload = {
      email: email.value,
      password: password.value,
    };

    try {
      
      const { status, data } = await axios.post(
        "https://ecommerce-dxp5.onrender.com/api/auth/login",
        emailPayload
      );
      email.value = "";
      password.value = "";
      if (status === 200) {
        localStorage.setItem("user", JSON.stringify(data.message));
        localStorage.setItem("first", JSON.stringify(true));

        setTimeout(() => {
          
          window.location.href = "http://127.0.0.1:5500/frontend/index.html";
        }, 2000);
         showToast("success", "logged in successfully");
      }
    } catch (error) {
      console.log(error);
      showToast("error", error?.response?.data?.message);
    }
  };
  
  document.querySelector("#loginForm").addEventListener("submit", handleLogin);