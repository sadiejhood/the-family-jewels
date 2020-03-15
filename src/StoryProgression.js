import React, {useState} from 'react';
import story from './StoryProgression.data'
import { Typography, Button, Card, CardContent, CardActions, CardActionArea } from '@material-ui/core';

const StoryProgression = () => {
    const [currentLocation, setCurrentLocation] = useState("Introduction");
    const [currentStep, setCurrentStep] = useState("beginning");
    const [currentButtons, setCurrentButtons] = useState(story[currentLocation][currentStep].slice(1))
    
    const moveToNext = (option) => {
        if (story[currentLocation][currentStep][0] === "You can now move locations") {
            setCurrentLocation(story[currentLocation][currentStep][1]);
            setCurrentStep("beginning")
            setCurrentButtons(story[story[currentLocation][currentStep][1]]["beginning"].slice(1));
        } else {
            setCurrentStep(story[currentLocation][currentStep][option]);
            setCurrentButtons(story[currentLocation][story[currentLocation][currentStep][option]].slice(1));
        }
    };

    return (
        <Card>
            <CardActionArea disableRipple="true">
                {/* <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                    /> */}
                <CardContent>
                    <Typography variant="h6" style={{padding: '20%'}}>
                        { story[currentLocation][currentStep][0] }
                    </Typography>
                </CardContent>

                <div style={{ alignContent: 'center', paddingBottom: '2%'}}>
                    {
                        currentButtons.map((button, key) => {
                            return (
                                <Button style={{padding: '1%', marginLeft: '1%', marginRight: '1%'}} variant="contained" size="large" color="primary" onClick={() => {moveToNext(key + 1)}}>
                                    { button }
                                </Button>
                            );
                        })
                    }
                </div>
            </CardActionArea>
        </Card>
    );
};

export default StoryProgression;