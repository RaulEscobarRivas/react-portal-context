import React, { Component } from 'react';


const White = () => <div className='white'/>
const Green = () => <div className='green'><White/></div>
const Blue = () => <div className='blue'><Green /></div>

const Boxes = () => <Blue />

export default Boxes;