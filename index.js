/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/


// This will be the slider componant 


function Slider() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="https://picsum.photos/seed/picsum/200/300" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://picsum.photos/seed/picsum/200/300" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://picsum.photos/seed/picsum/200/300" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                    <a className="nav-link disabled">Disabled</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

ReactDOM.render(
    <div>
        <Navbar/>
        <Slider />
    </div>,
    document.getElementById("root")
)