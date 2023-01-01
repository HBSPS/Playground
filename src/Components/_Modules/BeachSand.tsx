import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../_Atoms/Button';

const SandCanvas = styled.canvas`
  background: transparent;
  position: absolute;
  bottom: 0;
  z-index: 5;
`;

interface Coordinate {
  x: number;
  y: number;
}

const BeachSand = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);
  const [isPainting, setIsPainting] = useState(false);

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) return;

    const Canvas: HTMLCanvasElement = canvasRef.current;
    return {
      x: event.pageX - Canvas.offsetLeft,
      y: event.pageY - Canvas.offsetTop,
    };
  };

  const drawLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
    if (!canvasRef.current) return;

    const Canvas: HTMLCanvasElement = canvasRef.current;
    const context = Canvas.getContext('2d');

    if (context) {
      context.strokeStyle = '#E2CDA7';
      context.lineJoin = 'round';
      context.lineWidth = 10;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);
    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const paint = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  // 모바일 부분
  const startTouch = useCallback((event: TouchEvent) => {
    event.preventDefault();

    if (!canvasRef.current) return;
    const canvas: HTMLCanvasElement = canvasRef.current;

    const touch = event.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });

    canvas.dispatchEvent(mouseEvent);
  }, []);

  const touch = useCallback((event: TouchEvent) => {
    event.preventDefault();

    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;

    const touch = event.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });

    canvas.dispatchEvent(mouseEvent);
  }, []);

  const exitTouch = useCallback((event: TouchEvent) => {
    event.preventDefault();

    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    const mouseEvent = new MouseEvent('mouseup', {});
    canvas.dispatchEvent(mouseEvent);
  }, [])

  // 캔버스 지우기
  const clearCanvas = () => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.getContext('2d')!!.clearRect(0, 0, canvas.width, canvas.height);
  };

  // 각 이벤트를 묶어주는 부분
  useEffect(() => {
    if (!canvasRef.current) return;

    const Canvas: HTMLCanvasElement = canvasRef.current;

    Canvas.addEventListener('mousedown', startPaint);
    Canvas.addEventListener('mousemove', paint);
    Canvas.addEventListener('mouseup', exitPaint);
    Canvas.addEventListener('mouseleave', exitPaint);

    Canvas.addEventListener('touchstart', startTouch);
    Canvas.addEventListener('touchmove', touch);
    Canvas.addEventListener('touchend', exitTouch);

    return () => {
      Canvas.removeEventListener('mousedown', startPaint);
      Canvas.removeEventListener('mousemove', paint);
      Canvas.removeEventListener('mouseup', exitPaint);
      Canvas.removeEventListener('mouseleave', exitPaint);

      Canvas.removeEventListener('touchstart', startTouch);
      Canvas.removeEventListener('touchmove', touch);
      Canvas.removeEventListener('touchend', exitTouch);
    };
  }, [startPaint, paint, exitPaint, startTouch, touch, exitTouch]);

  return (
    <div>
      <SandCanvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight * 0.4} />
      <Button.Sand onClick={clearCanvas}>Wave</Button.Sand>
    </div>
  );
};

export default BeachSand;
