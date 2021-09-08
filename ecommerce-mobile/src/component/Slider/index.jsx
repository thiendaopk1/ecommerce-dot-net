import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/5/637664826345622284_F-H1_800x300.png',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/31/637633241066289329_F_H1_800x300.png',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/4/637663744466958857_F-H1_800x300.png',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/7/31/637633241066289329_F_H1_800x300.png',
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1232,
    marginTop: 4,
    flexGrow: 1,
    margin: 'auto',
    border: 'solid #eee 1px',
  },
  img: {
    height: 255,
    display: 'block',
    // maxWidth: 1256,
    overflow: 'hidden',
    width: '100%',
    borderRadius: 5,
  },
  slide:{
    // maxWidth: '68%',
  },
  right:{
    maxWidth: '31%',
  },
}));

function SlideShow() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews className={classes.slide}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <div className={classes.right}>
        <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/31/637528276050533862_94764899-9A87-4150-AE6C-7D9B8BCEFBF6.png"></img>
        <img src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/3/31/637528276050533862_94764899-9A87-4150-AE6C-7D9B8BCEFBF6.png"></img>
      </div> */}
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      /> */}
    </div>
  );
}

export default SlideShow;
