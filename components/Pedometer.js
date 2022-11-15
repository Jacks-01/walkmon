import GoogleFit, { Scopes } from 'react-native-google-fit'
import React, { useState, useEffect } from 'react';


const Pedometer = () => {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [pastStepCount, setPastStepCount] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);


    useEffect(() => {
        subscribe();
        return () => { };
    }, []);

    return (  );
}

export default Pedometer;