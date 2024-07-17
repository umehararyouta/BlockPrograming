import { Button,Stack ,Grid,Container} from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
function Home(){
    const navigate = useNavigate();
    const onClickProblem=()=> navigate('/problems')
    const onClickmaker = () => navigate('/programpage')
    return(
        <Container sx={{margin:"auto"}} maxWidth={'md'}>
            <Stack spacing ={4} sx={{position:'fixed',bottom:100,left:'50%',transform:'translateX(-80%)'}}>
                <Button variant= "contained" size="large" sx={{height:"100px",width:"160%",fontSize:"30px"}} onClick={onClickProblem}>問題を解く</Button>
                <Button variant= "contained" size="large" sx={{height:"100px",width:"160%",fontSize:"30px"}} onClick={onClickmaker}>コード生成ツールを使う</Button>
            </Stack>
        </Container>
    );
}
   export default Home;