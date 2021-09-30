// document.addEventListener('DOMContentLoaded', () => {
//   console.log('it works');
// })

import Snail from './Snail';

const make_snails = (json) => {
    console.log(json);
    for (let i = 0; i < json.length; i++) {
        let snail = json[i];
        snail = new Snail(snail['name'], snail['color'], snail['velocity']);
        console.log(snail.name);
        const race_track = document.querySelector('.race-track');
        console.log(race_track);
        race_track.appendChild(snail.mount());
    }
};

fetch(
    'https://classes.codingbootcamp.cz/assets/classes/api/snails.php?number=5'
)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        make_snails(json);
    });
