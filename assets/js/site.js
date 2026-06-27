/* Welcome Car Rental — JS d'interface uniquement (aucune logique métier).
   La réservation/connexion sont gérées par le JS propriétaire d'ITec. */
(function(){
  // En-tête : ombre au défilement
  var head = document.getElementById('head');
  var onScroll = function(){ head.classList.toggle('scrolled', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  // Menu mobile
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if(burger){ burger.addEventListener('click', function(){ nav.classList.toggle('open'); }); }
  nav && nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ nav.classList.remove('open'); });
  });

  // Sélecteur de langue (à relier à la page EN une fois livrée)
  document.querySelectorAll('[data-lang]').forEach(function(el){
    el.addEventListener('click', function(e){ e.preventDefault(); /* window.location = '/en/'; */ });
  });

  // Min. de la date de retour = date de prise en charge
  var pin = document.getElementById('pickup_date'), pout = document.getElementById('return_date');
  if(pin && pout){ pin.addEventListener('change', function(){ pout.min = pin.value; }); }
})();
