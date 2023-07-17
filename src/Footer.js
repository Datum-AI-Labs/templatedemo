import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="site-footer" role="contentinfo">
      <div class="container mb-5">
        <div class="row justify-content-center">
          <div class="col-lg-6 text-center">
            <div class="row">
              <div class="col-md-12 mb-3">
                <h3>Subsribe Newsletter</h3>
                <p>"Stay in the loop with the latest culinary trends and exclusive offers by subscribing to our Chola Cafe Restaurant's newsletter. Be the first to know about our seasonal menus, special promotions, and upcoming events, delivered straight to your inbox. Join our food-loving community and embark on a flavorful journey with each newsletter edition."</p>
              </div>

              <form action="" class="col-12 mb-5">
                <div class="row align-items-center">
                <div class="col-md-8 mb-3 mb-md-0">
                  <input type="text" class="form-control" placeholder="Enter Email Address"/>
                </div>
                <div class="col-md-4">
                  <input type="submit" class="btn btn-primary btn-block" value="Subscribe"/>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4 mb-5">
            <h3>About Us</h3>
            <p class="mb-5">"At our Chola Cafe Restaurant, we are passionate about creating unforgettable dining experiences. With a commitment to culinary excellence, we strive to delight your taste buds with our carefully crafted dishes. Join us and discover a world of flavors, where every bite tells a story of culinary artistry."</p>
            <ul class="list-unstyled footer-link d-flex footer-social">
              <li><a href="#" class="p-2"><span class="fa fa-twitter"></span></a></li>
              <li><a href="#" class="p-2"><span class="fa fa-facebook"></span></a></li>
              <li><a href="#" class="p-2"><span class="fa fa-linkedin"></span></a></li>
              <li><a href="#" class="p-2"><span class="fa fa-instagram"></span></a></li>
            </ul>

          </div>
          <div class="col-md-5 mb-5">
            <div class="mb-5">
              <h3>Opening Hours</h3>
              <p><strong class="d-block font-weight-normal text-black">Sunday-Thursday</strong> 5AM - 10PM</p>
            </div>
            <div>
              <h3>Contact Info</h3>
              <ul class="list-unstyled footer-link">
                <li class="d-block">
                  <span class="d-block text-black">Address:</span>
                  <span>34 Street Name, Chennai, Tamil Nadu</span></li>
                <li class="d-block"><span class="d-block text-black">Phone:</span><span>+910898987834</span></li>
                <li class="d-block"><span class="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 mb-5">
            <h3>Quick Links</h3>
            <ul class="list-unstyled footer-link">
              <li><a href="#">About</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Disclaimers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-3">
          
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-md-center text-left">
            <p>
              
          <small class="block">&copy; 2023 <strong class="text-black">Chola cafe</strong>All Rights Reserved.</small> 
          </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
