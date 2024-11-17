<script>
</script>

<template>
  <div class="resume__modul">
    <div class="resume__title-container">
      <h2>RESUME</h2>
    </div>
    <div class="resume__content-container">
      <!-- Education Section -->
      <div class="education__container">
        <h3 class="headline">EDUCATION</h3>
        <div class="cards">
          <!-- Probit Academy Card -->
          <div class="card">
            <div class="attendance__years">
              <span>2022 - 2023</span>
            </div>
            <h2 class="card-title">Probit Academy</h2>
            <div class="card-text">
              Completed a foundational program in web development at Probit Academy, focusing on key technologies and concepts such as PHP (OOP), JavaScript, Vue.js, and Laravel. Gained hands-on experience in building dynamic web applications and understanding modern development workflows.
            </div>
          </div>
          <!-- UPT Card -->
          <div class="card">
            <div class="attendance__years">
              <span>2024 - ...</span>
            </div>
            <h2 class="card-title">University of (UPT)</h2>
            <div class="card-text">
              Currently pursuing a Bachelor's degree in Computer Science at the (UPT). In the first year of studies, focusing on foundational subjects in programming, algorithms, and computer systems.
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="experience__container">
        <h3 class="headline">EXPERIENCE</h3>
        <div class="cards">
            <div class="card">
            <div class="attendance__years">
                <span>2024- 2025</span>
            </div>
            <h2 class="card-title">Starlabs </h2>
            <div class="card-text">
                At Star Labs, I contributed as a front-end web developer, focusing on building and maintaining robust web applications using Vue.js. I collaborated closely with the backend team to develop and enhance a Customer Relationship Management (CRM) system and a Price Management platform. My primary responsibilities included:

                Developing dynamic and responsive user interfaces to deliver seamless user experiences.
                Implementing reusable and scalable components in Vue.js to streamline project development.
                Collaborating with designers and backend developers to ensure the alignment of functionality and design.
                Optimizing the front-end for performance and accessibility across various devices and browsers.
                Enhancing user interaction with modern front-end techniques and best practices.
                This experience sharpened my skills in building single-page applications (SPAs) and strengthened my expertise in Vue.js, Tailwind CSS, and JavaScript.
            </div>
            </div>
        </div>    
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.resume__title-container {
  padding: 16px;
  border-radius: 10px;
  border: 3px dotted rgb(153, 149, 149);
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2{

    font-size: 40px;
    font-weight: bold;
  }
}

.education__container{

    margin-bottom: 24px;
}

  .cards {
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media (min-width: 768px) {
    flex-direction: row;
      gap: 24px;
    }

    .card {
      width: 95%;
      display: flex;
      flex-direction: column;
      gap: 8px;

      .attendance__years {
        background-color: #fbbf24;
        padding: 4px 8px;
        border-radius: 4px;
        width: 130px;

        span {
          color: white;
        }
      }

      h2 {
        font-size: 20px;
        font-weight: bold;
      }

      .card-text {
        color: gray;
      }
    }
  }


.headline {
  font-size: 24px;
  font-weight: bold;
}
</style>
