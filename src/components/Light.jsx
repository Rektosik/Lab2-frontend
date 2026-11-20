import './TrafficLights.css';

function Light({ color, active, disabled, onSelect }) {
  return (
    <button
      type="button"
      className={`light light--${color}${active ? ' light--active' : ''}`}
      aria-label={color}
      aria-pressed={active}
      disabled={disabled}
      onClick={() => onSelect(color)}
    />
  );
}

export default Light;