import { useState } from 'react';
import Light from './Light.jsx';
import StatsBar from './StatsBar.jsx';
import './TrafficLights.css';

const COLORS = ['red', 'yellow', 'green'];
const INITIAL_CLICKS = { red: 0, yellow: 0, green: 0 };

function TrafficLights({ initialOrientation = 'vertical' }) {
  const [currentSignal, setCurrentSignal] = useState('red');
  const [clicks, setClicks] = useState(INITIAL_CLICKS);
  const [orientation, setOrientation] = useState(initialOrientation);

  const totalClicks = clicks.red + clicks.yellow + clicks.green;

  function handleSelect(color) {
    setCurrentSignal(color);
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
            onSelect={handleSelect}
          />
        ))}
      </div>

      <StatsBar
        clicks={clicks}
        totalClicks={totalClicks}
        currentSignal={currentSignal}
        orientation={orientation}
        onToggleOrientation={handleToggleOrientation}
      />
    </div>
  );
}

export default TrafficLights;