import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import TeacherList from '../features/teachers/TeachersList'

const TeachersPage = () => {
    return (
        <Container>
            <Row>
                <div className='batch-header'>
                    <h5><b>ಶಿಕ್ಷಕರು</b></h5>
                </div>
            </Row>
            <Col>
                <TeacherList />
            </Col>
        </Container>
    )
}

export default TeachersPage
