import classes from './Login.module.scss'
import {LogoLogin} from "../../values/Files";
import {Constants} from "../../values/Constants";
import {Button, TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {useEffect, useState} from "react";
import {login} from "../../servics/user.servic";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory} from "react-router-dom";

export default function Login() {
    let history = useHistory()
    useEffect(()=>{
        if (Auth()){
            history.push('/product')
        }
    })

    const [field, setField] = useState({
        username: 'mor_2314',
        password: '83r5^_'
    })
    const applyLogin = async () => {

        const res = await login({
            username: field.username,
            password: field.password
        })
        console.log(res)
        if (res.data === "Error") {
            toast.error('ورود موفقیت آمیز نبود')

        } else {
            if (res.status === 200) {
                toast.success('ورود موفقیت آمیز بود', {
                    onClose: () => {
                        localStorage.setItem('token', res.data.token)
                        history.push(localStorage.getItem('lastPage'))
                    }
                })

            }
        }


    }
    const handlerFields = (e) => {
        const {name, value} = e.target
        setField({
            ...field,
            [name]: value
        })
    }
    const Auth = () => {
        const db = localStorage.getItem('token');
        return db
    }

    return (

        <div className={classes.Login}>
            <div className={'row'}>
                <div className={classes.Wrapper}>
                    <div className={'col-lg-6 col-md-6 col-xs-12'}>
                        <div className={classes.Body}>
                            <h2 className={classes.Title}>{Constants.MemberLogin}</h2>
                            <Box marginY={5} marginX={10}>
                                <form noValidate autoComplete="off">
                                    <Box>
                                        <TextField id="outlined-basic"
                                                   label={Constants.Username}
                                                   variant="outlined"
                                                   fullWidth
                                                   name='username'
                                                   onChange={(e) => {
                                                       handlerFields(e)
                                                   }}
                                                   value={field.username}
                                        />
                                    </Box>
                                    <Box marginY={2}>
                                        <TextField id="outlined-basic"
                                                   type={'password'}
                                                   label={Constants.Password}
                                                   variant="outlined"
                                                   fullWidth
                                                   name='password'
                                                   onChange={(e) => {
                                                       handlerFields(e)
                                                   }}
                                                   value={field.password}
                                        />
                                    </Box>
                                    <Box marginY={2}>
                                        <Button variant="contained" color="primary" fullWidth size={'large'}
                                                onClick={applyLogin}>
                                            {Constants.Login}
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </div>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-xs-12'}>
                        <div className={classes.BoxImage}>
                            <img className={classes.Image} src={LogoLogin} alt="LogoLogin"/>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer rtl={true}/>
        </div>

    )
}
