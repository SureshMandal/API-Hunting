import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {

  const navigate = useNavigate()
  return (
    <div>
      <p>
       <strong>Get in Touch</strong> 
        <br />
        We'd love to hear from you! Whether you have questions about the Dog API, want to share feedback, have a cool project to show off, or just want to say hi—we're all ears (and tails). Fill out the form below and we'll get back to you as soon as possible. Our team might be small, but we're quick on the paws!
      </p>
      <div>
        <button className="btn btn-success mx-2 my-2" onClick={() => navigate('info')}>
          Info
        </button>
        <button className="btn btn-success" onClick={() => navigate('form')}>
          Form
        </button>
      </div>
    </div>
  )
}

export default Contact
