import React,{useState} from 'react';
import axios from 'axios';
import { Button, Card, FormControl, FormLabel, Grid, TextField, Typography } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';


function Signup(){
    const navigate = useNavigate()
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const onChangeusername =(event)=>{
        setUsername(event.target.value);
    }
    const onChangepassword =(event)=>{
        setPassword(event.target.value);
    }
    const onClickcreateaccount =async()=>{
        try{
            const response =  await axios.post('http://127.0.0.1:5000/signup',{username,password});
            navigate('/login');
        }catch(error){
            console.log(error);
        }
    }
    return(
        <Grid container spacing={0} alignItems='center' justifyContent='center' direction='column' sx={{minHeight:'100vh'}} >
            <Card variant='outlined' sx={{minWidth:300,padding:3}}>
            <Typography
            component='h1'
            variant='h4'
            sx={{padding:2}}
            >
                アカウント作成
            </Typography>
            <Grid item xs={3} sx={{padding:2}}>
                <FormControl>
                    <FormLabel htmlFor='username'>名前</FormLabel>
                    <TextField
                        onChange={onChangeusername}
                        autoFocus
                        required
                        variant='outlined'
                        id='username'
                        name='username'
                        placeholder='あなたの名前'
                        sx={{minWidth:250}}
                    />
                </FormControl>
            </Grid> 
            <Grid item xs={3} sx={{padding:2}}>
                <FormControl>
                    <FormLabel htmlFor='passward'>パスワード</FormLabel>
                    <TextField
                        onChange={onChangepassword}
                        type='password'
                        autoFocus
                        required
                        variant='outlined'
                        id='passward'
                        name='passward'
                        placeholder='あなたの名前'
                        sx={{minWidth:250}}
                    />
                </FormControl>
            </Grid>
            <Typography
            component={Link} to='/login'
            >
                アカウントをお持ちですか？
            </Typography>
            <Grid item spacing={3} sx={{padding:2}}>
                <Button
                fullWidth
                type='submit'
                variant='contained'
                onClick={onClickcreateaccount}
                >
                    アカウントを作成
                </Button>
            </Grid>
            </Card>
        </Grid>
    )
}
export default Signup