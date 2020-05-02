<template>
  <section class="sign-in">
    <div class="container">
      <div class="circles-container">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <h3 class="title">{{ $t('sign_in.title') }}</h3>
      <div class="social-media-list">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'google']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'linkedin-in']" />
        </a>
        <a href="#">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
      <p>{{ $t('sign_in.explanation1') }}</p>
      <p>{{ $t('sign_in.explanation2') }}</p>
      <div class="circles-container circles-container-bottom">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.sign-in {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 433px;
    height: 227px;
    background: rgba(0, 0, 0, 0.623);
    text-align: center;
    padding: 6px;

    p {
      font-weight: 300;
      font-size: $font-small;
      margin-bottom: 0.1em;
      color: $white;
    }

    .circles-container {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .circle {
        width: 9px;
        height: 9px;
        border-radius: 100px;
        background: $light-gray;
      }
    }

    .circles-container-bottom {
      margin-top: 0.3em;
    }

    .title {
      font-weight: 100;
      font-size: $font-medium;
      color: $white;
      margin-top: 0.2em;
    }

    .social-media-list {
      width: 86%;
      margin: 2.16em auto 2em;
      display: flex;

      a {
        flex-grow: 1;
        font-size: $font-large;
        color: $white;

        [data-icon='google'] {
          margin-top: 0.083em;
        }
        [data-icon='facebook-f'] {
          margin-top: 0.06em;
        }
        [data-icon='twitter'] {
          margin-top: 0.15627em;
          margin-left: -6%;
        }
        [data-icon='linkedin-in'] {
          margin-top: 0.18em;
        }
        [data-icon='github'] {
          margin-top: 0.098em;
        }
      }

      a + a {
        margin-left: 9%;
      }
    }
  }
}

/* Media requests */
$breakpoint-tablet: 460px;
@media (max-width: $breakpoint-tablet) {
  .sign-in {
    .container {
      width: 90%;
    }
  }
}
</style>
