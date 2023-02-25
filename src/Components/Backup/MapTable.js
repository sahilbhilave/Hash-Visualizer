import './table.css'
let d1 = [0,0,0,0,0,0,0,0,0,0]; 


const data = [
{ a1: d1[0], a2: 0}, {a1: d1[1], a2: 1}, {a1: d1[2], a2: 2}, {a1: d1[3], a2: 3},
{ a1: d1[4], a2: 4}, {a1: d1[5], a2: 5}, {a1: d1[6], a2: 6}, {a1: d1[7], a2: 7},
{ a1: d1[8], a2: 8}, {a1: d1[9], a2: 9},
]


function Table() {
return (
  <>
  <div className="App">
    <table className="Table">
      
      {data.map((val, key) => {
        return (
          <tr key={key} >
            <td id={val.a1} tabindex="0">{val.a1}</td>
            <td id="index" tabindex="0">{val.a2}</td>
          </tr>
        )
      })}
    </table>
  </div>
 
  </>
);
}

export default Table;