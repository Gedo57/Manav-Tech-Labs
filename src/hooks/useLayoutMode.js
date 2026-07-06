import { useEffect, useMemo, useState } from 'react';
import { getDeviceType, getLayoutModeFromViewport, layoutConfig } from '../config/layoutConfig.js';

function readViewport() {
  if (typeof window === 'undefined') {
    return { width: 1920, height: 1080 };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

function getStageMetrics(mode, viewportWidth) {
  const config = layoutConfig[mode];
  const scale = Math.min(viewportWidth / config.baseWidth, config.maxScale ?? 1);
  const renderedWidth = config.baseWidth * scale;
  const offsetX = Math.max((viewportWidth - renderedWidth) / 2, 0);

  return {
    baseWidth: config.baseWidth,
    baseHeight: config.baseHeight,
    scale,
    renderedWidth,
    offsetX
  };
}

export function useLayoutMode() {
  const [viewport, setViewport] = useState(readViewport);

  useEffect(() => {
    const updateViewport = () => setViewport(readViewport());

    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  const layoutState = useMemo(() => {
    const mode = getLayoutModeFromViewport(viewport.width, viewport.height);
    const device = getDeviceType(viewport.width);
    const stage = getStageMetrics(mode, viewport.width);

    return {
      mode,
      device,
      width: viewport.width,
      height: viewport.height,
      isPortrait: mode === 'portrait',
      isLandscape: mode === 'landscape',
      stage
    };
  }, [viewport.width, viewport.height]);

  useEffect(() => {
    document.documentElement.dataset.layout = layoutState.mode;
    document.documentElement.dataset.device = layoutState.device;
    document.documentElement.style.setProperty('--viewport-width', `${layoutState.width}px`);
    document.documentElement.style.setProperty('--viewport-height', `${layoutState.height}px`);
    document.documentElement.style.setProperty('--layout-base-width', `${layoutState.stage.baseWidth}px`);
    document.documentElement.style.setProperty('--layout-base-height', `${layoutState.stage.baseHeight}px`);
    document.documentElement.style.setProperty('--stage-scale', String(layoutState.stage.scale));
    document.documentElement.style.setProperty('--stage-rendered-width', `${layoutState.stage.renderedWidth}px`);
    document.documentElement.style.setProperty('--stage-offset-x', `${layoutState.stage.offsetX}px`);
  }, [layoutState]);

  return layoutState;
}
