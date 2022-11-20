
import { Container, Col, Row } from 'reactstrap'
import { ListOfTeachers } from './teacherSlice'
import React from 'react'
import Teacher from "./Teacher";

const TeacherList = () => {
    const listOfTeachers = ListOfTeachers()
    console.log("list of teachers -> ", listOfTeachers)
    return (
        <div className='row'>
            {
                listOfTeachers.map((teacher) => {
                    console.log("Teacher value -> ", teacher)
                    return (
                            <Col>
                                <Teacher teacher={teacher} />
                            </Col>
    
                    )
                })
            }

        </div>

    )



}

export default TeacherList