import React from "react"
import Cs from '../../assets/images/CsImage.jpg'

const Help = () => {
  return (
    <>
      <div className="order-content">
        <div className="order-wrapper mb-4">
          <div className="head-text">
            <h3>Help Center</h3>
            <p className="text-muted">Siap membantu dengan senang hati</p>
          </div>
        </div>

        <div className="card p-5 border-0">
          <div className="headline text-center mb-4">
            <h6>Informasi lebih lanjut hubungi</h6>
            <h3>Customer Service Master Diskon</h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="text-center">
                <img src={Cs} width={200} alt="CustomerImg" className="mb-3 rounded-circle" />

                <h5>Customer Service</h5>
                <p>0822-5500-3535</p>

                <button className="btn btn-success">
                  <small>KIRIM PESAN WHATSAPP</small>
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-4">
                <p>Telepon</p>
                <h5>021 - 27811300</h5>
              </div>

              <div className="mb-3">
                <p>Email</p>
                <h5>cs@masterdiskon.com</h5>
              </div>

              <div className="mb-3">
                <p>Alamat</p>
                <h5>Jl. H. Baping No. 100 Ciracas, Jakarta Timur. 13740</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-md-6 mb-3">
            <div className="d-grid ">
              <button className="btn btn-primary py-3">Syarat dan Ketentuan</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-grid ">
              <button className="btn btn-outline-primary py-3">Guideline Portal B2B</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help
