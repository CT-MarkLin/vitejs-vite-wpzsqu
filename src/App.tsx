import { useState } from 'react';
import './App.css';
import song from '../mainland';

const songIds = Object.keys(song.data);
const songData = Object.values(song.data);

function App() {
  const [filter, setFilter] = useState('');
  const filterData = songData.filter(
    (data) => filter && (data[0].includes(filter) || data[1].includes(filter))
  );
  return (
    <div className="App">
      <input
        value={filter}
        onChange={(evt) => setFilter(evt.target?.value || '')}
      />
      结果：{filterData.length}
      <table>
        {filterData.map((data) => {
          const link = data[6];
          return (
            <tr key={data[3]}>
              <td>{data[0]}</td>
              <td>{data[1]}</td>
              <td>
                {link && (
                  <a target="_blank" href={link['HQ'] || link['PQ']}>
                    D
                  </a>
                )}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
