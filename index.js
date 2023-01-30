/* J A V A S C R I P T */
{

let CompteARebours = 180;

function render(){
    const paragrapheCompteARebours = React.createElement('p', {}, 'Compte à rebours : ',React.createElement('span', {}, CompteARebours)
    );
    ReactDOM.render(paragrapheCompteARebours, document.querySelector('.cas_pratique-1'));
}
render();

window.setInterval(() => {
    CompteARebours--
    render();    
}, 1000);

}

/* S Y N T A X E _ J S X */
{
let secondes = 0;

function numberFormat(secondes){
    return secondes.toString().padStart(2, "0");
}

function render(){
    const items = ['item 1', 'item 2', 'item 3'];
    const lis = items.map((item, k) => <li key={k}>{item}</li>)
    const paragraphesecondes =  <section className="section-jsx">
                                    <p>timer : <span>{numberFormat(secondes)}</span></p>
                                    <ul>
                                        {lis}
                                    </ul>
                                </section>
    ReactDOM.render(paragraphesecondes, document.querySelector('.cas_pratique-2'));
}
render();
    
window.setInterval(() => {
    secondes++
    render();    
}, 1000);   
}