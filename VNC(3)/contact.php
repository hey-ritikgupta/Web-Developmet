<?php include('header1.php'); ?>

<!--page title start-->

<section class="page-title parallaxie" data-bg-img="images/bg/08.jpg">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-12">
        <h1>Contact Us</h1>
        <nav aria-label="breadcrumb" class="page-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item"><a href="#">Contact</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Contact 2</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

<!--page title end--> 


<!--body content start-->

<div class="page-content">

<!--contact start-->

<section class="contact-info text-center dark-bg">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <div class="contact-media style-2"> <i class="flaticon-paper-plane"></i>
          <h4 class="text-white">Address:</h4>
          <p class="mb-3">See Our Branch Office</p>
          <div class="mb-3">
            <h6 class="font-w-5">USA Office:</h6>
            <span>423B, Road Wordwide Country, USA</span>
          </div>
          <div>
            <h6 class="font-w-5">New York Office:</h6>
            <span>423B, Road Wordwide Country, New York</span>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 md-mt-5">
        <div class="contact-media style-2"> <i class="flaticon-email"></i>
          <h4 class="text-white">Email Us</h4>
          <p class="mb-3">Email us for general queries, including marketing and partnership opportunities.</p> <a href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
          <a href="mailto:themeht23@gmail.com"> themeht23@gmail.com</a>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 md-mt-5">
        <div class="contact-media style-2"> <i class="flaticon-phone"></i>
          <h4 class="text-white">Call Us</h4>
          <p class="mb-3">Call us to speak to a member of our team.</p> <a href="tel:+912345678900">+91-234-567-8900</a>
          <a href="tel:+912345678900">+91-234-567-8900</a>
          <a href="tel:+912345678900">+91-234-567-8900</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="contact-2 pos-r">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="contact-main white-bg p-5 box-shadow rounded">
          <div class="section-title">
          <h6>Get In Touch</h6>
          <h2 class="title">Stay Contact Us</h2>
          <p>Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.</p>
        </div>
          <form id="contact-form" class="row" method="post" action="http://themeht.com/consulterz/html/php/contact.php">
            <div id="formmessage"></div>
         <div class="col-md-6">
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
              <input id="form_name" type="text" name="firstname" class="form-control" placeholder="First Name" required="required" data-error="Name is required.">
              <div class="help-block with-errors"></div>
            </div>
            </div>
            <div class="col-sm-6">
            <div class="form-group">
              <input id="form_name1" type="text" name="lastname" class="form-control" placeholder="Last Name" required="required" data-error="Name is required.">
              <div class="help-block with-errors"></div>
            </div>
            </div>
          </div>
            <div class="form-group">
              <input id="form_email" type="email" name="email" class="form-control" placeholder="Email" required="required" data-error="Valid email is required.">
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Phone" required="required" data-error="Phone is required">
              <div class="help-block with-errors"></div>
            </div>
            <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
              <select name="select" class="form-control">
                <option>- Select Service</option>
                <option>Consulting</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>Avanced Analytics</option>
                <option>planning</option>
              </select>
            </div>
            </div>
            <div class="col-sm-6">
            <div class="form-group mb-0">
              <input id="form_subject" type="tel" name="subject" class="form-control" placeholder="Subject" required="required" data-error="Subject is required">
              <div class="help-block with-errors"></div>
            </div>
            </div>
          </div>           
         </div>
         <div class="col-md-6">
          <div class="form-group h-100 mb-0">
              <textarea id="form_message" name="message" class="form-control h-100" placeholder="Message" rows="4" required="required" data-error="Please,leave us a message."></textarea>
              <div class="help-block with-errors"></div>
            </div>
          </div>
            <div class="col-md-12 text-right mt-5">
              <button class="btn"><span>Send Messages</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  </div>
<div class="map">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921" allowfullscreen=""></iframe>
</div>
</section>

<!--contact end-->

</div>

<!--body content end--> 

<!--body content end--> 

<?php include('footer.php'); ?>