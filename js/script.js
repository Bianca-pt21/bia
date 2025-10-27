// script.js — comportamento simples e útil
document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano no rodapé
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Form fallback: abre o mailto: com mensagem (sem backend)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input[name="name"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
      const subject = encodeURIComponent(`Contato do portfólio - ${name || 'Visitante'}`);
      const body = encodeURIComponent(message || '(sem mensagem)');
      window.location.href = `mailto:biasantss902@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
