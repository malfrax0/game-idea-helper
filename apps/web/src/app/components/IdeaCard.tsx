import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, Button, Grid, Paper, Popover, TextField, Typography } from "@mui/material";
import { Idea } from "../../gql/graphql";
import { Dangerous, DeleteForever, Edit, LowPriority } from "@mui/icons-material";
import { ChangeEventHandler, ReactEventHandler, useState } from "react";
import { useMutation } from "@apollo/client";
import schemas from "../../schemas";

interface IdeaCardProps {
    idea: Idea
}

function IdeaCard({idea}: IdeaCardProps) {
    const [deleteIdeaMutation, { loading: loadingDelete }] = useMutation(schemas.idea.deleteIdea);
    const [updateIdeaMutation, { loading: loadingUpdate }] = useMutation(schemas.idea.updateIdea);

    const [deleteAnchorEl, setDeleteAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editIdea, setEditIdea] = useState<Partial<Idea>|null>(null);

    const loading = loadingDelete;

    const handleDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDeleteAnchorEl(event.currentTarget);
    };

    const handleEditIdeaField = (key: keyof Idea): ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> => (event) => {
        const newIdea = {...editIdea, [key]: event.target.value }
        setEditIdea(newIdea);
    }

    const handleEditClick = () => {
        if (!editIdea) setEditIdea(idea);
        setEditMode(true);
    }

    const handleEditSave = async () => {
        setEditMode(false);

        await updateIdeaMutation({
            variables: {
                data: {
                    title: editIdea?.title,
                    content: editIdea?.content
                },
                id: idea.id
            },
            refetchQueries: [
                schemas.creationSpace.creationSpace
            ]
        })
    }

    const handleDeleteIdea = async () => {
        setDeleteAnchorEl(null);

        await deleteIdeaMutation({
            variables: {
                id: idea.id
            },
            refetchQueries: [
                schemas.creationSpace.creationSpace
            ]
        })
    }
    
    return (
        <Accordion disabled={loading} expanded={open || editMode} onChange={() => { if (!editMode) setOpen(!open) }}>
            <AccordionSummary>
                {
                    editMode ?
                    <TextField size="small" onChange={handleEditIdeaField("title")} value={editIdea?.title} /> :
                    idea.title
                }
            </AccordionSummary>
            <AccordionDetails>
                {
                    editMode ?
                    <TextField multiline minRows={3} onChange={handleEditIdeaField("content")} value={editIdea?.content} /> :
                    idea.content || (<Alert variant="outlined" severity="info">No description for this idea</Alert>)
                }
            </AccordionDetails>
            {
                editMode ?
                <AccordionActions>
                    <Button fullWidth disabled={loading} onClick={handleEditSave}>Save</Button>
                    <Button fullWidth disabled={loading} onClick={() => setEditMode(false)}>Cancel</Button>
                </AccordionActions> :
                <AccordionActions>
                    {/* <Button fullWidth disabled={loading}><LowPriority /></Button> */}
                    <Button fullWidth disabled={loading} onClick={handleEditClick}><Edit /></Button>
                    <Button fullWidth disabled={loading} onClick={handleDeleteClick}><DeleteForever color="error" /></Button>
                </AccordionActions>
            }
            <Popover open={deleteAnchorEl !== null} anchorEl={deleteAnchorEl}onClose={() => setDeleteAnchorEl(null)}>
                <Grid container sx={{margin: 1, width: 320}}>
                    <Grid item xs={12}>
                        <Typography>Are you sure you want to delete this idea?</Typography>
                    </Grid>
                    <Grid item xs={12} display={"flex"} justifyContent={"right"}>
                        <Button color="error" onClick={handleDeleteIdea}><Dangerous /> Yes</Button>
                    </Grid>
                </Grid>
            </Popover>
        </Accordion>
    );
}

export default IdeaCard;