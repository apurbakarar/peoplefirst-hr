document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-out-cubic",
    offset: 50, // Trigger animation sooner on scroll
    disable: "phone", // Only disable on very small screens if necessary, or remove for better control
  });

  // Role Selection Logic
  document.addEventListener("click", (e) => {
    const roleButton = e.target.closest("[data-role]");
    if (roleButton) {
      const role = roleButton.getAttribute("data-role");
      const roleSelect = document.getElementById("role");
      if (roleSelect) {
        roleSelect.value = role;
      }
    }
  });

  // 1. Custom Cursor Glow
  const cursor = document.querySelector(".cursor-glow");
  if (cursor && !("ontouchstart" in window)) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  } else if (cursor) {
    cursor.style.display = "none";
  }

  // 2. Word Rotation Animation
  const rotatorWord = document.getElementById("rotator-word");
  const phrases = [
    "Technology",
    "Innovation",
    "Your Career",
    "Digital Growth",
    "The Future",
  ];
  let phraseIndex = 0;

  function rotateWords() {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    const nextWord = phrases[phraseIndex];

    rotatorWord.classList.add("exit");

    setTimeout(() => {
      rotatorWord.textContent = nextWord;
      rotatorWord.classList.remove("exit");
      rotatorWord.classList.add("enter");

      void rotatorWord.offsetWidth;

      rotatorWord.classList.remove("enter");
    }, 500);
  }

  setInterval(rotateWords, 3000);

  // 3. Statistics Counter
  const stats = document.querySelectorAll(".stat-number");
  const observerOptions = {
    threshold: 0.5,
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const stat = entry.target;
        const target = parseInt(stat.getAttribute("data-target"));
        let count = 0;
        const increment = target / 100;

        const updateCount = () => {
          if (count < target) {
            count += increment;
            stat.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
          } else {
            stat.innerText = target;
          }
        };
        updateCount();
        statsObserver.unobserve(stat);
      }
    });
  }, observerOptions);

  stats.forEach((stat) => statsObserver.observe(stat));

  // 4. Form Handling & Validation
  const appForm = document.getElementById("applicationForm");
  const submitBtn = document.getElementById("submitBtn");
  const btnText = submitBtn.querySelector(".btn-text");
  const btnSpinner = submitBtn.querySelector(".spinner-border");
  const toast = new bootstrap.Toast(document.getElementById("successToast"));

  appForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formError = document.getElementById("formError");

    // Reset error states
    formError.classList.add("d-none");
    formError.textContent = "";

    if (!appForm.checkValidity()) {
      e.stopPropagation();
      appForm.classList.add("was-validated");
      return;
    }

    // Show loading state
    btnText.classList.add("d-none");
    btnSpinner.classList.remove("d-none");
    submitBtn.disabled = true;

    // Store data temporarily in JS object
    const formData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      role: document.getElementById("role").value,
      experience: document.getElementById("experience").value,
      note: document.getElementById("note").value,
    };

    console.log("Application Data Received:", formData);

    // API Call to make.com
    try {
      const response = await fetch(
        "https://apurba-cc.app.n8n.cloud/webhook/3a65300a-49be-44a8-b4f5-a4e50a207f16",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("API Error");
      }

      btnText.classList.remove("d-none");
      btnSpinner.classList.add("d-none");
      submitBtn.disabled = false;

      toast.show();
      appForm.reset();
      appForm.classList.remove("was-validated");
    } catch (error) {
      console.error("Submission error:", error);

      // Show generic error on form instead of alert
      formError.textContent =
        "We encountered an issue while submitting your application. Please try again later.";
      formError.classList.remove("d-none");

      btnText.classList.remove("d-none");
      btnSpinner.classList.add("d-none");
      submitBtn.disabled = false;
    }
  });

  // 6. Navbar Active Highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});
