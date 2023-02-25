import './Section.css';

function Section({ image }) {
    return (
        <div className="section__wrapper">
            <div className='section__image'>
                <img src={image} alt="section img" />
            </div>
        </div>
    )
}

export default Section;