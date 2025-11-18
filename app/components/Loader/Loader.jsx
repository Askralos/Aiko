import "./Loader.css";

const Loader = ({ loaderRef }) => {
    return (
        <div className="main-container" ref={loaderRef}>
            <div className="title-container-wrapper">
                <div className="title-container">
                    <p className="title">Aiko</p>
                </div>
                <div className="title-container">
                    <p className="title">De Sallier Du pin</p>
                </div>
            </div>
        </div>
    );
};

export default Loader;
