import React, { useEffect } from "react"
import { useState } from "react"
import BrandIcon from '../../assets/brand/BrandIcon.png'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilFlightTakeoff, cilHome } from '@coreui/icons'
import '../../scss/register.scss'
import ReCAPTCHA from "react-google-recaptcha"
import axios from 'axios'


const Register = () => {
  const [groupname, setgroupname] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')

  const [grouptel, setgrouptel] = useState('')
  const [phone, setPhone] = useState('')
  const [role, setRole] = useState('')

  const [perusahaan, setPerusahaan] = useState('')
  const [cabang, setCabang] = useState('')
  const [industri, setIndustri] = useState('')
  const [pajak, setPajak] = useState('')
  const [negara, setNegara] = useState('')

  const [alamat, setAlamat] = useState('')
  const [provinsi, setProvinsi] = useState('')
  const [kota, setKota] = useState('')
  const [pos, setPos] = useState('')
  const [email, setEmail] = useState('')

  const [groupcompany, setGroupcompany] = useState('')
  const [phonecompany, setPhonecompany] = useState('')
  const [webcompany, setWebcompany] = useState('')

  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [token, setToken] = useState('')

  const [province, setProvince] = useState('')
  const [city, setCity] = useState('')
  const [phonecountry, setPhoneCountry] = useState('')


  const key = "6LeD6dUiAAAAAM88SEq3_CIiKhA3ZONOSkmB4l0l"

  const handleToken = (value) => {
    setToken(value)
  }

  const handleChange = (e) => {
    if (e.target.name == 'groupname') {
      setgroupname(e.target.value)
    } else if (e.target.name == 'firstName') {
      setfirstName(e.target.value)
    } else if (e.target.name == 'lastName') {
      setlastName(e.target.value)
    } else if (e.target.name == 'grouptel') {
      handlePhoneCountry(e.target.value)
      setgrouptel(e.target.value)
    } else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    } else if (e.target.name == 'role') {
      setRole(e.target.value)
    } else if (e.target.name == 'perusahaan') {
      setPerusahaan(e.target.value)
    } else if (e.target.name == 'cabang') {
      setCabang(e.target.value)
    } else if (e.target.name == 'industri') {
      setIndustri(e.target.value)
    } else if (e.target.name == 'pajak') {
      setPajak(e.target.value)
    } else if (e.target.name == 'negara') {
      setNegara(e.target.value)
    } else if (e.target.name == 'alamat') {
      setAlamat(e.target.value)
    } else if (e.target.name == 'provinsi') {
      handleCity(e.target.value)
      setProvinsi(e.target.value)
    } else if (e.target.name == 'kota') {
      setKota(e.target.value)
    } else if (e.target.name == 'pos') {
      setPos(e.target.value)
    } else if (e.target.name == 'email') {
      setEmail(e.target.value)
    } else if (e.target.name == 'groupcompany') {
      setGroupcompany(e.target.value)
    } else if (e.target.name == 'phonecompany') {
      setPhonecompany(e.target.value)
    } else if (e.target.name == 'webcompany') {
      setWebcompany(e.target.value)
    } else if (e.target.name == 'password') {
      setPassword(e.target.value)
    } else if (e.target.name == 'confirmpassword') {
      setConfirmpassword(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(false)

    var data = ({
      "first": firstName,
      "last": lastName,
      "pic_phone_country": grouptel,
      "pic_phone": phone,
      "position": role,
      "company_name": perusahaan,
      "title": cabang,
      "industry_type": industri,
      "tax_status": pajak,
      "country": negara,
      "address": alamat,
      "province": provinsi,
      "city": kota,
      "zipcode": pos,
      "email": email,
      "phone_country": groupcompany,
      "phone": phonecompany,
      "website": webcompany,
      "password": password,
      "confirm": confirmpassword,
      "captcha": token
    });
    console.log("🚀 ~ file: Register.js ~ line 126 ~ handleSubmit ~ data", data)


    var config = {
      method: 'post',
      url: 'https://api.masterdiskon.com/v1/auth/register/b2b',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleProvince = async () => {
    try {
      let response = await axios.get('https://api.masterdiskon.com/v1/user/location/province')
      setProvince(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCity = async (id) => {
    try {
      let response = await axios.get(`https://api.masterdiskon.com/v1/user/location/city?id_province=${id}`)
      setCity(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePhoneCountry = async () => {
    try {
      let response = await axios.get('https://countriesnow.space/api/v0.1/countries/codes')
      setPhoneCountry(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    handleProvince()
    handlePhoneCountry()
    return () => { }
  }, [])


  return (
    <>
      <nav className="navbar shadow-sm mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={BrandIcon} alt="" width={150} />
          </Link>
        </div>
      </nav>

      <div className="container content-register my-4">
        <div className="row">
          <div className="col-md-8 col-12">
            <form onSubmit={handleSubmit}>
              <div className="headline">
                <h4 className="fw-bold">Beritahu kami tentang anda</h4>
                <small className="text-muted">
                  Kami akan menghubungi Anda sebagai Company Person-in-Charge (PIC) untuk proses
                  aktivasi
                </small>
              </div>
              <div className="card my-4 p-2">
                <div className="card-body">
                  <div className="form-row">
                    <div className="col-lg-4 col-12 fw-bold">Nama Anda</div>
                    <div className="col-md-2 col-12 mt-2">
                      <select name="groupname" defaultValue={groupname} className="form-select" onChange={handleChange}>
                        <option value='0' key='Pilih'>Pilih</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                      </select>
                    </div>
                    <div className="col-md-3 col-12 mt-2">
                      <input type="text" className="form-control" name="firstName" value={firstName} onChange={handleChange} placeholder="Nama Depan" />
                    </div>
                    <div className="col-md-3 col-12 mt-2">
                      <input type="text" className="form-control" name="lastName" value={lastName} onChange={handleChange} placeholder="Nama Belakang" />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Nomor telepon</div>
                    <div className="col-md-2 col-12 mt-2">
                      <select name="grouptel" defaultValue={grouptel} className="form-select" onChange={handleChange}>

                        <option value='0' key='Pilih'>Pilih</option>

                        {phonecountry?.length ? phonecountry.map((item, index) => {
                          return (
                            <option value={item.dial_code} key={index}>{item.dial_code}</option>
                          )
                        }) : null}

                      </select>
                    </div>
                    <div className="col-md-6 col-12 mt-2">
                      <input type="text" className="form-control" name="phone" value={phone} onChange={handleChange} placeholder="Nomor telepon" />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Jabatan</div>
                    <div className="col-md-8 col-12 mt-2">
                      <input type="text" className="form-control" name="role" value={role} onChange={handleChange} placeholder="Jabatan" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="headline mb-3">
                <h4 className="fw-bold">Detail Perusahaan</h4>
              </div>
              <div className="card my-2 p-2">
                <div className="card-body">
                  <div className="form-row">
                    <div className="col-lg-4 col-12 fw-bold">Nama Perusahaan</div>
                    <div className="col-md-8 col-12 mt-2">
                      <input type="text" className="form-control" name="perusahaan" value={perusahaan} onChange={handleChange} placeholder="Nama Perusahaan" />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Cabang</div>
                    <div className="col-md-8 col-12 mt-2">
                      <select name="cabang" defaultValue={cabang} className="form-select" onChange={handleChange}>
                        <option value='0' key='Pilih'>Pilih Cabang</option>
                        <option value="Cabang JKT-1">Cabang JKT-1</option>
                        <option value="Cabang JKT-2">Cabang JKT-2</option>
                        <option value="Depo JKT-3">Depo JKT-3</option>
                        <option value="Depo Aceh">Depo Aceh</option>
                        <option value="Cabang JKT-4">Cabang JKT-4</option>
                        <option value="Cabang Medan">Cabang Medan</option>
                        <option value="Cabang Pekanbaru">Cabang Pekanbaru</option>
                        <option value="Depo Padang">Depo Padang</option>
                        <option value="Cabang Palembang">Cabang Palembang</option>
                        <option value="Depo Lampung">Depo Lampung</option>
                        <option value="Cabang Bandung">Cabang Bandung</option>
                        <option value="Cabang Semarang">Cabang Semarang</option>
                        <option value="Cabang Jogja">Cabang Jogja</option>
                        <option value="Cabang Surabaya 1">Cabang Surabaya 1</option>
                        <option value="Cabang Surabaya 2">Cabang Surabaya 2</option>
                        <option value="Cabang Madiun">Cabang Madiun</option>
                        <option value="Cabang Samarinda">Cabang Samarinda</option>
                        <option value="Cabang Bali">Cabang Bali</option>
                        <option value="Cabang Makassar">Cabang Makassar</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Jenis Industri</div>
                    <div className="col-md-8 col-12 mt-2">
                      <select name="industri" defaultValue={industri} className="form-select" onChange={handleChange}>
                        <option value='0' key='Pilih'>Pilih Industri</option>
                        <option value="Education">Education</option>
                        <option value="Financial">Financial</option>
                        <option value="Materials">Materials</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Energy">Energy</option>
                        <option value="Consumer Product">Consumer Product</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Health Care">Health Care</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Profesional Services">Profesional Services</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Status Pajak</div>
                    <div className="col-md-8 col-12 mt-2">
                      <select name="pajak" defaultValue={pajak} className="form-select" onChange={handleChange}>
                        <option value='0' key='Pilih'>Pilih Status</option>
                        <option value="pkp">PKP</option>
                        <option value="non-pkp">NON-PKP</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Negara</div>
                    <div className="col-md-8 col-12 mt-2">
                      <select name="negara" defaultValue={negara} className="form-select" onChange={handleChange}>
                        <option value='0' key='Pilih'>Pilih Negara</option>
                        <option value="1">Indonesia</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Alamat Perusahaan</div>
                    <div className="col-md-8 col-12 mt-2">
                      <textarea
                        type="text"
                        className="form-control"
                        name="alamat" value={alamat} onChange={handleChange}
                        placeholder="Alamat perusahaan"
                        rows="5"
                      />
                    </div>

                    <div className="col-md-4 col-12 mt-2"></div>
                    <div className="col-md-4 col-12 mt-2">
                      <select name="provinsi" defaultValue={provinsi} className="form-select" onChange={handleChange}>
                        <option value='0' key='Pilih Provinsi'>Pilih Provinsi</option>

                        {province?.length ? province.map((item, index) => {
                          return (
                            <option value={item.id_province} key={index}>{item.province_name}</option>
                          )
                        }) : null}

                      </select>
                    </div>
                    <div className="col-md-4 col-12 mt-2">
                      <select name="kota" defaultValue={kota} className="form-select" onChange={handleChange}>
                        <option value='0' key='Pilih Kota'>Pilih Kota</option>

                        {city?.length ? city.map((item, index) => {
                          return (
                            <option value={item.id_city} key={index}>{item.city_name}</option>
                          )
                        }) : null}

                      </select>
                    </div>
                    <div className="col-md-4 col-12 mt-2"></div>
                    <div className="col-md-4 col-12 mt-2">
                      <input type="text" className="form-control" name="pos" value={pos} onChange={handleChange} placeholder="Kode pos" />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Email perusahaan</div>
                    <div className="col-md-8 col-12 mt-2">
                      <input type="text" placeholder="Email" name="email" value={email} onChange={handleChange} className="form-control" />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Nomor telepon perusahaan</div>
                    <div className="col-md-2 col-12 mt-2">
                      <select name="groupcompany" defaultValue={groupcompany} className="form-select" onChange={handleChange}>

                        <option value='0' key='Pilih'>Pilih</option>

                        {phonecountry?.length ? phonecountry.map((item, index) => {
                          return (
                            <option value={item.dial_code} key={index}>{item.dial_code}</option>
                          )
                        }) : null}

                      </select>
                    </div>
                    <div className="col-md-6 col-12 mt-2">
                      <input type="text" className="form-control" name="phonecompany" value={phonecompany} onChange={handleChange} placeholder="Nomor telepon" />
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Website perusahaan</div>
                    <div className="col-md-8 col-12 mt-2">
                      <input type="text" className="form-control" name="webcompany" value={webcompany} onChange={handleChange} placeholder="Opsional" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="confirm-password">
                <div className="headline mb-3 mt-4">
                  <h4 className="fw-bold">Pengaturan Password</h4>
                </div>
                <div className="card my-2 p-2">
                  <div className="form-row mt-2">
                    <div className="col-lg-4 col-12 fw-bold">Atur password anda</div>
                    <div className="col-md-4 col-12 mt-2">
                      <input type="password" className="form-control" name="password" value={password} onChange={handleChange} placeholder="Password" autoComplete="on" />
                    </div>
                    <div className="col-md-4 col-12 mt-2">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Konfirmasi password"
                        name="confirmpassword" value={confirmpassword} onChange={handleChange}
                        autoComplete="on"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="form-row mb-3">
                    <div className="col-lg-4 col-12 fw-bold">Syarat dan Ketentuan</div>
                    <div className="col-md-10 col-12 mt-2">
                      <small>
                        Saya telah membaca dan menyetujui untuk menerima {' '}
                        <small className="text-primary">Syarat dan ketentuan yang berlaku.</small>
                      </small>
                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey={key}
                    value={token}
                    onChange={handleToken}
                  />
                </div>
              </div>

              <div className="row my-3">
                <div className="col-md-8"></div>
                <div className="col-md-4">
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary py-2">
                      Lanjutkan untuk mendaftar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4 col-12 my-4">
            <div className="card p-4 mb-3">
              <h5 className="fw-bold mb-4">Mengapa kami membutuhkan informasi Anda?</h5>
              <p>
                Untuk memvalidasi informasi perusahaan Anda, kami perlu menghubungi Anda atau
                seseorang dari perusahaan Anda sebagai Penanggung Jawab (PIC). <br /> <br /> PIC ini
                akan diberi wewenang sebagai Administrator untuk Mengatur, Mengedit, atau Mengelola
                Pengaturan Perusahaan Anda di platform Master Diskon Corporate. Anda juga dapat
                menugaskan kembali atau mendelegasikan peran PIC Anda kepada karyawan lain di
                perusahaan Anda nanti.
              </p>
            </div>

            <div className="card p-4 mb-3 d-sm-block d-none">
              <h5 className="fw-bold mb-4">Produk Kami</h5>
              <div className="row text-center">
                <div className="col-md-6">
                  <CIcon icon={cilFlightTakeoff} width={100} />
                  <h6 className="bg-dark text-white p-2 rounded">Flight</h6>
                </div>

                <div className="col-md-6">
                  <CIcon icon={cilHome} width={100} />
                  <h6 className="bg-dark text-white p-2 rounded">Hotel</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
