<template>
<header class="nav-container"> 
    <!-- <h1 class="logo-text">Logo</h1> -->
    <img class="logo__img" src="../assets/sun-and-mountain-2.png" alt="Company logo - mountains">
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
<style scoped>

*, *::before, *::after {
  box-sizing: border-box;
}

/* Navigation */
.nav-container {
  background:  #2c3e50;
  text-align: center;
  position: fixed;
  z-index: 1001;
  width: 100%;
}

.nav {
  position: absolute;
  text-align: left;
  grid-column-start: 3;
  grid-column-end: 4;
  top: 100%;
  left: 0;
  background: #2c3e50;
  width: 100%;
  transform: scale(1, 0);
}

.logo-text {
  color:  #42b983;
}

.logo__img {
  grid-column-start: 2;
  grid-column-end: 3;
  z-index: 998;
  width: 100px;
  height: auto;
}

.nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav li {
  margin-bottom: 1em; 
  margin-left: 1em;
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

@media screen and (min-width: 769px) {
    .nav-toggle-label {
        display: none;
    }

    .nav-container {
        display: grid;
        grid-template-columns: 1fr 4fr; /* */
        /* grid-template-columns: 1fr auto minmax(800px, 1fr) 1fr; */
    }

    .logo {
        grid-column: 1 / 2;
    }

    .nav {
        all: unset; /* wont work for IE or Edge */
        grid-column: 3 / 5;
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

    .nav li {
        margin-left: 3em; 
        margin-bottom: 0;
    }
}

/* Hamburger Icon */
.nav-toggle {
        display: none;
}

@media screen and (max-width: 768px)  {
    .nav-toggle-label {
        color: #42b983;
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 1em;
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
