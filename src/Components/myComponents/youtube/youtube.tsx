import "./youtube.css";



function Youtube(): JSX.Element {
    var headline = "8 Must Know JavaScript Array Method";
    var width = 520, height = 350
    return (
        <div className="youtube">

            <div id="youTubeLink">
                <h3>{headline}</h3><br />
                <iframe width={width} height={height} src="https://www.youtube.com/embed/R8rmfD9Y5-c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" >Arrays Learning</iframe>
            </div>

        </div>
    );
}

export default Youtube;
