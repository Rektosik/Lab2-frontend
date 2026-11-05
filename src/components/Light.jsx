import './TrafficLights.css';

function Light({ color, active, onSelect }) {
  return (
    <button
      type="button"
      className={`light light--${color}${active ? ' light--active' : ''}`}
      aria-label={color}
      aria-pressed={active}
      onClick={() => onSelect(color)}
    />
  );
}

export default Light;