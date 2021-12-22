import React from 'react';
import Student from './student';

function Home() {
    return (
        <div className="homeTablestyle">
            <div className="home1Style">
            <p>This is home section 1</p>
            <h2>welcome</h2>
            <Student name="sandhya" marks="91" mobile="+91 345689998"/>
            <Student name="pragya" marks="92" mobile="+91 798853255"/>
            <Student name="mini" marks="93" mobile="+91 98564746469"/> 
            
        </div>
        <div className="homeFromStyle ">

        <p>This is home section 2</p>
             <h2>welcome</h2>
            <Student name="sandhya" marks="91" mobile="+91 9876544432"/> 
            <Student name="pragya" marks="92" mobile="+91 798853255"/>
            <Student name="mini" marks="93" mobile="+91 9856474646"/> 
            </div>
        </div>
    );
};

export default Home;
