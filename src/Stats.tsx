import "./Stats.css";

export interface StatProps {
  nPlayed: number;
  nWon: number;
  nLost: number;
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  n5: number;
  n6: number;
}

export function defaultStats() {
  return {'nPlayed': 0, 'nWon': 0, 'nLost': 0, 'n1': 0, 'n2': 0,
    'n3': 0, 'n4': 0, 'n5': 0, 'n6': 0, 'dateLastPlayed': '20220402'};
}

function getHistWidth(value: number, sum: number) {
  if (sum > 0) {
    return Math.round(100 * value/sum);
  } else {
    return 0;
  }
}

export function Stats(stats: StatProps) {
  return (
    <div className="App-stats">
      <h2>STATISTICS</h2>
      <p>Played { stats.nPlayed } games, Won { stats.nPlayed ? Math.round(100*(stats.nWon / stats.nPlayed)): 0 }%</p>
      <div className="histograms">
        <div className="graph-container">
          <div className="guess">1</div>
          <div className="graph">
            <div className="graph-bar align-right" style={{ width: getHistWidth(stats.n1, stats.nPlayed) }}>
              <div className="num-guesses">{stats.n1}</div>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="guess">2</div>
          <div className="graph">
            <div className="graph-bar align-right" style={{ width: getHistWidth(stats.n2, stats.nPlayed) }}>
              <div className="num-guesses">{stats.n2}</div>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="guess">3</div>
          <div className="graph">
            <div className="graph-bar align-right" style={{ width: getHistWidth(stats.n3, stats.nPlayed) }}>
              <div className="num-guesses">{stats.n3}</div>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="guess">4</div>
          <div className="graph">
            <div className="graph-bar align-right" style={{ width: getHistWidth(stats.n4, stats.nPlayed) }}>
              <div className="num-guesses">{stats.n4}</div>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="guess">5</div>
          <div className="graph">
            <div className="graph-bar align-right" style={{ width: getHistWidth(stats.n5, stats.nPlayed) }}>
              <div className="num-guesses">{stats.n5}</div>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="guess">6</div>
          <div className="graph">
            <div className="graph-bar align-right" style={{ width: getHistWidth(stats.n6, stats.nPlayed) }}>
              <div className="num-guesses">{stats.n6}</div>
            </div>
          </div>
        </div>
        <div className="graph-container">
          <div className="guess">X</div>
          <div className="graph">
            <div className="graph-bar align-right" style={{ width: getHistWidth(stats.nLost, stats.nPlayed) }}>
              <div className="num-guesses">{stats.nLost}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
