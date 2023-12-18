import './App.css';
import ImageCarousel from './ImageCarousel';
import './ImageCarousel.css';

//package.json "homepage": "https://chumii.github.io/we-loot-history",


const Gallery = () => {
    const images = [
        {
            id: 1,
            url: '/killshots/1_gnarl.jpg',
            boss: "Gnarlroot",
            roster: [
                { name: 'Merith', class: 'pala' },
                { name: 'Wojer', class: 'warrior' },
                { name: 'Nirlendra', class: 'druid' },
                { name: 'Ravantyr', class: 'evoker' },
                { name: 'Yabajín', class: 'monk' },
                { name: 'Olympea', class: 'priest' },
                { name: 'Neyfhi', class: 'shaman' },
                { name: 'Gingaer', class: 'dk' },
                { name: 'Felmütze', class: 'dh' },
                { name: 'Pantlezz', class: 'druid' },
                { name: 'Arzuria', class: 'monk' },
                { name: 'Iysform', class: 'pala' },
                { name: 'Scammerin', class: 'rogue' },
                { name: 'Dbuff', class: 'evoker' },
                { name: 'Garagentor', class: 'evoker' },
                { name: 'Plaguerunner', class: 'hunter' },
                { name: 'Zedarí', class: 'hunter' },
                { name: 'Tanaro', class: 'mage' },
                { name: 'Snusnuu', class: 'shaman' },
                { name: 'Mockielock', class: 'warlock' }
            ]
        },
        {
            id: 2,
            url: '/killshots/2_igira.jpg',
            boss: "Igira the Cruel",
            roster: [
                { name: 'Merith', class: 'pala' },
                { name: 'Wojer', class: 'warrior' },
                { name: 'Nirlendra', class: 'druid' },
                { name: 'Ravantyr', class: 'evoker' },
                { name: 'Yabajín', class: 'monk' },
                { name: 'Olympea', class: 'priest' },
                { name: 'Neyfhi', class: 'shaman' },
                { name: 'Gingaer', class: 'dk' },
                { name: 'Felmütze', class: 'dh' },
                { name: 'Pantlezz', class: 'druid' },
                { name: 'Arzuria', class: 'monk' },
                { name: 'Iysform', class: 'pala' },
                { name: 'Scammerin', class: 'rogue' },
                { name: 'Dbuff', class: 'evoker' },
                { name: 'Garagentor', class: 'evoker' },
                { name: 'Plaguerunner', class: 'hunter' },
                { name: 'Zedarí', class: 'hunter' },
                { name: 'Tanaro', class: 'mage' },
                { name: 'Snusnuu', class: 'shaman' },
                { name: 'Mockielock', class: 'warlock' }
            ]
        },
        {
            id: 3,
            url: '/killshots/3_volc.jpg',
            boss: "Volcoross",
            roster: [
                { name: 'Merith', class: 'pala' },
                { name: 'Wojer', class: 'warrior' },
                { name: 'Nirlendra', class: 'druid' },
                { name: 'Ravantyr', class: 'evoker' },
                { name: 'Yabajín', class: 'monk' },
                { name: 'Olympea', class: 'priest' },
                { name: 'Neyfhi', class: 'shaman' },
                { name: 'Gingaer', class: 'dk' },
                { name: 'Felmütze', class: 'dh' },
                { name: 'Pantlezz', class: 'druid' },
                { name: 'Arzuria', class: 'monk' },
                { name: 'Iysform', class: 'pala' },
                { name: 'Scammerin', class: 'rogue' },
                { name: 'Dbuff', class: 'evoker' },
                { name: 'Garagentor', class: 'evoker' },
                { name: 'Plaguerunner', class: 'hunter' },
                { name: 'Zedarí', class: 'hunter' },
                { name: 'Tanaro', class: 'mage' },
                { name: 'Snusnuu', class: 'shaman' },
                { name: 'Mockielock', class: 'warlock' }
            ]
        },

    ];

    return (
        <>

            <ImageCarousel images={images} />
        </>
    );
};

export default Gallery;


