(function () {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const context = canvas.getContext("2d");
  let points = [];
  let animationFrame = 0;

  function resize() {
    const density = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * density);
    canvas.height = Math.floor(window.innerHeight * density);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(density, 0, 0, density, 0, 0);

    const count = Math.max(20, Math.min(62, Math.floor(window.innerWidth / 22)));
    points = Array.from({ length: count }, (_, index) => ({
      x: (window.innerWidth / (count - 1)) * index,
      y: window.innerHeight * (0.14 + Math.random() * 0.78),
      speed: 0.12 + Math.random() * 0.28,
      radius: 0.8 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(time) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.lineWidth = 1;

    points.forEach((point, index) => {
      point.y += Math.sin(time * 0.00035 + point.phase) * point.speed;
      point.x += Math.cos(time * 0.00022 + point.phase) * point.speed;

      if (point.x < -20) point.x = window.innerWidth + 20;
      if (point.x > window.innerWidth + 20) point.x = -20;

      for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
        const next = points[nextIndex];
        const distance = Math.hypot(point.x - next.x, point.y - next.y);
        if (distance < 155) {
          const alpha = 0.16 * (1 - distance / 155);
          context.strokeStyle = `rgba(24, 168, 199, ${alpha})`;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(next.x, next.y);
          context.stroke();
        }
      }

      context.fillStyle = index % 3 === 0
        ? "rgba(111, 76, 164, 0.28)"
        : index % 3 === 1
          ? "rgba(47, 118, 93, 0.24)"
          : "rgba(200, 95, 67, 0.22)";
      context.beginPath();
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fill();
    });

    animationFrame = window.requestAnimationFrame(draw);
  }

  function start() {
    window.cancelAnimationFrame(animationFrame);
    if (reducedMotion.matches) {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      return;
    }
    resize();
    animationFrame = window.requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize, { passive: true });
  reducedMotion.addEventListener("change", start);
  start();
})();
