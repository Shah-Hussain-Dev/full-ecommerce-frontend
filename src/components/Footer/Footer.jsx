
import "./footer.scss"
import { Button, Form } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-5 text-white">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="./images/newsletter.png" alt="newletter" />
                <h2>
                  Sign Up for Newsletter
                </h2>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex input-subscribe justify-content-between bg-white ">
                <Form.Control
                  type="text"
                  placeholder="Enter your email to subscribe us"
                  aria-label="Enter your email to subscribe us"
                  aria-describedby="basic-addon2"
                  className='py-2'
                />
                <Button className="  subscribe-btn">Subscribe</Button>

              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'></footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white text-center mb-0">
                &copy; {new Date().getFullYear()} Powered by Shah Husain
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer