import './StatsBar.css';

function StatsBar({
  clicks,
  totalClicks,
  currentSignal,
  orientation,
  isAutomatic,
  onToggleOrientation,
  onStart,
  onStop,
}) {
  const orientationLabel =
    orientation === 'vertical' ? 'Вертикальна орієнтація' : 'Горизонтальна орієнтація';
  const modeLabel = isAutomatic ? 'Автоматичний' : 'Ручний';

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
      <p>
        Режим: <strong>{modeLabel}</strong>
      </p>
      <p>{orientationLabel}</p>

      <div className="stats-bar__buttons">
        <button
          type="button"
          className="stats-bar__btn"
          onClick={onStart}
          disabled={isAutomatic}
        >
          Запустити
        </button>
        <button
          type="button"
          className="stats-bar__btn"
          onClick={onStop}
          disabled={!isAutomatic}
        >
          Зупинити
        </button>
        <button type="button" className="stats-bar__btn" onClick={onToggleOrientation}>
          Перемкнути орієнтацію
        </button>
      </div>
    </div>
  );
}

export default StatsBar;