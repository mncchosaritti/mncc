import React from 'react'
import { Container, Row } from 'reactstrap'
import TeacherList from '../features/teachers/TeachersList'

const TeachersPage = () => {
    return (
        <Container>
            <div className='batch-header'>
                <h2>ಶಿಕ್ಷಕರು</h2>
            </div>
            <Row>
                <TeacherList />
            </Row>
        </Container>
    )
}

export default TeachersPage
