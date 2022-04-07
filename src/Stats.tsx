import "./Stats.css";

export interface StatProps {
  nPlayed: number;
  nWon: number;
  counts: Array<number>;
}

export function defaultStats() {
  return {'nPlayed': 0, 'nWon': 0, 'dateLastPlayed': '20220402',
    'counts': [0, 0, 0, 0, 0, 0, 0]};
}

function getHistWidth(value: number, sum: number) {
  if (sum > 0) {
    return Math.round(200 * value/sum);
  } else {
    return 0;
  }
}

function makeHistogram(index: string, value: number, max: number) {
  return (<div className="graph-container">
          <div className="guess">{ index }</div>
          <div className="graph">
            <div className="graph-bar align-right" style={{ width: getHistWidth(value, max) }}>
              <div className="num-guesses">{value}</div>
            </div>
          </div>
        </div>);
}

export function Stats(stats: StatProps) {
  const maxCount = Math.max(...stats.counts);
  return (
    <div className="App-stats">
      <h2>STATISTICS</h2>
      <p>Played { stats.nPlayed } games, Won { stats.nPlayed ? Math.round(100*(stats.nWon / stats.nPlayed)): 0 }%</p>

      <div className="histograms">
        { makeHistogram('1', stats.counts[0], maxCount) }
        { makeHistogram('2', stats.counts[1], maxCount) }
        { makeHistogram('3', stats.counts[2], maxCount) }
        { makeHistogram('4', stats.counts[3], maxCount) }
        { makeHistogram('5', stats.counts[4], maxCount) }
        { makeHistogram('6', stats.counts[5], maxCount) }
        { makeHistogram('X', stats.counts[6], maxCount) }
      </div>
    </div>
  );
}
