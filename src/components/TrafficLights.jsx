import { useEffect, useState } from 'react';
import Light from './Light.jsx';
import StatsBar from './StatsBar.jsx';
import './TrafficLights.css';

const COLORS = ['red', 'yellow', 'green'];
const CYCLE = ['red', 'yellow', 'green', 'yellow'];
const MANUAL_PHASE = { red: 0, yellow: 1, green: 2 };
const PHASE_DURATION_MS = 2000;
const INITIAL_CLICKS = { red: 0, yellow: 0, green: 0 };

function TrafficLights({ initialOrientation = 'vertical' }) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [isAutomatic, setIsAutomatic] = useState(false);
  const [clicks, setClicks] = useState(INITIAL_CLICKS);
  const [orientation, setOrientation] = useState(initialOrientation);

  const currentSignal = CYCLE[phaseIndex];
  const totalClicks = clicks.red + clicks.yellow + clicks.green;

  useEffect(() => {
    if (!isAutomatic) {
      return;
    }

    const timerId = setInterval(() => {
      setPhaseIndex((previous) => (previous + 1) % CYCLE.length);
    }, PHASE_DURATION_MS);

    return () => clearInterval(timerId);
  }, [isAutomatic]);

  function handleSelect(color) {
    setPhaseIndex(MANUAL_PHASE[color]);
    setClicks((previous) => ({
      ...previous,
      [color]: previous[color] + 1,
    }));
  }

  function handleToggleOrientation() {
    setOrientation((previous) =>
      previous === 'vertical' ? 'horizontal' : 'vertical'
    );
  }

  return (
    <div className="traffic-widget">
      <div className={`traffic-lights traffic-lights--${orientation}`}>
        {COLORS.map((color) => (
          <Light
            key={color}
            color={color}
            active={color === currentSignal}
            disabled={isAutomatic}
            onSelect={handleSelect}
          />
        ))}
      </div>

      <StatsBar
        clicks={clicks}
        totalClicks={totalClicks}
        currentSignal={currentSignal}
        orientation={orientation}
        isAutomatic={isAutomatic}
        onToggleOrientation={handleToggleOrientation}
        onStart={() => setIsAutomatic(true)}
        onStop={() => setIsAutomatic(false)}
      />
    </div>
  );
}

export default TrafficLights;