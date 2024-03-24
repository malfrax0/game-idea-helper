import _ from "lodash"
import { Box, Button, Card, CardActions, CardContent, Divider, Skeleton, Typography } from "@mui/material"
import { CreationSpace } from "../../gql/graphql"
import { useNavigate } from "react-router-dom"

interface CreationSpaceCardProps {
    skeleton?: boolean,
    creationSpace?: CreationSpace
}

const CreationSpaceCard = (props: CreationSpaceCardProps) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ height: "100%"}}>
            <CardContent sx={{ height: "calc(100% - 48px)", position: "relative"}}>
                <Box sx={{ "backgroundColor": props.creationSpace?.color, width: "100%", height: 4, position: "absolute", top: 0, left: 0, right: 0 }}></Box>
                {
                    props.skeleton ? 
                    (<Skeleton height={200} variant="rounded" />) :
                    _.uniq(props.creationSpace?.spaces?.map(gameSpace => gameSpace.theme?.theme)).map(themeStr => (
                        <div key={themeStr}>
                            <Typography textAlign={"center"} variant="h5">{themeStr}</Typography>
                            <Divider />
                        </div>
                    ))
                }
            </CardContent>
            <CardActions>
                {
                    props.skeleton ? 
                    <Skeleton height={32} variant="rounded" sx={{ width: "100%" }} />
                    :
                    <Button onClick={() => navigate(`creation-space/${props.creationSpace?.id}`)} size="small" variant="outlined" fullWidth>Work on it!</Button>
                }
            </CardActions>
        </Card>
    )
}

export default CreationSpaceCard