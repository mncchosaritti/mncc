import { Container, Row, Col } from 'reactstrap';
import React, { useState } from 'react';
import BatchList from '../features/mncc/BatchList';
import BatchDetail from '../features/mncc/BatchDetail'
import { SelectById } from '../features/mncc/batchSlice'


const BatchPage = () => {
    const [selectedBatch, selectedId] = useState(0);
    const selectedBatchById = SelectById(selectedBatch)

    return (
        <Container>
            <BatchList selectedId={selectedId} />
        </Container>
    )
}


export default BatchPage