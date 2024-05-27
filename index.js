      const canvas = document.getElementById('photo');
      const ctx = canvas.getContext('2d');
      const w = canvas.width = document.body.offsetWidth;
      const h = canvas.height = document.body.offsetHeight;
      const cols = Math.floor(w / 20) + 1;
      const ypos = Array(cols).fill(0);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
      
      var foto = new Image();
      foto.src = 'photo.png';
      foto.onload = function () {
        setInterval(draw, 50); // Iniciar el bucle de dibujo
      }
      
      function draw() {

      
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';
      
        ypos.forEach((y, ind) => {
          const text = String.fromCharCode(Math.random() * 128);
          const x = ind * 20;
          if (y < h) {
            ctx.fillText(text, x, y);
          }
          if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
          else ypos[ind] = y + 20;
        });
        ctx.drawImage(foto, -40, 0, w, h);
      }

      
