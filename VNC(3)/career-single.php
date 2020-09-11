<?php include('header1.php'); ?>

<!--page title start-->

<section class="page-title parallaxie" data-bg-img="images/bg/08.jpg">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12">
        <h1>Career Single</h1>
        <nav aria-label="breadcrumb" class="page-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item"><a href="#">About Us</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Career Single</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

<!--page title end-->


<!--body content start-->

<div class="page-content">

<section>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="title-2 z-index-1 text-uppercase mb-4">Apply <span>now</span></h2>
        <div>
          <form id="contact-form" method="post" action="http://themeht.com/consulterz/html/php/contact.php">
            <div id="formmessage"></div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input id="form_name" type="text" name="name" class="form-control" placeholder="First name" required="required" data-error="Firstname is required.">
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Last name" required="required" data-error="Lastname is required.">
                  <div class="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input id="form_email" type="email" name="email" class="form-control" placeholder="Email" required="required" data-error="Valid email is required.">
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input id="form_age" type="tel" name="age" class="form-control" placeholder="Age">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input id="form_city" type="text" name="name" class="form-control" placeholder="City">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <select class="form-control">
                    <option selected="">Select Position</option>
                    <option>Web Designer</option>
                    <option>Developer</option>
                    <option>Software Engineer</option>
                    <option>Marketing Manager</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input id="phone" type="text" name="Phone Number" class="form-control" placeholder="Phone Number">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <select class="form-control">
                    <option selected="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <textarea id="form_experience" name="Experience If any" class="form-control" placeholder="Experience If any" rows="4"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea id="form_message" name="Application " class="form-control" placeholder="Application " rows="4" required="required" data-error="Please,leave us a message."></textarea>
                  <div class="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-3">
                <button class="btn">Send Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<!--service end-->

<section class="page-title" data-bg-img="img/banners/about-banner.png">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12">
        <h1 class="text-white text-center">Join The Force Today</h1>
        
      </div>
    </div>
  </div>
</section>
</div>

<!--body content end--> 

<?php include('footer.php'); ?>