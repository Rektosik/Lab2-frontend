import './StatsBar.css';

function StatsBar({
  clicks,
  totalClicks,
  currentSignal,
  orientation,
  onToggleOrientation,
}) {
  const orientationLabel =
    orientation === 'vertical' ? 'Вертикальна орієнтація' : 'Горизонтальна орієнтація';

  return (
    <div className="stats-bar">
      <ul className="stats-bar__list">
        <li>Червоний: {clicks.red}</li>
        <li>Жовтий: {clicks.yellow}</li>
        <li>Зелений: {clicks.green}</li>
      </ul>

      <p>
        Усього кліків: <strong>{totalClicks}</strong>
      </p>
      <p>
        Активний сигнал: <strong>{currentSignal}</strong>
      </p>
      <p>{orientationLabel}</p>

      <button type="button" className="stats-bar__toggle" onClick={onToggleOrientation}>
        Перемкнути орієнтацію
      </button>
    </div>
  );
}

export default StatsBar;