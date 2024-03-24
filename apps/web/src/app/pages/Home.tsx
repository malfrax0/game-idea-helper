import { useQuery } from "@apollo/client";
import { Alert, Button, Container, Grid, Paper } from "@mui/material"
import React from "react";
import { allCreationSpace } from "../../schemas/creationSpace";
import CreationSpaceCard from "../components/CreationSpaceCard";
import { CreationSpace } from "../../gql/graphql";
import { AddCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Home() {
    const { loading, error, data: dataCreationSpace } = useQuery(allCreationSpace);

    const navigate = useNavigate();

    const handleNewOne = () => {
        navigate("/creation-space/new")
    }

    return (
        <Container sx={{marginTop: 3}}>
            {
                error && (<Alert severity="error">{ error.message }</Alert>)
            }
            {
                !error &&
                <Grid container spacing={3} sx={{marginTop: 1}}>
                    <Grid item xs={3}>
                        <Paper elevation={1} sx={{ width: "100%", height: "100%", display: "flex"}}>
                            <Button sx={{ width: "100%", height: "100%" }} onClick={handleNewOne}>
                                <AddCircleOutline sx={{ fontSize: 150 }} />
                            </Button>
                        </Paper>
                    </Grid>
                    {
                        loading ?
                        [1, 2, 3].map((value) => (
                            <Grid item xs={3} key={value}>
                                <CreationSpaceCard skeleton={true}/>
                            </Grid>
                        )) : 
                        dataCreationSpace?.allCreationSpace.map((creationSpace) => (
                            <Grid item xs={3} key={creationSpace.id}>
                                <CreationSpaceCard skeleton={false} creationSpace={creationSpace as CreationSpace} />
                            </Grid>
                        ))
                    }
                </Grid>
            }
        </Container>
    )
}

export default Home;