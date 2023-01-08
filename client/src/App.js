import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import LoginPage from './components/LoginPage/LoginPage';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Router basename="/">
            <Routes basename="/">
                <Route exact path="/signin" element={<LoginPage/>}/>
            </Routes>
        </Router>
        // <Container maxWidth="lg">
        //     <AppBar position="static" color="inherit">
        //         <Typography variant="h2" align="center">Memories</Typography>
        //     </AppBar>
        //     <Grow in>
        //         <Container>
        //             <Grid container justifyContent="space-between" align-items="stretch" spacing={3}>
        //                 <Grid item xs={12} sm={7}>
        //                     <Posts/>
        //                 </Grid>
        //                 <Grid item xs={12} sm={4}>
        //                     <Form/>
        //                 </Grid>
        //             </Grid>
        //         </Container>
        //     </Grow>
        // </Container>
    );
}

export default App;