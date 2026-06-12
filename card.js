import './style.css';

function index() {
    return (
        <footer className="footer">

        <div className="footer-content">

            <div className="about-section">
                <h2>About</h2>

                <p>
                    This project was collaboratively designed and developed by
                    <strong>
                        Mercy, Victor, Favour, Ifeoma, Michael, Fredrick,
                        Glory, Jude, Emmanuel and Daniel
                    </strong>.
                    Our team focused on creating a functional, user-friendly
                    and visually appealing solution while applying modern web
                    development practices.
                </p>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">

                <div className="copyright">

                    <p>
                        © 2026 Design by
                        <a href="https://amakandukwu.com/" target="_blank">
                            Amaka
                        </a>
                        &
                        <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank">
                            Ifeoma
                        </a>.
                    </p>

                    <p>
                        Built by
                        <a href="https://github.com/Devprincess023/Phoenix-Capstone-ProjectGroup-4" target="_blank">
                            Phoenix Group 4 Repository
                        </a>.
                        All rights reserved.
                    </p>

                </div>

                <div className="academy">
                    <a href="https://tsacademyonline.com/" target="_blank">
                        TSAcademy
                    </a>
                </div>

            </div>

        </div>

    </footer>
    );

}

export default index;