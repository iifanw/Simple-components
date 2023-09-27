const dClock = document.querySelector(".dClock");
const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const show = `<span>${h}</span> :
                <span>${m}</span> :
                <span>${s}</span>`;

  dClock.innerHTML = show;
};
setInterval(tick, 1000);
