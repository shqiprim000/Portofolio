<template>
  <div class="contact__container">
    <div class="title">
      <h1>CONTACT ME</h1>
    </div>

    <div class="contact_content">
      <div class="contact_header">
        <h2 class="contact_header_title">
          Feel <span>free</span> to get in touch
        </h2>
        <p class="contact_header_description">
          I’m always open to discussing your projects, creative ideas, or
          opportunities to be part of your vision. Let’s connect!
        </p>
      </div>

      <div class="contact_details">
        <p><strong>Email:</strong> <a href="mailto:your.email.com">shqiprimveseli1122@gmail.com</a></p>
        <p><strong>Phone:</strong> +383-(49)-303-704</p>
        <p><strong>LinkedIn:</strong> <a href="www.linkedin.com/in/shqiprim-veseli" target="_blank">linkedin.com/in/yourprofile</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/shqiprim000" target="_blank">github.com/shqiprim000</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../assets/defaultValue.scss';

.contact__container {
  padding: 32px;
  background-color:$black-color;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: auto;
  

  .title {
    margin-bottom: 24px;
    text-align: center;

    h1 {
      font-size: 36px;
      font-weight: 700;
      color: $white-color;
    }
  }

  .contact_content {
    .contact_header {
      text-align: center;
      margin-bottom: 24px;

      .contact_header_title {
        font-size: 28px;
        font-weight: 600;
        color:$white-color;

        span {
          color: $yellow-color;
        }
      }

      .contact_header_description {
        font-size: 16px;
        color: $white-color;
        margin-top: 8px;
      }
    }

    .contact_details {
      font-size: 16px;
      color: $white-color;

      p {
        margin: 8px 0;

        a {
          color: $yellow-color;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
