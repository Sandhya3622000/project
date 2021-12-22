import React from 'react'
import Student from './student'

function HomeTable() {
    return (
        <div className="homeTableStyle">
        <Student name="Pragya" enroll_no="20" email ="pragya@gmail.com" marks="91" mobile="+91 123452340"mobile2="+91 123452340" />
        <Student name="Komal"  enroll_no="20"email ="komal@gmail.com" marks="92" mobile="+91 1234567890" mobile2="+91 123452340"/>
        <Student name="mini " enroll_no="30"email ="minil@gmail.com" marks="92" mobile="+91 1234567890" mobile2="+91 123452340"/>
        <Student name="Sandhya"  enroll_no="40" email ="sandhya@gmail.com" marks="92" mobile="+91 654789123"mobile2="+91 123452340" />
      </div>
    )
}

export default HomeTable