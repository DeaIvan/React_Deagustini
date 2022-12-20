import '../App.css'

function Footer(){
  return (
      <div className="content-footer">
        <div className='content-copy'>
            <a className="logo" href="#">
                URBANSTY.<span>LE</span>
            </a>
            <span>© Todos los derechos reservados 2022</span>
        </div>
        <div className="content-datos">
            <span>Direccion de ejemplo 112233</span>
            <span>Ciudad ejemplo</span>
            <span>1122334455</span>
            <span>mailejemplo@mail.com</span>
        </div>
        <div className="content-redes">
            <p><a href=""><i class="fa-brands fa-facebook"></i></a></p>
            <p><a href=""><i class="fa-brands fa-instagram"></i></a></p>
            <p><a href=""><i class="fa-brands fa-whatsapp"></i></a></p>
        </div>
      </div>
  )
}

export default Footer;   