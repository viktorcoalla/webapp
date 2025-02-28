import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup({
  containers: ["#swup"]
});
swup.hooks.on('visit:start', () => {
  console.log(window.location.href);
})


const swup2 = new Swup({
  containers: ["#allrecords"]
});
swup.hooks.on('visit:start', () => {
  console.log(window.location.href);
})
