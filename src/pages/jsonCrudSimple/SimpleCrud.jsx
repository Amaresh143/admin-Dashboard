import { Link } from "react-router-dom";
const SimpleCrud = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}

      <section className="content-header">
        <h1>
          CRUD
          <small>Control panel</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <Link to="crud/simplecrud">
              <i className="fa fa-dashboard" /> Operation
            </Link>
          </li>
          <li className="active">Crud</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Bordered Table</h3>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th style={{ width: 10 }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: 40 }}>Label</th>
                      </tr>
                      <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar progress-bar-danger"
                              style={{ width: "55%" }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-red">55%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar progress-bar-yellow"
                              style={{ width: "70%" }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-yellow">70%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div
                              className="progress-bar progress-bar-primary"
                              style={{ width: "30%" }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-light-blue">30%</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                          <div className="progress progress-xs progress-striped active">
                            <div
                              className="progress-bar progress-bar-success"
                              style={{ width: "90%" }}
                            />
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-green">90%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.box-body */}
                <div className="box-footer clearfix">
                  <ul className="pagination pagination-sm no-margin pull-right">
                    <li>
                      <a href="#">«</a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">»</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.box */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleCrud;
