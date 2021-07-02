import React, { Component } from 'react';
import ProgramDataService from './ProgramDataService';
import { Col, Row, Modal, Spinner, Card, Button } from 'react-bootstrap';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            proposals: [],
            loading: false,
            workshop: {
                workshopId: '',
                title: '',
                date: '',
                venue: '',
            },
            search: ''
        }
        this.getWorkshop = this.getWorkshop.bind(this)
    }

    componentDidMount() {
        this.getWorkshop()
    }

    getWorkshop() {
        this.setState({ loading: true })
        let workshop = {
            publish: "published",
            status: "approved",
            edit: "true",

        }
        ProgramDataService.getWorkshop(workshop)
            .then((response) => {
                this.setState({ proposals: response.data })
            })
        this.setState({ loading: false })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => this.getWorkshop());

    };
    render() {
        const { proposals } = this.state

        const searchBox = {
            width: "250px",
            fontWeight: "bold",
            border: "none",
            borderColor: "#24a0ed"
        }
        //tes
        return (
            <div>
                {/* <div style={{ marginTop: '20px' }}>
                    <InputGroup size="xs">
                        <FontAwesomeIcon style={{ marginTop: "8px" }} icon={faSearch} />&nbsp; <FormControl onChange={this.handleChange} style={searchBox} autoComplete="off" placeholder="Search by title..." name="search" value={search} className="" />&nbsp;
                    </InputGroup>
                </div> */}
                <div className={"row mt-4 pt-5"} >
                    <Row data-testid="postlist">
                        {proposals.map((p) => (
                            <Col sm={3} className={"card-group mb-4"} key={p.workshopId}>
                                <Card style={{ width: '1200px', height: '300px' }}>
                                    <Card.Img variant="top" style={{ height: '50%' }} src={`https://icaf-2021-proposals.s3.amazonaws.com/${p.imageName}`}></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{p.title}</Card.Title>
                                        <Card.Text>
                                            {p.subject}
                                        </Card.Text>
                                        <Button variant="dark" onClick={() => this.props.history.push(`/workshops/${p.workshopId}`)}>Findout Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <Modal centered size="sm" show={this.state.loading} onHide={() => console.log('please wait...')}>
                    <Modal.Header>
                        <Modal.Title><Spinner animation="border" /> Please wait...</Modal.Title>
                    </Modal.Header>
                </Modal>
            </div>

        )
    }
}
export default PostList
