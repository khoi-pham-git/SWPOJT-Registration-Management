import React from "react";
import Nav from "../Component/Nav/navbar";

export default function CompanyDetail(){
    return(
        <React.Fragment>
            <Nav/>
    <div class="page-heading about-heading header-text defaultBackground">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h2>KMS Technology</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="container">
        <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Tổng quan công ty</h2>
              </div>
            </div>

            <div class="col-md-8">
                <p>KMS Technology là công ty chuyên về lĩnh vực phát triển sản phẩm và gia công phần mềm với 100% vốn đầu tư của Mỹ. Sau 8 năm hoạt động, từ 4 thành viên lúc bắt đầu, đến nay KMS đã mở rộng quy mô lên tới 800 nhân viên trong đội ngũ nhân sự của mình. Những thành tựu đáng kể mà KMS Technology gặt hái được không phải công ty nào cũng dễ dàng có được.<br/>

                <br/>

                KMS Technology cung cấp dịch vụ và giải pháp tối ưu phần mềm cho hơn 99% khách hàng là các công ty ở Mỹ với các dịch vụ: phát triển phần mềm theo yêu cầu, bảo trì hệ thống sản phẩm phần mềm, quản lý ứng dụng; kiểm thử và bảo đảm chất lượng phần mềm. Những chất lượng vượt trội ở dịch vụ đã giúp cho KMS Technology 3 năm liền nhận giải thưởng Sao Khuê cho hạng mục: Dịch vụ gia công xuất khẩu phần mềm xuất sắc.</p>

            </div>

            <div class="col-md-4">
              <div class="left-content">
                <h4>Đóng góp</h4>

                <br/>
                
                <p>Số lượng sinh viên đăng ký OJT : 300<br/><br/>Số lượng công việc: 114</p>

                <p>Số lượng sinh viên cần: 100</p>
                
              </div>
            </div>
        </div>

        <br/>
        
        <div>
          <img src="assets/images/nhan-vien-kms-technology-source-careerbuilder.jpg" class="img-fluid" alt=""/>
        </div>
      </div>
    </div>

    <div class="send-message">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Liên hệ với công ty</h2>
            </div>
          </div>
          <div class="col-md-8">
            <div class="contact-form">
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" class="form-control" id="name" placeholder="Họ và tên" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" class="form-control" id="email" placeholder="E-Mail Address" required=""/>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" class="form-control" id="message" placeholder="Lời nhắn" required=""></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="filled-button">Gửi</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-md-4">
              <div class="left-content">

              <p>
                <span>Số điện thoại</span>

                <br/>
                
                <strong>
                  <a href="tel:123-456-789">123-456-789</a>
                </strong>
              </p>       

              <p>
                <span>Email</span>

                <br/>
                
                <strong>
                  <a href="mailto:john@carsales.com">john@carsales.com</a>
                </strong>
              </p>

              <p>
                <span>Website</span>

                <br/>
                
                <strong>
                  <a href="https://kms-technology.com/">https://kms-technology.com/</a>
                </strong>
              </p>
                <br/> 

                <ul class="social-icons">
                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i class="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    )
}