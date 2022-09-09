inputPrice.oninput = function func() {
  const num = parseInt(this.value);
  document.getElementById("result07").innerHTML = Math.round(num + (num * 0.7));
  document.getElementById("result06").innerHTML = Math.round(num + (num * 0.6));
  document.getElementById("result05").innerHTML = Math.round(num + (num * 0.5));
};

