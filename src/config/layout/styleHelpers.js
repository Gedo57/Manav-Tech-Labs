export function boxStyle(box = {}) {
  const style = {};

  if (box.x !== undefined) style.left = `${box.x}px`;
  if (box.y !== undefined) style.top = `${box.y}px`;
  if (box.width !== undefined) style.width = `${box.width}px`;
  if (box.height !== undefined) style.height = `${box.height}px`;
  if (box.zIndex !== undefined) style.zIndex = box.zIndex;
  if (box.opacity !== undefined) style.opacity = box.opacity;
  if (box.rotate !== undefined) style.rotate = `${box.rotate}deg`;
  if (box.scale !== undefined) style.scale = box.scale;
  if (box.transform !== undefined) style.transform = box.transform;
  if (box.transformOrigin !== undefined) style.transformOrigin = box.transformOrigin;

  return style;
}

export function textStyle(text = {}) {
  const style = boxStyle(text);

  if (text.fontSize !== undefined) style.fontSize = `${text.fontSize}px`;
  if (text.lineHeight !== undefined) style.lineHeight = text.lineHeight;
  if (text.letterSpacing !== undefined) style.letterSpacing = typeof text.letterSpacing === 'number' ? `${text.letterSpacing}em` : text.letterSpacing;
  if (text.fontWeight !== undefined) style.fontWeight = text.fontWeight;
  if (text.textAlign !== undefined) style.textAlign = text.textAlign;
  if (text.maxWidth !== undefined) style.maxWidth = `${text.maxWidth}px`;

  return style;
}

export function cssVars(vars = {}) {
  return Object.entries(vars).reduce((style, [key, value]) => {
    style[`--${key}`] = typeof value === 'number' && !key.toLowerCase().includes('lineheight') ? `${value}px` : String(value);
    return style;
  }, {});
}
