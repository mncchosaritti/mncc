
import { Container, Col } from 'reactstrap'
import { ListOfTeachers } from './teacherSlice'
import React from 'react'
import Teacher from "./Teacher";

const TeacherList = () => {
    const listOfTeachers = ListOfTeachers()
    console.log("list of teachers -> ", listOfTeachers)
    return (
        <Container className='row'>
            {
                listOfTeachers.map((teacher) => {
                    console.log("Teacher value -> ", teacher)
                    return (
                        <Col>
                            <Container>
                                <Teacher teacher={teacher} />
                            </Container>
                        </Col>
                    )
                })
            }

        </Container>

    )



}

export default TeacherList