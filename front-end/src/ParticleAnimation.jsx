import React, { useEffect, useRef, useState } from "react";

const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const [ashParticles, setAshParticles] = useState([]);
  const [numParticles, setNumParticles] = useState(10000); // Fewer particles

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setNumParticles(Math.floor((canvas.width * canvas.height) / 10000)); // Lower density
      updateParticles();
    };

    class AshParticle {
      constructor(isInitial = false) {
        this.init(isInitial);
      }

      init(isInitial = false) {
        if (isInitial) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        } else {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + 10; // Start at the bottom
        }

        this.sizeX = Math.random() * 2 + 0.5;
        this.sizeY = Math.random() * 8 + 2;
        this.opacity = Math.random() * 0.6 + 0.1;

        // Slower movement and vertical direction
        this.speedX = Math.random() * 0.1 - 0.05; // Slight horizontal drift
        this.speedY = -(Math.random() * 0.5 + 0.2); // Very slow upward movement
        this.fadeSpeed = Math.random() * 0.0002 + 0.00005; // Very slow fading
        
        /* this.speedX = Math.random() * 0.3 - 0.15; // Slight horizontal drift
        this.speedY = -(Math.random() * 1 + 0.5); // Upward movement
        this.fadeSpeed = Math.random() * 0.0004 + 0.0001; // Slower fading */

        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
        this.rotationXSpeed = Math.random() * 0.03 - 0.015;
        this.rotationYSpeed = Math.random() * 0.03 - 0.015;
        this.rotationZSpeed = Math.random() * 0.03 - 0.015;

        this.scaleX = 1;
        this.scaleY = 1;
      }

      checkBounds() {
        if (this.y < -50 || this.opacity <= 0) {
          this.init();
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= this.fadeSpeed;

        this.rotationX += this.rotationXSpeed;
        this.rotationY += this.rotationYSpeed;
        this.rotationZ += this.rotationZSpeed;

        const cosRotationX = Math.cos(this.rotationX);
        const cosRotationY = Math.cos(this.rotationY);
        this.scaleY = 0.8 + 0.2 * cosRotationX;
        this.scaleX = 0.8 + 0.2 * cosRotationY;

        this.checkBounds();
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotationZ);
        ctx.scale(this.scaleX, this.scaleY);

        const rotationFactor = Math.cos(this.rotationZ);
        const red = 255 - Math.abs(rotationFactor) * 80;
        const green = 100 + Math.abs(rotationFactor) * 80;
        const blue = 50 + Math.abs(rotationFactor) * 30;

        ctx.beginPath();
        ctx.ellipse(0, 0, this.sizeX, this.sizeY, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${Math.floor(red)}, ${Math.floor(green)}, ${Math.floor(blue)}, ${this.opacity})`;
        ctx.fill();

        ctx.restore();
      }
    }

    const updateParticles = () => {
      const diff = numParticles - ashParticles.length;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          ashParticles.push(new AshParticle(true));
        }
      } else if (diff < 0) {
        ashParticles.length = numParticles;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of ashParticles) {
        particle.update();
        particle.draw();
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [numParticles, ashParticles]);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};

export default ParticleAnimation;
