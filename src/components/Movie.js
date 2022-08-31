import './Movie.css';

function Movie(props) {
    return (
        <div className="clsChildDiv">
            <p>{props.propstitle}</p>
            <p>{props.propsyear}</p>
            <p>{props.propsdirector}</p>
            <p>{props.propsduration}</p>
            <p>{props.propsrate}</p>
            <p>{props.propsgenre.map(
                (genreelement) => <p> {genreelement} </p>
            )}</p>
        </div>
    );
}

export default Movie;