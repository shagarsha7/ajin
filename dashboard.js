var ctx = document.getElementById('chart').getContext('2d');
var data = [{
    x: 1,
    y: 20
}, {
    x: 2,
    y: 30
}, {
    x: 3,
    y: 40
}, {
    x: 4,
    y: 50
}, {
    x: 5,
    y: 50
}, {
    x: 6,
    y: 30
}, {
    x: 7,
    y: 50
},{
    x:8,
    y:20
}]
var stackedLine = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'Hits last Week',
            data: data
        }]
    },
    options: {

    }
});