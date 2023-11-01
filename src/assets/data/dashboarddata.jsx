import { Component } from "react";
import { FaCalendar, FaCampground, FaChartArea, FaChartBar, FaLocationArrow, FaMagento, FaPlane, FaPumpMedical, FaSignOutAlt, FaUser } from "react-icons/fa";
import profile from '../images/riyad.jpg'
import pixel1 from '../images/pixel1.jpeg'
import riyad2 from '../images/riyad2.jpg'
import riyad4 from '../images/riyad4.jpg'
import riyad3 from '../images/riyad3.jpg'

import pixels2 from '../images/pixels2.jpeg'
import pixel3 from '../images/pixel3.jpeg'
import pixel5 from '../images/pixel5.jpeg'


export const links=[
{
    id:1,
    name:"Dashboard",
    component:"<Component/>",
    icon:<FaMagento/>,

},
{
    id:3,
    name:"tour",
    component:"<Component/>",
        icon:<FaPlane/>,

},


{
    id:6,
    name:"users",
    component:"<Component/>",
        icon:<FaUser/>,

},
{
    id:7,
    name:"booking",
    component:"<Component/>",
        icon:<FaCalendar/>,

},
{
    id:8,
    name:"charts",
    component:"<Component/>",
        icon:<FaChartArea/>,

},

]
export const users = [
    {
        id:1,
        name:'Peter',
        image:profile,
        position:'trainee',
        country:'France',
        email:'peter@gmail.com'
    },
    {
        id:2,
        name:'john doe',
        image:riyad2,
        position:'trainee',
        country:'England',
        email:'john@gmail.com'
    },
       {
        id:3,
        name:'Katrine',
        image:riyad4,
        position:'junior devloper',
        country:'Italy',
        email:'katrine@gmail.com'
    },
    {
    id:4,
    name:'patricia',
    image:riyad4,
    position:'junior devloper',
    country:'Italy',
    email:'patricia@gmail.com'
}
]

export const Tours = [
    {
        id:789,
        title:'visit to rwanda',
        image:pixel1,
        date:'18 july 2023',
        country:'rwanda',
        owner:'samson',
        ownerImag:riyad3,
        status:'booked',
        activity:'learning',
        amount:600
    },
    {
        id:799,
        title:'trip to Usa',
        image:pixel3,
        date:'18 july 2023',
        country:'united states',
        owner:'Peter',
        ownerImag:riyad4,
        status:'booked',
        activity:'adventure',
        amount:670
    },
    {
        id:893,
        title:'discovery for ibiza',
        image:pixel5,
        date:'18 july 2023',
        country:'united states',
        owner:'Peter',
        ownerImag:riyad3,
        status:'pending',
        activity:'discovery',
        amount:123
    },
    {
        id:8913,
        title:'discovery for ibiza',
        image:pixel1,
        date:'18 july 2023',
        country:'united states',
        owner:'Peter',
        ownerImag:riyad2,
        status:'completed',
        activity:'discovery',
        amount:123
    },
]