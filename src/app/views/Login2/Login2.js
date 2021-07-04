import React from 'react';
import {useFormik} from 'formik';
import {Button} from "@material-ui/core";
import {GetCategory} from "../../servics/user.servic";

export default function Login2() {
    const getCategory = async () => {
        const res = await GetCategory()
        console.log(res)
    }
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <Button onClick={getCategory} variant={"contained"} color="primary">get category</Button>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <button type="submit">Submit</button>
            </form>
        </>

    )
}