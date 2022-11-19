import React from "react";
import { ListOfBatch } from './batchSlice'
import { Col, Row } from 'reactstrap';
import BatchCard from "./BatchCard";

const BatchList = () => {
    const completeBatchList = ListOfBatch()
    return (
        <Row className="ms-auto">
            {
                completeBatchList.map((Batch) => {
                    return (
                        <Col md='5' className='m-4' key={Batch.id} >
                            <BatchCard batch={Batch} />
                        </Col>
                    );
                })
            }
        </Row>
    )
}

export default BatchList