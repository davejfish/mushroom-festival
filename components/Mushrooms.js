
export default function createMushrooms(root) {
    const container = root.querySelector('.mushroom-container');

    return ({ mushrooms }) => {
        // *** clear out the container element
        container.innerHTML = '';
        // loop the mushrooms!
        for (let mushroom of mushrooms) {
            // add one Mushroom component for each mushroom object
            let enoki = { mushroom };
            //     - call the Mushroom component with the mushroom object
            let newMush = Mushroom(enoki);
            //     - append the returned element to the container
            container.append(newMush);
        }
    };
}


export function Mushroom({ mushroom }) {
    const img = document.createElement('img');
    img.src = 'assets/mushrooms/' + mushroom.type + '.png';
    img.alt = mushroom.type;
    return img;
}