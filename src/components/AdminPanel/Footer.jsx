import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        <b>Version</b> 2.0
      </div>
      <strong>
        Copyright © 2014-2015
        <Link href="http://almsaeedstudio.com">Almsaeed Studio</Link>.
      </strong>
      All rights reserved.
    </footer>
  );
};

export default Footer;
