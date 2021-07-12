import React, {useContext, useState} from "react";
import classes from './Pagination.module.scss'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/all";
import {StateManagement} from "../../utils/StateManagment";

export default function PaginationCom({dataPerPage, totalData, paginate}) {
    const {stateManager, setStateManager} = useContext(StateManagement)
    const pageNumber = []
    const calc = Math.ceil(totalData / dataPerPage)
    for (let j = 1; j <= calc; j++) {
        pageNumber.push(j)
    }
    const setPagination = (number) => {
        setStateManager({
            ...stateManager,
            pagination: number
        })
    }
    return (
        <nav className={classes.PaginationCom}>
            <ul className={classes.Items}>
                <AiOutlineRight cursor={'pointer'} onClick={() => {
                    if (stateManager.pagination > 1) {
                        setStateManager({
                            ...stateManager,
                            pagination: --stateManager.pagination
                        })
                        paginate(stateManager.pagination)
                    }
                }}/>
                {
                    pageNumber.map(number => {
                        return (
                            <li key={number} className={classes.Item}>
                                <a className={classes.Link} onClick={() => {
                                    paginate(number)
                                    setPagination(number)
                                }}>{number}</a>
                            </li>
                        )
                    })
                }
                <AiOutlineLeft cursor={'pointer'} onClick={() => {
                    if (stateManager.pagination < pageNumber.length) {
                        setStateManager({
                            ...stateManager,
                            pagination: ++stateManager.pagination
                        })
                        paginate(stateManager.pagination)
                    }
                }}/>
            </ul>
        </nav>
    )
}
