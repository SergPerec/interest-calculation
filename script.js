inputPrice.oninput = function func() {
  const num = parseInt(this.value);
  const num07 = Math.round(num + (num * 0.7));
  const num06 = Math.round(num + (num * 0.6));
  const num05 = Math.round(num + (num * 0.5));
  document.getElementById("result07").innerHTML = Math.round(num07 /50) * 50;
  document.getElementById("result06").innerHTML = Math.round(num06 /50) * 50;
  document.getElementById("result05").innerHTML = Math.round(num05 /50) * 50;
};

