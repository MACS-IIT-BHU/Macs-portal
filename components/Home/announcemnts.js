'use client'
import React from "react"
import { useState } from 'react';
import { Timeline, TimelineItem } from "@mui/lab";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import data from '../../public/database.json'
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';

const Announcements = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [jsonData, setJsonData] = useState(data);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

    return (
        <div>
        {jsonData.announcements.map((element) => (
            <div className="news-preview" key={element.id}>
           {(element.id%2==0 && element.id < 4)  && <Timeline position="alternate" >
            
            
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="white"
                >
                {element.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color='primary'>
                    <MenuBookIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography variant="h5" component="div">
                {element.title}
                </Typography>
                <Typography variant="body2">
                {element.minibody}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleOpen}>Read More</Button>
            </CardActions>
            </Card>
                </TimelineContent>
            </TimelineItem>
            </Timeline>}
        {(element.id%2==1 && element.id <4) && <Timeline position='alternate-reverse'>
            <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                align = "right"
                color="white"
                >
                {element.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                    <MenuBookIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography variant="h5" component="div">
                {element.title}
                </Typography>
                <Typography variant="body2">
                {element.minibody}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleOpen}>Read More</Button>
            </CardActions>
            </Card>
                </TimelineContent>
            </TimelineItem>
            </Timeline>}
            {element.id+1 == 4 &&<Timeline>
                <TimelineItem>
                <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                align = "right"
                color="white"
                >
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                <IconButton aria-label="delete" href="/announcements">
                    <ArrowDownwardIcon />
                </IconButton>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                </TimelineContent>
            </TimelineItem>
            </Timeline>}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                    {element.title}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {element.body}
                    </Typography>
                </Box>
                </Fade>
            </Modal>

             
            </div>
        ))}
        </div>
    );
}

export default Announcements