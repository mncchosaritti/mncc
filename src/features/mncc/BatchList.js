import React from "react";
import { ListOfBatch } from './batchSlice'
import { Col, Row } from 'reactstrap';
import BatchCard from "./BatchCard";

const BatchList = () => {
    const completeBatchList = ListOfBatch()
    return (
        <Row className="ms-auto">
            {
                completeBatchList.map((batch) => {
                    return (
                        <Col md='5' className='m-4' key={batch.id} >
                            <BatchCard batch={batch} />
                        </Col>
                    );
                })
            }
        </Row>
    )
}

export default BatchList