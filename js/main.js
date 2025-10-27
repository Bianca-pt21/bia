// main.js — funcionalidades pequenas e úteis
document.addEventListener('DOMContentLoaded', ()=>{
// Atualiza o ano no rodapé
const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();


// Form fallback para abrir mailto
const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', e=>{
e.preventDefault();
const name = form.querySelector('input[name="name"]').value.trim();
const message = form.querySelector('textarea[name="message"]').value.trim();
const subject = encodeURIComponent(`Contato do portfólio - ${name || 'Visitante'}`);
const body = encodeURIComponent(message || '(sem mensagem)');
window.location.href = `mailto:biasantss902@gmail.com?subject=${subject}&body=${body}`;
