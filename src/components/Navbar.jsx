function Navbar() {
  return (
    // <!-- Navbar -->
    <section id="navbar">
      <div class="logo">
        <a href="#">
          <img id="logo-pic" src="/img/negative-man-pic.png" alt="Logo" />
        </a>
      </div>
      <a href="./" class="page tech-shop">
        Geek Central
      </a>
      <a href="./" class="page home-page">
        Home
      </a>
      <a href="./about" class="page about-page">
        About
      </a>
      <a href="./contact" class="page contact-page">
        Contact
      </a>
      <a href="./admin" class="page admin-page">
        Admin
      </a>
      <a href="#" class="page login" style="float: right">
        login{" "}
      </a>
      <a href="#" class="page wishlist" style="float: right">
        wishlist <i class="fas fa-heart"></i>
      </a>
    </section>
  );
}

export default Navbar;
