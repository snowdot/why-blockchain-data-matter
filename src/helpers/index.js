const helpers = {
    getRandomInt: (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    },
    separators: num => {
        const num_parts = num.toString().split(',');
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return num_parts.join('.');
    }
}

export default helpers;
