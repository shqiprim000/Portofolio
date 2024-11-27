<script setup lang="ts">
</script>

<template>
  <div class="about__me-section">
    <div class="about_me_header">
      <h2>ABOUT ME</h2>
    </div>
    <div class="about__me_description">
      <div class="about__me_title">
        <h3>I'm <span>Shqiprim Veseli</span>, Web Developer</h3>
      </div>
      <div class="about__me_text">
        <p>
          I am a motivated web developer with nearly a year of experience specializing in Laravel and Vue.js.
          My passion for coding drives me to constantly improve my skills and stay updated with the latest technologies.
          I enjoy tackling challenging problems and building efficient, user-friendly applications that deliver a seamless experience.
          With a strong foundation in web development, I am eager to contribute my expertise and creativity to exciting projects.
        </p>
      </div>

      <div class="what_i_do-container">
        <div class="card">
          <h4>Frontend Development</h4>
          <p>
            Specializing in crafting dynamic and responsive user interfaces with Vue.js, I focus on creating seamless user experiences through intuitive design and efficient state management. My skills include utilizing Vue Router for smooth navigation, Vuex for centralized state management, and integrating modern CSS frameworks like Tailwind CSS for visually appealing layouts. I prioritize performance optimization and accessibility to ensure applications are user-friendly across all devices.
          </p>
        </div>

        <div class="card">
          <h4>Laravel Development</h4>
          <p>
            Proficient in building robust web applications using Laravel, I utilize features like Eloquent ORM for efficient database management and Blade templating for dynamic views. I implement RESTful routes, ensure application security, and follow best practices to create maintainable code. My experience includes leveraging Laravel’s ecosystem for authentication and caching, streamlining the development process for seamless deployments.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

@import '../assets/defaultValue.scss';

.about_me_header {
  padding: 34px;
  text-align: center;
  background-color: black;
  margin-bottom: 32px;
  border-radius: 10px;

  h2 {
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 2px;
    font-family: 'Arial', sans-serif;
    color: #fbbf24;

    @media (min-width: 768px) {

      font-size: 60px;
    }
  }
}

.about__me_description {
  .about__me_title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 16px;

    span {
      font-weight: bold;
      color: $white-color;
      background-color: $yellow-color ;
      padding: 2px 5px;
      border-radius: 4px;
    }
  }

  .about__me_text {
    text-align: center;
    margin-bottom: 32px;
    line-height: 1.6;
    font-size: 18px;
    color: #555;
  }

  .what_i_do-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40px;

    @media screen and (min-width: 769px) {
      flex-direction: row;

    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;

      text-align: center;
      //border: 2px solid #e8ac1a;

      h4 {
        margin: 10px 0;
        color: black;
      }

      p {
        color: #777;
      }

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
      }
    }
  }
}
</style>
