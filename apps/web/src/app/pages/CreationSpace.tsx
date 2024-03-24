import { useQuery } from "@apollo/client";
import { Box, Button } from "@mui/material";
import schemas from "../../schemas";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import GameSpaceCard from "../components/GameSpaceCard";
import { GameSpace } from "../../gql/graphql";


function CreationSpace() {

    const { creationSpaceId } = useParams();

    const { data, loading, error } = useQuery(schemas.creationSpace.creationSpace, {
        variables: {
            id: creationSpaceId || ""
        }
    });

    const navigate = useNavigate();

    return (
        <Box sx={{ width: "100%", marginTop: 8, gap: 1, paddingLeft: 1, paddingRight: 1, minHeight: "calc(100vh - 128px)" }} display={"flex"}>
            <Button sx={{ position: "fixed", top: 8, left: 8, width: 48, height: 48 }} onClick={() => navigate("/")}>
                <ArrowBack fontSize="large" />
            </Button>
            {
                data?.creationSpace.spaces?.map(space => (
                    <Box key={space.id} sx={{ flex: 1, minHeight: "100%" }}>
                        <GameSpaceCard gameSpace={space as GameSpace} />
                    </Box>
                ))
            }
        </Box>
    )
}

export default CreationSpace;