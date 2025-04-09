        // Smooth Scroll para la Navbar
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const title = document.querySelector('.hero-content');
        const titleText = title.addeElement('h1');
        titleText.textContent = 'Bienvenido al mundo de las aguas frescas';

        title.appendChild(titleText);
        titleText.style.opacity = '0';
        