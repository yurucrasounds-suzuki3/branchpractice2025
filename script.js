document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('showMessage');
  const like = document.getElementById('likeButton');
  const out = document.getElementById('message');

  function showMessage(){
    out.innerHTML = '<strong>やってみよう！</strong> 新しいブランチを作って、かわいい変化を加えてみてね 💖';
    out.classList.add('show');
    // small pulse animation via JS
    out.animate([
      { transform: 'translateY(6px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ], { duration: 360, easing: 'cubic-bezier(.2,.9,.2,1)' });
  }

  btn.addEventListener('click', showMessage);

  if(like){
    like.addEventListener('click', function(){
      like.textContent = 'お気に入り済み ♥';
      like.disabled = true;
      like.style.opacity = 0.9;
    });
  }
});
