import _ from "lodash"
import { Box, Button, Card, CardContent, CardHeader, Divider, Paper, TextField, Typography } from "@mui/material";
import { GameSpace, IdeaCategory } from "../../gql/graphql";
import { AddBoxOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import schemas from "../../schemas";
import IdeaCard from "./IdeaCard";

type TranslateCategory = {
    [Property in keyof typeof IdeaCategory]: string
}

const CATEGORY_TEXT: TranslateCategory = {
    Animation: "Animation",
    Design: "Design",
    Gameplay: "Gameplay",
    Music: "Music/Sound Effect",
    Story: "Story",
    Uiux: "UI / UX"
}

interface GameSpaceCardProps {
    gameSpace: GameSpace
}

function Category({gameSpace, categoryKey}: GameSpaceCardProps & {categoryKey: keyof typeof IdeaCategory}) {
    const [createNewIdea, { loading }] = useMutation(schemas.idea.createIdea);

    const [newIdeaText, setNewIdeaText] = useState("");

    const ideas = gameSpace.ideas?.filter((idea) => idea.category === IdeaCategory[categoryKey])

    const handleAddNewIdea = async () => {
        const result = await createNewIdea({
            variables: {
                data: {
                    category: IdeaCategory[categoryKey],
                    gameSpaceId: gameSpace.id,
                    title: newIdeaText
                }
            },
            refetchQueries: [
                schemas.creationSpace.creationSpace
            ]
        })

        if (result.errors || result.data?.createIdea.__typename !== "CreateIdeaSuccess") {
            return;
        }

        setNewIdeaText("");
    }

    return (
        <Box sx={{ paddingLeft: 0.5, paddingRight: 0.5 }}>
            <Typography variant="h5" color="secondary" textAlign={"center"}>{CATEGORY_TEXT[categoryKey]}</Typography>
            <Divider variant="middle" sx={{marginBottom: 1}} />
            {
                ideas?.map((idea) => <IdeaCard idea={idea} key={idea.id} />)
            }
            <Paper elevation={1}>
                <TextField disabled={loading} onKeyDown={(e) => { if (e.key === "Enter") handleAddNewIdea()}} size="small" value={newIdeaText} onChange={(event) => setNewIdeaText(event.target.value)} fullWidth InputProps={{
                    endAdornment: newIdeaText === "" ?
                            null :
                            <Button disabled={loading} onClick={handleAddNewIdea}><AddBoxOutlined/></Button>
                }} />
            </Paper>
            <Divider variant="middle" sx={{marginTop: 1}}  />
        </Box>
    )
}

function GameSpaceCard({gameSpace}: GameSpaceCardProps) {
    return (
        <Card sx={{ height: "100%" }}>
            <CardHeader title={gameSpace.theme?.theme} sx={{ height: 96, textAlign: "center" }} />
            <Divider />
            <CardContent sx={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0, height: 1, paddingBottom: 1, overflowY: "auto"}}>
                <Paper variant="outlined" sx={{ minHeight: "calc(100% - 8px)" }}>
                    {
                        Object.keys(IdeaCategory).map((categoryKey) => <Category key={categoryKey} gameSpace={gameSpace} categoryKey={categoryKey as keyof typeof IdeaCategory} />)
                    }
                </Paper>
            </CardContent>
        </Card>
    );
}

export default GameSpaceCard;