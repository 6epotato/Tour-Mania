import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Button } from "react-bootstrap";
import facebook from "../../../src/images/logo/facebook.png"
import instagram from "../../../src/images/logo/instagram.png"
import "./Footer.css"

const Footer = () => {
    return (
        <MDBFooter className="font-small pt-4 m-4 ">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Hey there !!!</h5>
                        <p>
                            If you want to join with me then book this plans and you want to know about me then go to the about section.
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Follow Me at</h5>
                        <ul>
                            <li className="list-unstyled my-4">
                                <Button className="btn btn-info" >
                                    <img className="px-2" style={{ width: "32px" }} src={facebook} alt="" />
                                    Facebook</Button>
                            </li>

                            <li className="list-unstyled">
                                <Button className="btn btn-info">
                                    <img className="px-2" style={{ width: "32px" }} src={instagram} alt="" />
                                    Instagram</Button>
                            </li>

                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Md.Arifur Rahman
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;