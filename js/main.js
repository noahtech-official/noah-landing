// NoahTech Landing Page JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-white', 'shadow-lg');
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate counters when they come into view
            const counters = entry.target.querySelectorAll('[data-counter]');
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.counter);
                animateCounter(counter, target);
            });
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    // Signup form
    const signupButtons = document.querySelectorAll('a[href="#signup"]');
    signupButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showSignupModal();
        });
    });
    
    // Demo button
    const demoButtons = document.querySelectorAll('a[href="#demo"]');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showDemoModal();
        });
    });
});

function showSignupModal() {
    // Create modal HTML
    const modalHTML = `
        <div id="signupModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold">🚀 Empezar Gratis</h2>
                    <button onclick="closeModal('signupModal')" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                
                <form id="signupForm" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nombre del Negocio</label>
                        <input type="text" required class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" required class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                        <input type="tel" required class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Plan</label>
                        <select required class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500">
                            <option value="">Seleccionar plan</option>
                            <option value="starter">Starter - $49/mes</option>
                            <option value="growth">Growth - $149/mes</option>
                            <option value="enterprise">Enterprise - $349/mes</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                        Crear Cuenta Gratis
                    </button>
                </form>
                
                <p class="text-xs text-gray-500 mt-4 text-center">
                    Al registrarte, aceptas nuestros términos y condiciones
                </p>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Handle form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would normally send data to your backend
        alert('¡Gracias! Te contactaremos pronto para configurar tu cuenta.');
        closeModal('signupModal');
    });
}

function showDemoModal() {
    const modalHTML = `
        <div id="demoModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold">📱 Demo en Vivo</h2>
                    <button onclick="closeModal('demoModal')" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                
                <div class="text-center">
                    <div class="bg-green-100 p-6 rounded-lg mb-6">
                        <h3 class="text-lg font-semibold mb-2">🤖 Prueba nuestro bot ahora</h3>
                        <p class="text-gray-600 mb-4">Envía un mensaje a nuestro WhatsApp demo y experimenta la magia de NoahTech</p>
                        <a href="https://wa.me/573214764419?text=Hola,%20quiero%20probar%20el%20demo%20de%20NoahTech" 
                           target="_blank"
                           class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition inline-flex items-center">
                            <i class="fab fa-whatsapp mr-2"></i>
                            Abrir WhatsApp Demo
                        </a>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                            <h4 class="font-semibold mb-2">✅ Qué puedes probar:</h4>
                            <ul class="text-left space-y-1">
                                <li>• Ver menú interactivo</li>
                                <li>• Hacer un pedido</li>
                                <li>• Probar pagos digitales</li>
                                <li>• Sistema de puntos</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold mb-2">🎯 Casos de uso:</h4>
                            <ul class="text-left space-y-1">
                                <li>• Restaurantes</li>
                                <li>• Tiendas de ropa</li>
                                <li>• Servicios</li>
                                <li>• E-commerce</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.remove();
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-in-out;
    }
`;
document.head.appendChild(style);