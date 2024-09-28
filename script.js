const button = document.getElementById("btn");
console.log(button);
button.addEventListener("mouseleave", anonymous);
function anonymous() {
  const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const bodyBoundary = document.body.clientWidth;
        const eleRight = element.getBoundingClientRect().right;
        const curLeft = element.getBoundingClientRect().left;
        if (eleRight + amount >= bodyBoundary) {
          reject("Can't move further");
        } else {
          element.style.transform = `translateX(${curLeft + amount}px)`;
          resolve();
        }
      }, delay);
    });
  };
  async function animateRight(el) {
    try {
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
      await moveX(el, 100, 1000);
    } catch (err) {
      // el.style.left = 0;
      el.innerHTML = "Done";
      // console.log(err);
      alert(err);
    }
  }
  animateRight(button);
}
