import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let points = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    const addPoint = (x, y) => {
      points.push({ x, y, age: 0 });
    };
    
    const updatePoints = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark ? '#ffffff' : '#000000';
      
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        point.age += 1;
        
        if (point.age > 50) {
          points.splice(i, 1);
          i--;
          continue;
        }
        
        const prevPoint = points[i - 1];
        
        if (prevPoint) {
          ctx.beginPath();
          ctx.lineWidth = Math.max(0, 8 - (point.age / 20));
          ctx.globalAlpha = Math.max(0, 1 - (point.age / 50));
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.stroke();

          ctx.shadowColor = isDark ? '#ffffff' : '#000000';
          ctx.shadowBlur = 20;
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
          ctx.lineWidth = Math.max(0, 6 - (point.age / 20));
          ctx.stroke();
          
          ctx.shadowBlur = 10;
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
          ctx.lineWidth = Math.max(0, 4 - (point.age / 20));
          ctx.stroke();
          
          ctx.shadowBlur = 0;
        }
      }
      
      requestAnimationFrame(updatePoints);
    };
    
    const handleMouseMove = (e) => {
      addPoint(e.clientX, e.clientY);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    updatePoints();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
};

export default CursorTrail; 