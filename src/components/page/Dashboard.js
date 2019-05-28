import React, {useState} from 'react'
import {MDBContainer, MDBCol, MDBRow} from 'mdbreact'
import '../css/dasboard.css'

export default function Dashboard() {
    return(
        <>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol sm="4" className="_pt4">
                        <h4 className="h4-responsive text-center">Dronecloud SIG</h4>
                    </MDBCol>
                    <MDBCol sm="8"></MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}