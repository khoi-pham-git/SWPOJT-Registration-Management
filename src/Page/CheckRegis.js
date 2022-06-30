import React from "react";
import NavCompany from "../Component/Nav/NavCompany";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function CheckRegis() {
  const location = useLocation();
  var navigate = useNavigate();
  const data = location.state;
  var regisArr = [];
  const [regisList, setRegisList] = useState([]);
  const [regisListRender, setregisListRender] = useState([]);
  const [companyId, setCompanyId] = useState();
  //   const [job, setJob] = useState();
  //   const [student, setStudent] = useState();
  useEffect(() => {
    console.log("ssssssssss");
    console.log(data);
    setCompanyId(data);
    async function getRegis() {
      var response = await axios.get(
        "https://localhost:44362/regisbycompany/" + data
      );
      response = await response;
      //console.log(response.data);
      regisArr = response.data;
      setRegisList(response.data);
      console.log(regisArr);
      console.log(regisArr[0].RegistrationID);
     
      setregisListRender([]);
      for (var i = 0; i < regisArr.length; i++) {
        
        console.log("///////////////");
        console.log(regisArr[i].RegistrationID);
        var id = regisArr[i].RegistrationID;
        var itemList = (
          <div class="col-md-6">
            <div class="contact-form">
              <div class="product-item" id={i}>
                <a href="#">
                  <img src="assets/images/img_avatar.png" alt="" />
                </a>
                <div class="down-content">
                  <a href="#">
                    <h4>{regisArr[i].Student.FullName}</h4>
                  </a>

                  <h6>{regisArr[i].Description}</h6>

                  
                    <button type="submit" id={regisArr[i].RegistrationID} onClick={((e)=>onAccept(e,id))} class="filled-button">
                      Duyệt
                    </button>
                    <button type="submit" id={regisArr[i].RegistrationID} onClick={((e)=>onDeny(e,id))} class="filled-button deny">
                      Từ chối
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        );
        setregisListRender((prev) => [...prev, itemList]);
      }
    }

    getRegis();
  }, []);
  return (
    <React.Fragment>
      {/* <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>   */}

      <NavCompany />
      <div class="page-heading about-heading header-text defaultBackground">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h2>Duyệt đăng ký</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {regisList[0] == undefined ? (
        <></>
      ) : (
        <div class="products">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="row">            
                  <div>
                    {regisListRender.map((item) => {
                      return item;
                    })}
                  </div>

                  {/* <div class="col-md-12">
                    <ul class="pages">
                      <li class="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-angle-double-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
              <div class="col-md-4">
                <div class="contact-form">
                  <div class="form-group">
                    <h5>Tìm kiếm</h5>
                  </div>

                  <div class="row">
                    <div class="col-8">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Công ty, chuyên ngành"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>

                    <div class="col-4">
                      <button class="filled-button" type="button">
                        Go
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div class="form-group">
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>

            <p><a href="blog-details.html">Lorem ipsum dolor sit amet, consectetur adipisicing.</a></p>
            <p><a href="blog-details.html">Et animi voluptatem, assumenda enim, consectetur quaerat!</a></p>
            <p><a href="blog-details.html">Ducimus magni eveniet sit doloremque molestiae alias mollitia vitae.</a></p> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
  async function onAccept(e, id) {
    e.preventDefault();
    console.log("accept");
    await axios
      .post("https://localhost:44362/acceptRegis/"+id)
      .then((respn) => {
        alert("Accept registration successfully");
        //navigate("/checkRegis");
        window.location.reload();
      });
  }

  async function onDeny(e, id) {
    e.preventDefault();
    await axios
      .post("https://localhost:44362/denyRegis/"+id)
      .then((respn) => {
        alert("Deny registration successfully");
        //navigate("/checkRegis");
        window.location.reload();
    });
  }
}
