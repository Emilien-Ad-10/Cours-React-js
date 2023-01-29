let CaR = 60;

function render(){
    const paragrapheCaR = React.createElement('p', {}, 
    'Compte à rebours : ',
    React.createElement('span', {}, CaR)    
    );
    ReactDOM.render(paragrapheCaR, document.querySelector('aside'));
}
render();

window.setInterval(() => {
    CaR--
    render();    
}, 1000);