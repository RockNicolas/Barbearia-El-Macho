const openModalBtns = document.querySelectorAll('.open-modal');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});                             

function closeModalAndNavigate() {
    const modal = document.querySelector('#modal3');
    if (modal) {
        modal.style.display = 'none';
    }

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

closeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactSection = document.querySelector('.infos-section');
    const h2Element = contactSection.querySelector('h2');
    const pElement = contactSection.querySelector('p');
    const socialIcons = contactSection.querySelectorAll('.social-icon');
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add('show');
                h2Element.classList.add('show');
                pElement.classList.add('show');
            
                socialIcons.forEach(icon => {
                    icon.classList.add('show');
                });

                observer.unobserve(contactSection);
            }
        });
    };

    const observerOptions = {
        root: null,  
        threshold: 0.5 
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(contactSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const paymentSection = document.querySelector('.payment-methods');
    const h2Element = paymentSection.querySelector('h2');
    const pElement = paymentSection.querySelector('p');
    const paymentIcons = paymentSection.querySelectorAll('.payment-icon');
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                paymentSection.classList.add('show');
                h2Element.classList.add('show');
                pElement.classList.add('show');
                
                paymentIcons.forEach(icon => {
                    icon.classList.add('show');
                });

                observer.unobserve(paymentSection);
            }
        });
    };
    
    const observerOptions = {
        root: null, 
        threshold: 0.5 
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(paymentSection);
});

document.addEventListener("DOMContentLoaded", function () {
    const sobreElements = document.querySelectorAll('.sobre');
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observerOptions = {
      root: null,
      rootMargin: '0px', 
      threshold: 0.3
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sobreElements.forEach(sobreElement => {
    observer.observe(sobreElement);

    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 
});

const locationElement = document.querySelector('.location');
observer.observe(locationElement);

document.addEventListener("DOMContentLoaded", function () {
    const iconColumns = document.querySelectorAll('.icon-column');
    const options = {
        root: null,
        rootMargin: "0px", 
        threshold: 0.5 
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    iconColumns.forEach(column => {
        observer.observe(column);
    });
});
