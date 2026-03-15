// IA sin vueltas - Main JS

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal for Cards
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Console Greeting (Director Operativo Style)
    console.log("%c #IAsinVueltas %c System Initialized on HP Envy (2012)", 
        "color: #00f2ff; font-weight: bold; font-size: 1.2rem;", 
        "color: #94a3b8; font-size: 1rem;");
    
    console.log("%c Target: $7.150.000 COP for RTX 5080", "color: #ff8c00;");
});
