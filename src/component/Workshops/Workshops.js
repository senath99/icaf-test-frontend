import React, { Component } from 'react';
import { Col, Container, Row, Button, Modal, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import './Workshops.css'
import WorkshopDataService from './WorkshopDataService';

class Workshops extends Component {
    constructor(props){
        super(props);
        this.state = { loading: false }

        this.downloadProposalTemplateClicked = this.downloadProposalTemplateClicked.bind(this);
    }

    pushtoRegistration = () => {
        this.props.history.push('/conductorRegistration')
    }

    downloadProposalTemplateClicked() {
        this.setState({loading: true})
        WorkshopDataService.downloadproposal()
            .then(({ data }) => {
                this.setState({loading: false})
                const downloadUrl = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', 'icaf-workshop-proposal-template.docx');
                document.body.appendChild(link);
                link.click();
                link.remove();
                swal({
                    title: "Workshop Proposal Template Downloaded",
                    icon: "success",
                    button: "Ok",
                  })
            });
    }

    render() {
        return (
            <div>
                <div className="workshops-title">
                    CALL FOR WORKSHOPS
                </div>

                <Container className="workshops-container">
                    <div className="workshops-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit est, posuere non libero ac,
                        lobortis pharetra lorem. Donec volutpat mi eu tortor elementum, vitae placerat libero pulvinar.
                        Aliquam rhoncus lectus nec mauris sagittis semper. Maecenas justo leo, interdum vel viverra at,
                        efficitur a orci. Integer at placerat velit. Nunc vehicula tristique elit sed suscipit. Mauris varius
                        odio ut lacus interdum, ac mollis elit lobortis. Maecenas fermentum blandit odio nec interdum. Nunc
                        efficitur diam nulla, hendrerit egestas augue dapibus eu. Donec vitae iaculis neque. Proin fermentum
                        lectus purus, eget auctor mi gravida ut. Vivamus pellentesque est at ante tempor, sit amet sollicitudin
                        orci mollis.
                    </div>

                    <div className="workshops-topics">
                        <h4>Workshop Proposals</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit est, posuere non libero ac,
                            lobortis pharetra lorem. Donec volutpat mi eu tortor elementum, vitae placerat libero pulvinar.
                            Aliquam rhoncus lectus nec mauris sagittis semper. Maecenas justo leo, interdum vel viverra at,
                            efficitur a orci. Integer at placerat velit.
                        </p>
                    </div>

                    <div className="workshops-topics">
                        <h4>Important</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit est, posuere non libero ac,
                            lobortis pharetra lorem. Donec volutpat mi eu tortor elementum, vitae placerat libero pulvinar.
                            Aliquam rhoncus lectus nec mauris sagittis semper. Maecenas justo leo, interdum vel viverra at,
                            efficitur a orci. Integer at placerat velit.
                        </p>
                    </div>

                    <div className="workshops-topics" style={{textAlign: "center"}}>
                        <Button variant="dark" className="workshops-button" onClick={this.downloadProposalTemplateClicked} ><FontAwesomeIcon style={{ float: "right", marginTop: "3px" }} icon={faFileDownload} />&nbsp; Download Proposal Template</Button>
                        <Button variant="dark" className="workshops-button" onClick={this.pushtoRegistration}><FontAwesomeIcon style={{ float: "right", marginTop: "3px" }} icon={faFileUpload} />&nbsp; Submit Workshop Proposal</Button>
                    </div>

                    <div className="workshops-email">
                        <h5>Please address all questions to the ICAF 2021 Workshops Chair</h5>
                        <Row className="workshops-row">
                            <Col>
                                <h6>Prof. Myra Richards</h6>
                                <a style={{ textDecoration: "none" }} href="mailto:m.richards@gmail.com" >m.richards@gmail.com</a>
                            </Col>
                            <Col>
                                <h6>Dr. Steve Mclaughlin</h6>
                                <a style={{ textDecoration: "none" }} href="mailto:steve.m@gmail.com" >steve.m@gmail.com</a>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <Modal centered size="sm" show={this.state.loading} onHide={() => console.log('please wait...')}>
                    <Modal.Header>
                    <Modal.Title><Spinner animation="border" /> Downloading...</Modal.Title>
                    </Modal.Header>
                </Modal>
            </div>
        );
    }
}

export default Workshops;