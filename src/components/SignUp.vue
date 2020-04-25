<template>
  <section class="sign-up">
    <form class="modal-form" action="">
      <h3>
        SIGN UP
      </h3>
      <input type="email" placeholder="E-mail">
      <input type="text" placeholder="Password">
      <input type="text" placeholder="Password confirmation">
      <button>
        SIGN UP
      </button>
      <div class="social-media-caption">
        <span>
          or sign in with social media
        </span>
      </div>
      <div class="social-media-list d-flex">
        <a href="#" class="link-list__item">
          <font-awesome-icon :icon="[ 'fab', 'github' ]" />
        </a>
        <a href="#" class="link-list__item">
          <font-awesome-icon :icon="[ 'fab', 'google' ]" />
        </a>
        <a href="#" class="link-list__item">
          <font-awesome-icon :icon="[ 'fab', 'facebook-f' ]" />
        </a>
        <a href="#" class="link-list__item">
          <font-awesome-icon :icon="[ 'fab', 'twitter' ]" />
        </a>
        <a href="#" class="link-list__item">
          <font-awesome-icon :icon="[ 'fab', 'linkedin-in' ]" />
        </a>
      </div>
      <p class="sign-in-caption" >
        Already have an account? <a href="#">Sign in</a>
      </p>
    </form>
  </section>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sign-up {
    display: flex;
    margin: auto;
    justify-content: center;

  form {
      width: 450px;
      height: 493px;
      background: rgba(0, 0, 0, 0.568);
      text-align: center;
      color: $white;

      h3 {
          margin: 1.2em 0 0 0;
          font-weight: 200;
          font-size: 25px;
      }

      input {
          width: 75.7%;
          height: 36px;
          margin-top: 2em;
          font-size: 15px;
          line-height: 18px;
          border: 2px solid transparent;
          border-radius: 3px;
          padding: 0 0 0 15px;

          &:hover, &:focus, &:active {
              border: 2px solid $highlight-color;
              outline: none
          }
      }

      button {
          width: 80%;
          height: 40px;
          border: none;
          border-radius: 10px;
          margin-top: 1.25em;
          font-weight: 300;
          font-size: 20px;
          line-height: 29px;
          color: $white;
      }
  }

  .social-media-caption {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.56em auto;
      width: 80%;

      &:before, &:after {
          content: '';
          display: block;
          width: 22.2%;
          height: 0px;
          left: 396px;
          top: 455px;
          border: 0.5px solid $white;

      }
      span {
          font-size: $font-small;
          line-height: 12px;
      }
  }

  .social-media-list a {
    margin-right: 20px;
    font-size: 30px;
    color: $white;
  }

  .sign-in-caption {
      font-size: $font-small;
      line-height: 12px;
      margin-top: 2.2em;

      a {
        color: $highlight-color;
      }
  }
}
/* Media requests */
$breakpoint-tablet: 460px;
@media(max-width: $breakpoint-tablet){
  .sign-up {
    form {
      width: 90%
    }
  }
}
</style>
