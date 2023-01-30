import { useEffect, useReducer, useRef } from "react";
import { Container, Pagination } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Papa from "papaparse";
import { firstNPostiveNumbersAfterDecimal } from "src/utils/constants";
import LineOfDots from "./lineOfDots";

import "src/styles/livetrade.css";

const PAGE_HEIGHT = 10;

const initialState = {
  isDataLoading: false,
  tradesInfo: [],
  tradesInfoPerPage: [],
  totalPages: 0,
  currentPage: 0,
};
function LiveTradeTable() {
  const isInitialChunkLoaded = useRef(false);
  const [
    { tradesInfo, tradesInfoPerPage, totalPages, currentPage, isDataLoading },
    dispatch,
  ] = useReducer((state, payload) => ({ ...state, ...payload }), initialState);

  // pagination previous
  const onPrevious = () => {
    const newPage = currentPage - 1;

    if (newPage < 0) return;

    const pageTrades = tradesInfo.slice(
      newPage * PAGE_HEIGHT,
      newPage + PAGE_HEIGHT * 2
    );

    dispatch({
      tradesInfoPerPage: pageTrades,
      currentPage: newPage,
    });
  };

  // pagination next
  const onNext = () => {
    const newPage = currentPage + 1;

    if (newPage > totalPages) return;

    const pageTrades = tradesInfo.slice(
      newPage * PAGE_HEIGHT,
      newPage * (PAGE_HEIGHT * 2)
    );

    dispatch({
      tradesInfoPerPage: pageTrades,
      currentPage: newPage,
    });
  };

  const loadTradesInfo = () => {
    dispatch({ isDataLoading: true });

    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT11iCZjV8NvQUKPcmcwY723dvls8nJK29YTdGGIRvtlo2M-kR_-2ZiiOdJPIdjlAwZpKsfiKqA50-X/pub?output=csv",

      {
        download: true,
        header: true,

        chunk: (results) => {
          isInitialChunkLoaded.current = true;
          const payload = [...tradesInfo, ...results.data];

          const totalPages = Math.floor(payload.length / PAGE_HEIGHT);

          dispatch({ tradesInfo: payload, totalPages });
          dispatch({ isDataLoading: false });
        },

        error: (err) => {
          dispatch({ isDataLoading: false });
        },
      }
    );
  };

  const loadInitalData = () => {
    if (tradesInfoPerPage.length) return;

    const _tradesInfoPerPage = tradesInfo.slice(
      currentPage,
      (currentPage + 1) * PAGE_HEIGHT
    );

    dispatch({ tradesInfoPerPage: _tradesInfoPerPage });
  };
  useEffect(() => {
    !isInitialChunkLoaded.current && loadTradesInfo();

    loadInitalData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tradesInfo.length]);

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
            {tradesInfoPerPage.map((props, index) => (
              <TableRow {...props} key={index} />
            ))}
            {!isDataLoading && !tradesInfo.length && (
              <tr>
                <td colSpan="9" className="border-b-none">
                  <h5 className="text-center text-light mt-3">
                    No Trades found
                  </h5>
                </td>
              </tr>
            )}
            {isDataLoading && (
              <tr>
                <td colSpan="9" className="border-b-none">
                  <LineOfDots />
                </td>
              </tr>
            )}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="9" className="border-b-none text-center pb-0">
                <Pagination className="justify-content-center mt-5 mb-0">
                  <Pagination.First onClick={onPrevious} />
                  <Pagination.Item disabled>{currentPage + 1}</Pagination.Item>
                  <Pagination.Ellipsis disabled />
                  <Pagination.Item disabled>{totalPages + 1}</Pagination.Item>
                  <Pagination.Last onClick={onNext} />
                </Pagination>
              </td>
            </tr>
          </tfoot>
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
