import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Alert, Box, Button, Checkbox, colors, Container, FormControl, Grid, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import schemas from "../../schemas";
import { useEffect, useState } from "react";
import { Add, ArrowBack, Circle, CircleTwoTone, Lock, LockOpen, RefreshOutlined } from "@mui/icons-material";
import { Theme } from "../../gql/graphql";
import { useNavigate } from "react-router-dom";

const COLORS = [
    "#FF5733", // Orange
    "#6A5ACD", // SlateBlue
    "#00FF00", // Lime
    "#FFD700", // Gold
    "#8A2BE2", // BlueViolet
    "#FF4500", // OrangeRed
    "#4169E1", // RoyalBlue
    "#FF1493", // DeepPink
    "#32CD32", // LimeGreen
    "#8B008B", // DarkMagenta
    "#7FFFD4", // Aquamarine
    "#9932CC", // DarkOrchid
    "#DC143C", // Crimson
    "#20B2AA", // LightSeaGreen
    "#B22222", // FireBrick
    "#FF8C00", // DarkOrange
    "#9400D3", // DarkViolet
    "#00CED1", // DarkTurquoise
    "#2E8B57", // SeaGreen
    "#8B4513"  // SaddleBrown
  ];

interface StatedTheme {
    locked: boolean,
    theme: Theme
} 

function CreationSpaceNew() {
    const [fetchRandomThemes, { loading: loadingThemes }] = useLazyQuery(schemas.theme.randomThemes, {
        fetchPolicy: "no-cache"
    });

    const [createNewCreationSpace, { loading: loadingCreationSpace }] = useMutation(schemas.creationSpace.createCreationSpace);

    const loading = loadingCreationSpace || loadingThemes

    const [themes, setThemes] = useState<StatedTheme[]>([]);
    const [colorSelected, setColorSelected] = useState(COLORS[0]);
    const [error, setError] = useState<string|null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (!themes.length && !error) {
            reloadTheme(5);
        }
    }, [])

    useEffect(() => {
        if (error) {
            setTimeout(() => setError(null), 5000);
        }
    }, [error])

    const reloadTheme = async (amount: number) => {
        const fetchedThemes = await fetchRandomThemes({ variables: { amount } });
        
        if (fetchedThemes.error) {
            setError(fetchedThemes.error.message);
            return;
        }

        const oldThemes = [...themes];
        let startSearchThemesId = 0;
        fetchedThemes.data?.randomThemes.forEach(theme => {
            if (startSearchThemesId < oldThemes.length) {
                let isSet = false;
                for (let i = startSearchThemesId; i < oldThemes.length; i++) {
                    if (!oldThemes[i].locked) {
                        oldThemes[i].theme = theme;
                        startSearchThemesId = i + 1;
                        isSet = true;
                        break;
                    }
                }
                if (isSet) return;
            }
            oldThemes.push({
                locked: false,
                theme
            })
            startSearchThemesId++;
        });

        setThemes(oldThemes);
    }

    const changeThemeLocked = (id: number) => () => {
        const oldThemes = [...themes];
        oldThemes[id].locked = !oldThemes[id].locked;
        setThemes(oldThemes);
    }

    const handleReloadTheme = () => {
        const numberToChange = themes.reduce((prev, theme) => {
            return prev + (theme.locked ? 0 : 1);
        }, 0);
        reloadTheme(numberToChange);
    }

    const create = async () => {
        const unionRet = await createNewCreationSpace({
            variables: {
                data: {
                    themeIds: themes.map((theme) => theme.theme.id),
                    color: colorSelected
                }
            }
        });

        if (unionRet.errors) {
            setError(unionRet.errors?.map((error) => error.message).join("\n"));
            return;
        }

        if (unionRet.data?.createCreationSpace.__typename !== "CreateCreationSpaceSuccess") {
            setError(unionRet.data?.createCreationSpace.message || "An error appenned");
            return;
        }

        navigate(`/creation-space/${unionRet.data?.createCreationSpace.creationSpace.id}`);
    }

    return (
        <Container sx={{ height: "100vh" }}>
            <Button sx={{ position: "fixed", top: 8, left: 8, width: 48, height: 48 }} onClick={() => navigate("/")}>
                <ArrowBack fontSize="large" />
            </Button>
            {
                error && <Alert severity="error">{error}</Alert>
            }
            <Box sx={{ height: "calc(100% - 186px)"}}>
                <Stack sx={{ height: "100%"}}>
                    {
                        themes.map((theme, index) => 
                            (<Box key={theme.theme.id} sx={{ height: `${100 / themes.length}%`}} display={"flex"} alignContent={"center"} alignItems={"center"}>
                                <Grid container>
                                    <Grid item md={10} sm={12} display="flex" alignItems={"center"}>
                                        <Typography noWrap variant="h3" color={theme.locked ? colorSelected : "GrayText"}>{theme.theme.theme}</Typography>
                                    </Grid>
                                    <Grid item md={2} sm={12} display="flex" justifyContent={"end"}>
                                        <Checkbox onChange={changeThemeLocked(index)} icon={<LockOpen sx={{fontSize: 48}} />} checkedIcon={<Lock htmlColor={colorSelected} sx={{fontSize: 48}} />} checked={theme.locked} sx={{ height: '100%'}} />
                                    </Grid>
                                </Grid>
                            </Box>)
                        )
                    }
                </Stack>
            </Box>
            <Box sx={{position: "fixed", bottom: 64, left: 0, right: 0 }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box sx={{marginBottom: 3, marginTop: 1}}>
                                <Button disabled={loading} size="large" fullWidth variant="outlined" onClick={handleReloadTheme}>Reload unlocked themes <RefreshOutlined/></Button>
                            </Box>
                        </Grid>
                        <Grid item md={10} sm={12}>
                            <FormControl>
                                <RadioGroup row value={colorSelected} onChange={(_, value) => setColorSelected(value)}>
                                    {
                                        COLORS.map((color) => (
                                            <Radio value={color} key={color} icon={<CircleTwoTone htmlColor={color} />} checkedIcon={<Circle htmlColor={color} />} />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item md={2} sm={12} display="flex" justifyContent={"end"}>
                            <Button onClick={create} disabled={loading} variant="contained">Create!</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Container>
    )
}

export default CreationSpaceNew;