import { useEffect, useState } from 'react';
import './App.css';
// import song from '../mainland';

function App() {
  const [filter, setFilter] = useState('');
  const [song, setSong] = useState<any[]>([]);
  const songIds = Object.keys(song);
  const songData = Object.values(song);
  const filterData = songData.filter(
    (data) => filter && (data[0].includes(filter) || data[1].includes(filter))
  );
  useEffect(() => {
    (window as any).System.import(`/mainland.json`).then((module: any) => {
      const data = module.default.data;
      setSong(data);
    });
  }, []);
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
