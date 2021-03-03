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
            <li> <router-link to="/Login">Sign Up</router-link> </li>
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
}
.nav {
  position: absolute;
  text-align: left;
  grid-column: 6/12;
  top: 100%;
  left: 0;
  background: #2c3e50;
  width: 100%;
  transform: scale(1, 0);
}
.nav-wrapper img {
  grid-column: 1/2;
  z-index: 998;
  width: auto;
  height: 100px;
  padding: 10px;
}
.nav-wrapper h1 {
  grid-column: 3/4;
  color:  #42b983;
  margin: 0;
  padding: 30px;
  align-items: center; 
}
.nav ul {
  display: flex;
  margin: 0;
  padding: 30px;
  list-style: none;
}
.nav li {
  margin-left: 3em; 
  margin-bottom: 0;
}
.nav a {
  color: white; 
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 150ms ease-in-out; /* the last 250 is the delay before starting the animation */
}
.nav a.router-link {
  color: white; 
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.nav a:hover {
  color:  #42b983;
}
.nav a.router-link-exact-active {
  color:  #42b983;
}
.nav-toggle {
  display: none;
}

/* Navigation Bar at minimum tablet size */
@media screen and (min-width: 769px) {
    .nav-toggle-label {
        display: none;
    }
    .nav-wrapper {
        display: grid;
        grid-template-columns: 12fr;
    }
    .nav {
        all: unset; 
        grid-column: 6/12;
        display: flex;
        justify-content: flex-end;
        align-items: center; 
    }
    .nav a {
        text-transform: none;
        opacity: 1;
    }
    .nav ul {
      display: flex;
    }
}

/* Collapsing Nav Bar at TABLET size */
@media screen and (max-width: 768px)  {
    /* Navigation Bar */
    .nav {
      grid-column: 1/13;
    }
    .nav-wrapper img {
      grid-column: 8;
    }
    .nav-wrapper h1 {
      grid-column: 12;
      color:  #42b983;
      margin: 0;
      padding: 30px;
      align-items: center; 
    }
    .nav ul {
      display: block;
      margin: 0;
      padding: 2em 2em 2em 2em;
      list-style: none;
    }
    .nav li {
      margin-left: 0;
      margin-bottom: 1em;
    }
    /* Burger Icon */
    .nav-toggle-label { 
        color: #42b983;
        position: absolute;
        margin-left: 2em;
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
