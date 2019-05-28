import React  from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import Button from "../Actions/Button";
import "../css/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol sm="4" className="">
            <h1 className="h4-responsive font-weight-bold text-center title _pt4">Dronecloud SIG</h1>
            <hr/>
            <div>
              <Button
                name={["Load Geotiff", "Measurements", "Geolocation", 'Export', 'Geoprocessing', 'View']}
              />
            </div>
          </MDBCol>
          <MDBCol sm="8" className="_map-content">

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
