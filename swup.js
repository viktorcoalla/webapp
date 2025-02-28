import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup({
  containers: ["#allrecords"]
});
allrecords.hooks.on('visit:start', () => {
  console.log(window.location.href);
})
