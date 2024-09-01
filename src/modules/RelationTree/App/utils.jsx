import { NODE_HEIGHT, NODE_WIDTH } from '../const';

export function getNodeStyle({ left, top })  {
  return {
    width: NODE_WIDTH,
    height: NODE_HEIGHT,
    transform: `translate(${left * (NODE_WIDTH / 2)}px, ${top * (NODE_HEIGHT / 2)}px)`,
  };
}
