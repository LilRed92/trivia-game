import { useState, useContext } from 'react';
import { ScoreContext } from './ScoreContext.jsx';

function GameResults() {
    const score = useContext(ScoreContext);
    
    let totalScore = score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


    return {

        <div className="scoreCard"
    }
} 