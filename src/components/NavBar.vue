<template>
  <header class="nav-wrapper"> 
    <img src="../assets/orange-mountain.png" alt="Company logo - mountains">
    <h1>GoClimb</h1>
    <input type="checkbox" id="nav-toggle" class="nav-toggle">
    <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
    <nav class="nav">
        <ul>
            <li> <router-link to="/">Home</router-link></li>
            <li> <router-link to="/Products">Products</router-link></li>
            <li> <router-link to="/Login">Login</router-link> </li>
            <li> <router-link to="/Dashboard">Dashboard</router-link> </li>
        </ul>
    </nav>
   
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

*, *::before, *::after {
  box-sizing: border-box;
}

/* Navigation */
.nav-wrapper{
  background:  #2c3e50;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100px;
  position: fixed; 
  z-index: 1001;
  width: 100%;
  align-items: center;
}
.nav-wrapper img {
  grid-column: 1;
  width: auto;
  height: 100px;
  padding: 10px;
}
.nav-wrapper h1 {
  grid-column: 2;
  color:  #42b983;
  padding: 30px;
}
.nav {
  grid-column: 12;
  padding: 30px;
}
.nav ul {
  display: flex;
  list-style: none;
}
.nav li {
  margin-left: 3em;
}
.nav a, a.router-link {
  color: white; 
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
}
.nav a:hover, a.router-link-exact-active {
  color:  #42b983;
}
.nav-toggle, .nav-toggle-label {
  display: none;
}

/* Collapsing Nav Bar at TABLET size */
@media screen and (max-width: 768px)  {

  /* Navigation Bar */
  .nav {
    grid-column: 1/13;
    position: absolute;
    text-align: left;
    display: flex-start;
    top: 100%;
    background: #2c3e50;
    width: 100%;
    transform: scale(1, 0);
    padding: 0;
  }
  .nav-wrapper img {
    grid-column: 8;
  }
  .nav-wrapper h1 {
    grid-column: 12;
    color:  #42b983;
  }
  .nav ul {
    display: block;
    list-style: none;
  }
  .nav li {
    margin-left: 0;
    margin-bottom: 1em;
  }
  .nav li:last-child{
    padding-bottom: 20px;
  }
  .nav a {
    opacity: 0;
    transition: opacity 150ms ease-in-out; /* the last 250 is the delay before starting the animation */
  }

  /* Burger Icon */
  .nav-toggle-label { 
      color: #42b983;
      position: absolute;
      margin-left: 40px;
      height: 100px;
      display: flex;
      align-items: center;
  }
  .nav-toggle:checked ~ nav {
      transform: scale(1,1);
      transform-origin: top;
      transition: transform 400ms ease-in-out;
  }
  .nav-toggle:checked ~ nav a {
      opacity: 1;
      transition: opacity 250ms ease-in-out 250ms; /* the last 250 is the delay before starting the animation */
  }
  .nav-toggle-label span,
  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
      text-align: left;
      width: block;
      background: white;
      height: 2px;
      width: 2em;
      border-radius: 2px;
      position: relative;  
  }
  .nav-toggle-label span::before,
  .nav-toggle-label span::after { 
    content: '';
    position: absolute;
  }
  .nav-toggle-label span::before{
      bottom: 7px;
  }
  .nav-toggle-label span::after{
      top: 7px;
  } 
}

</style>
