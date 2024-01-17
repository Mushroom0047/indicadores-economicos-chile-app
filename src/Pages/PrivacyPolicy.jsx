import Footer from "../components/Footer/Footer"

const PrivacyPolicy = () => {
  const fechaHoy = '29 de noviembre de 2023';
  return (
    <>
      <section className="container mx-auto mb-32">
        <h1 className="text-center pb-10">POLÍTICA DE PRIVACIDAD</h1>
        <p>La extensión <b>"Indicadores Económicos Chile"</b> recopila y muestra datos económicos provenientes del sitio web <a className="text-teal-300" href="https://mindicador.cl/" target="blank">https://mindicador.cl/</a>. Queremos informarte que los datos presentados a través de esta extensión son obtenidos de fuentes externas y no son responsabilidad directa de esta extensión.</p>
        
        <br></br>
        <h2>Recopilación de Datos:</h2>
        <ul>
          <li><strong>Datos Recolectados:</strong> La extensión accede a la API de <a className="text-teal-300" href="https://mindicador.cl/" target="blank">https://mindicador.cl/</a> para obtener los valores económicos clave en tiempo real, incluyendo la UF, el Dólar, el IPC y la UTM.</li>
          <li><strong>Uso de Datos:</strong> Estos datos se utilizan exclusivamente para proporcionar información actualizada a los usuarios dentro de la extensión. No se almacenan ni se procesan en nuestros servidores.</li>
        </ul>
        
        <br></br>
        <h2>Responsabilidad de Datos:</h2>
        <p>Es importante destacar que los datos presentados son obtenidos de una fuente externa y son presentados tal y como se reciben. No asumimos responsabilidad por la precisión, integridad o actualización de estos datos económicos, ya que son adquiridos directamente de <a className="text-teal-300" href="https://mindicador.cl/" target="_blank">https://mindicador.cl/</a>.</p>
        
        <br></br>
        <h2>Privacidad de Usuario:</h2>
        <ul>
          <li><strong>Datos del Usuario:</strong> No recopilamos ni almacenamos información personal de los usuarios a través de esta extensión.</li>
          <li><strong>Navegación Web:</strong> La extensión no rastrea ni recopila información sobre la actividad de navegación de los usuarios fuera de la visualización de los indicadores económicos.</li>
        </ul>
        
        <br></br>
        <h2>Contacto:</h2>
        <p>Si tienes alguna pregunta, comentario o inquietud sobre la privacidad o el funcionamiento de nuestra extensión, no dudes en contactarnos a través de <a className="text-teal-300" href="mailto:contacto@hectorvaldesm.com">contacto@hectorvaldesm.com</a>. Estamos comprometidos a proporcionar la mejor experiencia posible y a abordar cualquier preocupación que puedas tener.</p>

        <p>Al utilizar la extensión <b>"Indicadores Económicos Chile"</b>, aceptas y comprendes nuestra política de privacidad en relación con la recopilación y el uso de datos económicos de fuentes externas.</p>

        <p>Descargar y usar esta extensión implica la aceptación de estos términos y condiciones en cuanto a la privacidad de datos.</p>
        
        <br></br>
        <p>Última actualización: <b>{fechaHoy}.</b></p>

      </section>
      <Footer />
    </>
  )
}
export default PrivacyPolicy;
