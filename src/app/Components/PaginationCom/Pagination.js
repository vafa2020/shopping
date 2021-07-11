import React from "react";
import classes from './Pagination.module.scss'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/all";

export default function PaginationCom({dataPerPage, totalData, paginate}) {
    const pageNumber = []
    const calc =Math.ceil( totalData / dataPerPage)
    for (let j = 1; j <= calc; j++) {
        pageNumber.push(j)
    }

    return (
        <nav className={classes.PaginationCom}>
            <ul className={classes.Items}>
                <AiOutlineRight cursor={'pointer'} />
                {
                    pageNumber.map(number => {
                        return (
                            <li key={number} className={classes.Item}>
                                <a className={classes.Link} onClick={() => paginate(number)}>{number}</a>
                            </li>
                        )
                    })
                }
                <AiOutlineLeft cursor={'pointer'}/>
            </ul>
        </nav>
    )
}