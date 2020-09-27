let myHeader = document.createElement('div');
//  <div class="header" id="myHeader">
myHeader.className = 'header';
myHeader.id = 'myHeader';
myHeader.innerHTML = 
`    <span id="header-logo">
       <img src="https://i.ibb.co/n36Xx6v/Logo-HD-transparent.png" alt="" height="100%">
       <p>Starter Kit</p>
    </span>
    <nav>
       <div class="topnav">
          <a href="/">Home</a>
           <a href="/kits.html">The Kits</a>
          <a href="/delivery.html">Delivery</a>
          <a href="/upcycling.html">Upcycling</a>
          <a href="/studentbuddy.html">Student Buddy</a>
          <a href="/about-us.html">About</a>
       </div>
    </nav>
   <nav id="nav-mobile"><a class="mobile-menu-btn"  onclick="openMenu()"><p>MENU</p></a>
</nav>
    <div id="mobile-menu">
        <a href="/">Home</a>
        <a href="/kits.html">The Kits</a>
        <a href="/delivery.html">Delivery</a>
        <a href="/upcycling.html">Upcycling</a>
        <a href="/studentbuddy.html">Student Buddy</a>
        <a href="/about-us.html">About</a>  
        </div>
        `;

 document.body.appendChild(myHeader);