document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('showMessage');
  const out = document.getElementById('message');
  btn.addEventListener('click', function(){
    out.textContent = '新しいブランチを作成して、変更を加え、プルリクを作成してみてください！';
  });
});
