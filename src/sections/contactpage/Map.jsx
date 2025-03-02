import React from 'react'
import styles from '../../css/contactpage/contactform.css'

const Map = () => {
  return (
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.4778486499395!2d-1.7376388726125478!3d52.45237287204373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b0deff56c9e3%3A0xd7fab23579355bb!2sBirmingham%20Airport!5e0!3m2!1sen!2sng!4v1737628428263!5m2!1sen!2sng" width="80%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
    </div>
  )
}

export default Map