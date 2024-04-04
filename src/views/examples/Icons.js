/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Bar } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import Header from "components/Headers/Header.js";

const Icons = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col xl="12">
            <Card className="shadow">
              <CardHeader className="border-0 ">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Network Vulnerabilities  </h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Alerts</th>
                    <th scope="col">CWE_ID</th>
                    <th scope="col">Confidence</th>
                    <th scope="col">Wascid</th>
                    <th scope="col">Risk</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Missing Anti-clickjacking Header</th>
                    <td>1021</td>
                    <td>Medium</td>
                    <td>15</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <th scope="row">Charset Mismatch (Header Versus Meta Content-Type Charset)</th>
                    <td>436</td>
                    <td>Low</td>
                    <td>15</td>
                    <td>Informational</td>
                  </tr>
                  <tr>
                    <th scope="row">Content Security Policy (CSP) Header Not Set</th>
                    <td>693</td>
                    <td>High</td>
                    <td>15</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <th scope="row">Absence of Anti-CSRF Tokens</th>
                    <td>352</td>
                    <td>Low</td>
                    <td>9</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <th scope="row">Server Leaks Version Information via "Server" HTTP Response Header Field</th>
                    <td>200</td>
                    <td>High</td>
                    <td>13</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <th scope="row">X-Content-Type-Options Header Missing</th>
                    <td>693</td>
                    <td>Medium</td>
                    <td>15</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <th scope="row">Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s)</th>
                    <td>200</td>
                    <td>Low</td>
                    <td>13</td>
                    <td>Medium</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Icons;
