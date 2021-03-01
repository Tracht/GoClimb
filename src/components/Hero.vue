<template>
   <div class="hero">
       <div class="hero__container">

           <div class="hero__container--left">
            <h1>Don't miss the best routes.</h1>
            <h2>Plan your next climb here.</h2>
            <p>Sign up now</p>
           </div>

           <div class="hero__container--right">
              <img class="hero__container--img" src="../assets/climbing.jpg" alt="Rock climber">
           </div>
        </div>

   </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {},
};
</script>

<style>
.hero {
    width: 100%;
}

.hero__container {
    display: grid; 
    grid-template-columns: 6fr;
    align-items: center;
    justify-items: center;
    z-index: 1;
    width: 100%;
    padding-right: 24px;
    padding-left: 24px;
}

.hero__container--left {
    grid-column-start: 1;
    grid-column-end: 3;
    padding-top: 75px; 
    width: 100%;
    line-height: 1;
    z-index: 1000;
}

.hero__container--right {
    grid-column-start: 4;
    grid-column-end: 6;
    width: 100%;
    margin-top: 100px;
}

.hero__container--img{
 
}

.hero__container--left h1 {
    font-size: 4rem;
    text-align: left;
}

.hero__container--left h2 {
    font-size: 4rem;
    text-align: left;
    color: #42b983;
}

.hero__container--left p {
    font-size: 2rem;
    text-align: left;
}

@media screen and (max-width: 760px) {
   .hero__container { 
       padding-top: 75px; 
       grid-template-columns: 1fr;
       height: 100%;
   }
   .hero__container--left { 
       padding: 5rem 0;
       line-height: 1.2;
   }

}
 
@media screen and (max-width: 375px) {
   .hero__container { 
       grid-template-columns: 1fr;
       height: 100%;
   }
   .hero__container--left { 
       line-height: 1.5;
   }
}

</style>
