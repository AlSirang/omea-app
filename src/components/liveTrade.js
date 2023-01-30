import { useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Papa from "papaparse";
import { firstNPostiveNumbersAfterDecimal } from "src/utils/constants";

import "src/styles/livetrade.css";
import LineOfDots from "./lineOfDots";

const initialState = {
  isDataLoading: false,
  tradesInfo: [],
};
function LiveTradeTable() {
  const [{ tradesInfo, isDataLoading }, dispatch] = useReducer(
    (state, payload) => ({ ...state, ...payload }),
    initialState
  );
  useEffect(() => {
    dispatch({ isDataLoading: true });
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT11iCZjV8NvQUKPcmcwY723dvls8nJK29YTdGGIRvtlo2M-kR_-2ZiiOdJPIdjlAwZpKsfiKqA50-X/pub?output=csv",

      {
        download: true,
        header: true,
        complete: (results) => {
          dispatch({ tradesInfo: results.data });
          dispatch({ isDataLoading: false });
        },
        error: (err) => {
          dispatch({ isDataLoading: false });
        },
      }
    );
  }, []);

  return (
    <Container className="main-container d-md-block d-none">
      <h4 className="heading">Live trades</h4>
      <div className=" card-main-inner">
        <Table responsive className="table-main">
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
            {tradesInfo.map((props) => (
              <TableRow {...props} />
            ))}
            {!isDataLoading && !tradesInfo.length && (
              <tr>
                <td colspan="9" className="border-b-none">
                  <h5 className="text-center text-light mt-3">
                    No Trades found
                  </h5>
                </td>
              </tr>
            )}
            {isDataLoading && (
              <tr>
                <td colspan="9" className="border-b-none">
                  <LineOfDots />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default LiveTradeTable;

const TableRow = ({
  Amount,
  Date,
  Entry,
  Exit,
  Leverage,
  PNL,
  Pair,
  Position,
  Status,
}) => {
  return (
    <>
      <tr className="table-head">
        <td>{Date}</td>
        <td>{Pair}</td>
        <td>{firstNPostiveNumbersAfterDecimal(Amount)}</td>
        <td>
          <span className={`mb-0 table-btn status-${Status.toLowerCase()}`}>
            {Status.toLowerCase()}
          </span>
        </td>
        <td>{Position}</td>
        <td>{firstNPostiveNumbersAfterDecimal(Entry)}</td>
        <td>{firstNPostiveNumbersAfterDecimal(Exit)}</td>

        <td>{Leverage}</td>
        <td className={`${Status.toLowerCase()}-pnl`}>{PNL}</td>
      </tr>
    </>
  );
};
