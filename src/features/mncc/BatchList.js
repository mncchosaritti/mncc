import React from "react";
import { Col } from 'reactstrap';
import BatchCard from "./BatchCard";
import { ListOfBatch } from "./batchSlice";

const BatchList = () => {

    const completeBatchList = ListOfBatch()

    return (
        <Col>
            {
                completeBatchList.slice(0).reverse().map((batch) => {
                    return (
                        batch && (<BatchCard batch={batch} />)

                    );
                })
            }
        </Col>
    )
}

export default BatchList