<template>
  <section class="sign-up">
    <form class="modal-form" action="">
      <h3>
        {{ $t('sign_up.title') }}
      </h3>
      <input type="email" placeholder="E-mail">
      <input v-b-tooltip.hover.right :title="$t('sign_up.password.tooltip')" type="text" :placeholder="$t('sign_up.password.placeholder')">
      <input type="text" :placeholder="$t('sign_up.password_confirmation.placeholder')">
      <button>
        {{ $t('sign_up.submit_button') }}
      </button>
      <div class="social-media-caption">
        <span>
          {{ $t('sign_up.social_media_caption') }}
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
        {{ $t('sign_up.sign_in_caption') }} <a href="#">{{ $t('sign_up.sign_in_link') }}</a>
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  form {
      width: 450px;
      height: 493px;
      background: rgba(0, 0, 0, 0.568);
      text-align: center;
      color: $white;

      h3 {
          margin: 1.15em 0 0 0;
          font-weight: 200;
          font-size: 25px;
      }

      input {
          width: 76%;
          height: 36px;
          margin-top: 2em;
          font-size: 15px;
          line-height: 18px;
          letter-spacing: 0.012em;
          border: 2px solid transparent;
          border-radius: 3px;
          padding: 0 0 0 13px;

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
          margin-top: 1.24em;
          font-weight: 200;
          font-size: 20px;
          line-height: 29px;
          font-family: Roboto;
          color: $white;
      }
  }

  .social-media-caption {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1.55em auto 1.6em;
      width: 80%;

      &:before, &:after {
          content: '';
          display: block;
          width: 28%;
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

  .social-media-list {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 48%;

      a {
          font-size: 30px;
          color: $white;

          [data-icon="twitter"], [data-icon="linkedin-in"] {
            margin-top: 5px;
          }

      }
  }

  .sign-in-caption {
      font-size: $font-small;
      line-height: 12px;
      margin-top: 2.1em;

      a {
        color: $highlight-color;
        text-decoration: none;
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

    .social-media-caption {
      &:before, &:after {
        width: 24%;
      }
    }

    .social-media-list {
        width: 60%;
    }
  }
}
</style>
