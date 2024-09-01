import '../styles/Homepage.scss';

export default function Homepage() {
    return (
        <div>
            <section className="first-container">
                <div className="insert-writeup">
                    <h1 className="heading">Test React App</h1>
                    <h4 className="after-heading">Test application for this React stuff I am working on</h4>
                </div>
            </section>
            
            <section className="second-container">
                <div className="image-display"></div>
            </section>

            <section className="third-container"></section>
        </div>
    )
}