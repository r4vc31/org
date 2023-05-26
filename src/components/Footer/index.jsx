import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/r4vc31/' rel='noreferrer' target="_blank">
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://twitter.com/r4vc31' rel='noreferrer' target="_blank" >
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/r4vc31/' rel='noreferrer' target="_blank" >
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <p><a href="https://r4vc31.github.io/portfolio-ONEprogram-alura/" rel='noreferrer' target="_blank">Desarrollado por r4vc31</a></p>
        <img src='/img/Logo.png' alt='org' />
    </footer>
}

export default Footer;