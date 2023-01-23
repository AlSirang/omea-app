import Table from "react-bootstrap/Table";
import "src/styles/livetrade.css";
function LiveTradeTable() {
  return (
    <div className="main-container d-sm-none">
      <h4>Live trades</h4>
      <div className="card-main card-main-inner">
        <Table responsive="sm" className="table-main">
          <thead>
            <tr className="table-head">
              <th>Date</th>
              <th>Pair</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Position</th>
              <th>Entry</th>
              <th>Exit</th>
              <th>Leverage</th>
              <th>PnL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-head">
              <td>12/01/2023</td>
              <td>BNB/BUSD</td>
              <td>121212</td>
              <td>
                <button className="btn btn-primary  table-btn-yellow">
                  active
                </button>
              </td>
              <td>Long</td>
              <td>294.9852</td>
              <td>1212</td>
              <td>20x</td>
              <td>---</td>
            </tr>
            <tr className="table-head">
              <td>12/01/2023</td>
              <td>BNB/BUSD</td>
              <td>121212</td>
              <td>
                <button className="btn btn-secondary  table-btn-green">
                  Won
                </button>
              </td>
              <td>Long</td>
              <td>294.9852</td>
              <td>1212</td>
              <td>20x</td>
              <td className="end-td-green-data">26%</td>
            </tr>
            <tr className="table-head">
              <td>12/01/2023</td>
              <td>BNB/BUSD</td>
              <td>1212121</td>
              <td>
                <button className="btn btn-danger  table-btn-red">lost</button>
              </td>
              <td>Long</td>
              <td>294.9852</td>
              <td>12112</td>
              <td>20x</td>
              <td className="end-td-red-data">-3%</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default LiveTradeTable;
