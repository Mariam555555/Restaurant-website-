const word = document.getElementById("movingWord");
    let position = -200; 
    const speed = 2; 

    function moveWord() {
    position += speed;
    word.style.right = position + "px";
    if (position > window.innerWidth) {
        position = -word.offsetWidth;
    }

    requestAnimationFrame(moveWord); 
    }

    moveWord();         

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const message = document.getElementById("passwordMatchMessage");

    confirmPassword.addEventListener("input", function() {
        if (password.value !== confirmPassword.value) {
        message.textContent = " The passwords do not match."
    } else {
        message.textContent = "";
    }
    });


    function showToast(message, duration = 3000) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.style.display = "block";
    
        setTimeout(() => {
        toast.style.display = "none";
        }, duration);
    }


    const btn = document.getElementById("animatedBtn");

    btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
    });
    
    btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
    });