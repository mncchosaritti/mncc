
import { Row } from 'reactstrap'
import { ListOfTeachers } from './teacherSlice'
import React from 'react'
import Teacher from "./Teacher";

const TeacherList = () => {
    const listOfTeachers = ListOfTeachers()
    return (
        <Row className='row'>
            {
                listOfTeachers.map((teacher) => {
                    return (
                        // <Col className="general-card" key={teacher.id}>
                        //     <Row>
                        <Teacher teacher={teacher} />
                        //     </Row>

                        // </Col>

                    )
                })
            }

        </Row>

    )



}

export default TeacherList