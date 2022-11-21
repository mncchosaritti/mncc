import React from "react";
import { ListOfBatch } from './batchSlice'
import { Row } from 'reactstrap';
import BatchCard from "./BatchCard";

const BatchList = () => {
    const completeBatchList = ListOfBatch()
    return (
        <Row>
            {
                completeBatchList.slice(0).reverse().map((batch) => {
                    return (
                        <BatchCard batch={batch} />
                    );
                })
            }
        </Row>
    )
}

export default BatchList