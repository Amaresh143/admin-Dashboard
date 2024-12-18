import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleincrement = () => {
    setCount(count + 1);
  };
  const handleDecrment = () => {
    setCount(count - 1);
  };
  const handlereset = () => {
    setCount(0);
  };
  return (
    <div className="content-wrapper">
      {/* <section className="content-header">
        <h1>
          Counter
          <small>Control panel</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <Link to="crud/simplecrud">
              <i className="fa fa-dashboard" /> Operation
            </Link>
          </li>
          <li className="active">Counter</li>
        </ol>
      </section> */}
      <section className="content">
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Counter</h3>
                </div>

                <div className="box-body">
                  <h1>{count}</h1>
                  <button onClick={handleincrement}>Next</button>
                  <button onClick={handleDecrment}>prev</button>
                  <button onClick={handlereset}>reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div>
    //   <h1>{count}</h1>
    //   <button onClick={handleincrement}>Next</button>
    //   <button onClick={handleDecrment}>prev</button>
    //   <button onClick={handlereset}>reset</button>
    // </div>
  );
};

export default Counter;
