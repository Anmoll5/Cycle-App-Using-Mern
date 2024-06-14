import React from "react";

const Contact = () => {
  return (
    <>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1>HOW WE CAN HELP YOU ?</h1>
            <form>
                <div className="row">
                    <div className="col-md-6">
                    <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
                    </div>
                </div>
              
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="text"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Message
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div> */}


<div class="cy_form_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <h1 class="cy_heading">How we can help you ?</h1>
                    <div class="cy_form padder_top50">
                        <form>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 padder_left">
                                    <div class="form-group">
                                        <input type="text" name="first_name" class="form-control require" placeholder="Name"/>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 padder_right">
                                    <div class="form-group">
                                        <input type="text" name="email" class="form-control require" placeholder="Email" data-valid="email" data-error="Email should be valid."/>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 padder_left padder_right">
                                    <div class="form-group">
                                        <input type="text" name="subject" class="form-control" placeholder="Subject"/>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 padder_left padder_right">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="response"></div>
                                <div class="col-lg-12 col-md-12 padder_left padder_right">
                                    <input type="hidden" name="form_type" value="contact"/>
                                    <button type="button" class="cy_button submitForm">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
        </div>
    </div>

    </>
  );
};

export default Contact;




