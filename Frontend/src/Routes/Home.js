import { Button,Stack ,Container} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
function Home(){
    const navigate = useNavigate();
    const onClickProblem=()=> navigate('/problems')
    const onClickmaker = () => navigate('/programpage')
    return(
        <Container sx={{margin:"auto"}} maxWidth={'md'}>
            <img
            src="/img/logo/MainLogo.png"
            style={{ width: '960px', height: '540px', textAlign: 'center'}}
            />
            <Stack spacing ={4} sx={{position:'fixed',bottom:120,left:'50%',transform:'translateX(-80%)'}}>
                <Button variant= "outlined" color="inherit" size="large" sx={{height:"100px",width:"160%",fontSize:"30px",backgroundColor:"white"}} onClick={onClickProblem}>問題を解く</Button>
                <Button variant= "outlined" color="inherit" size="large" sx={{height:"100px",width:"160%",fontSize:"30px" ,backgroundColor:"white"}} onClick={onClickmaker}>コード生成ツールを使う</Button>
            </Stack>
        </Container>
    );
}
   export default Home;