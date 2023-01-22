import React from "react"
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react'
import FaqImg from '../../assets/images/FaqImage.jpg'

const Faq = () => {
  return (
    <>
      <div className="order-content">
        <div className="order-wrapper mb-4">
          <div className="head-text">
            <h3>FAQ Master Diskon Corporate</h3>
            <p className="text-muted">Pertanyaan yang sering di ajukan</p>
          </div>
        </div>

        <div className="card p-4 border-0">
          <div className="row">
            <div className="text-center">
              <img src={FaqImg} width={700} alt="CustomerImg" className="mb-4 img-fluid" />
            </div>
            <div className="col-md-6">
              <CAccordion flush>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>
                    <small>1. APA ITU MASTER DISKON CORPORATE?</small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Master Diskon Corporate adalah fitur baru Master Diskon yang diberikan bagi anda
                    para pebisnis dalam merencanakan perjalanan bisnis anda dengan sistem yang mudah
                    dan pembayaran berjangka.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>
                    <small>2. PRODUK APA SAJA YANG BISA DIPESAN DI MASTER DISKON CORPORATE?</small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Produk yang dapat dipesan adalah tiket pesawat, voucher hotel, paket wisata yang
                    disediakan oleh Master Diskon Corporate.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                  <CAccordionHeader>
                    <small>
                      3. APA SYARAT KETENTUAN PEMBATALAN/PERUBAHAN PESANAN <br /> TIKET PESAWAT?
                    </small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Pesanan tiket pesawat yang masih berstatus booked akan dibatalkan secara
                    otomatis oleh sistem jika batas waktu konfirmasi sudah lewat. Silahkan melakukan
                    reservasi ulang dari pada menu Flight. Apabila tiket sudah berstatus Issued,
                    untuk pembatalan silakan Customer Service Master Diskon Corporate untuk bantuan
                    permintaan anda.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={4}>
                  <CAccordionHeader>
                    <small>4. APA SYARAT KETENTUAN PEMBATALAN/PERUBAHAN PESANAN HOTEL?</small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Untuk syarat ketentuan pesanan hotel akan tergantung pada ketentuan dalam
                    voucher hotel. Jika status nonrefundable maka voucher tidak dapat dirubah maupun
                    dibatalkan. Silakan hubungi Customer Service Master Diskon Corporate untuk
                    bantuan permintaan anda.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={5}>
                  <CAccordionHeader>
                    <small>5. APA SYARAT KETENTUAN PEMBATALAN/PERUBAHAN PESANAN TRIP?</small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Untuk pembatalan/perubahan pesanan trip akan kembali pada syarat ketentuan yang
                    tertera pada surat konfirmasi. Silakan hubungi Customer Service Master Diskon
                    Corporate untuk bantuan permintaan anda.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={6}>
                  <CAccordionHeader>
                    <small> 6. APAKAH BISA MELAKUKAN PESANAN SECARA OFFLINE?</small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Bisa. Yang dapat melakukan pesanan hanya penanggung jawab yang sudah didaftarkan
                    dan seluruh biaya pemesanan akan ditagihkan melalui faktur kepada Perusahaan.
                    Silakan hubungi Customer Service Master Diskon Corporate untuk bantuan
                    permintaan anda.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </div>

            <div className="col-md-6">
              <CAccordion flush>
                <CAccordionItem itemKey={7}>
                  <CAccordionHeader>
                    <small>7. BAGAIMANA JIKA PEMBATALAN DENGAN ALASAN FORCE MAJEURE?</small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Silakan hubungi Customer Service Master Diskon Corporate untuk permintaan
                    pembatalan anda. Syarat dan Ketentuan akan mengacu kepada syarat ketentuan dari
                    penyedia kami. Master Diskon Corporate berupaya semaksimal mungkin dalam
                    memberikan solusi terbaik bagi anda. Master Diskon Corporate tidak menjamin
                    bahwa permintaan anda dapat terpenuhi.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={8}>
                  <CAccordionHeader>
                    <small>8. BAGAIMANA PROSES PEMESANAN PRODUCT TRIP?</small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Tahap pemesanan produk Trip adalah sebagai berikut :
                    <ol>
                      <li>Pengguna melakukan pencarian product Trip sesuai yang diinginkan.</li>
                      <li>
                        Pengguna melakukan pemesanan dengan mengisi detail pada product Trip yang
                        dipilih.
                      </li>
                      <li>
                        Pengguna mengkonfirmasi pemesanannya dan kredit yang akan terpotong adalah
                        sejumlah deposit sesuai ketentuan.
                      </li>
                      <li>
                        Pelunasan dilakukan setelah konfirmasi paket trip dari Customer Service
                        Master Diskon Corporate.
                      </li>
                    </ol>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={9}>
                  <CAccordionHeader>
                    <small>
                      9. BAGAIMANA SISTEM PEMBAYARAN YANG DIBERIKAN KEPADA PENGGUNA MASTER DISKON
                      CORPORATE?
                    </small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Pengguna aktif akan mendapatkan plafon kredit sesuai ketentuan yang diberikan
                    Master Diskon Corporate. Kredit tersebut dapat digunakan untuk pembelian seluruh
                    produk di Master Diskon Corporate dan akan dilakukan penagihan dengan faktur
                    kepada Perusahaan.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={10}>
                  <CAccordionHeader>
                    <small>
                      10. BAGAIMANA SISTEM PENAGIHAN KEPADA PENGGUNA <br /> MASTER DISKON CORPORATE?
                    </small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Sistem penagihan dilakukan sesuai kesepakatan pihak Master Diskon Corporate
                    dengan Pengguna Master Diskon Corporate yang tertuang dalam masing Nota
                    Kesepahaman.
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={11}>
                  <CAccordionHeader>
                    <small>
                      11. BAGAIMANA PROSES PENGEMBALIAN DANA DARI PESANAN YANG TELAH DIBATALKAN OLEH
                      PENGGUNA MASTER DISKON CORPORATE?
                    </small>
                  </CAccordionHeader>
                  <CAccordionBody>
                    Apabila dana kembali telah keluar, Master Diskon akan menginformasikan kepada
                    pengguna perihal hal tersebut. Namun, pengembalian dana dilakukan setelah faktur
                    atas pemesanan yang dibatalkan telah lunas atau berstatus Paid.
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
