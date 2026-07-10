import './Languages.css';

function Languages(){
    return(
        <section className='languages'>
            <h2>LANGUAGES</h2>
            <h1>Languages</h1>
             <div className='language'>
                 <div className='language-header'>
                     <span>Arabic</span>
                     <span>Native</span>
                 </div>
                 <div className='progress'>
                      <div className='progress-bar arabic'></div>
                 </div>
             </div>
             
             <div className='language'>
                <div className='language-header'>
                     <span>English</span>
                     <span>Professional</span>
                </div>
                 <div className='progress'>
                      <div className='progress-bar english'></div>
                 </div>
             </div>
        </section>
    );
}
export default Languages; 