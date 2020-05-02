<template>
  <section class="sign-in">
    <div class="sign-in-container">
      <div class="circles-container circles-container-top">
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
$container-width: 433px;

.sign-in {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .sign-in-container {
    width: $container-width;
    height: 227px;
    background: rgba(0, 0, 0, 0.623);
    text-align: center;
    position: relative;

    p {
      font-weight: 300;
      font-size: $font-small;
      margin-bottom: 0.1em;
      color: $white;
    }

    .circles-container {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px;
      left: 0;

      .circle {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: $light-gray;
      }
    }

    .circles-container-top {
      top: 0;
      padding-bottom: 0;
    }

    .circles-container-bottom {
      bottom: 0;
      padding-top: 0;
    }

    .title {
      font-weight: 100;
      font-size: $font-medium;
      color: $white;
      margin-top: 0.8em;
    }

    .social-media-list {
      width: 83.5%;
      margin: 2.1em auto 2em;
      display: flex;

      a {
        flex-grow: 1;
        font-size: $font-large;
        color: $white;
      }
    }
  }
}

@media (min-width: $container-width) {
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

  a + a {
    margin-left: 9%;
  }
}

@media (max-width: $container-width) {
  .sign-in {
    width: 100vw;
    height: 100vh;

    .sign-in-container {
      width: 100%;
      height: 100%;
      padding: 10px;

      .title {
        margin-top: 1.15em;
        font-size: 7vw;
      }

      .social-media-list {
        flex-direction: column;
        height: 70%;
        margin: 2.6em auto -0.3em auto;

        a {
          font-size: 8vh;
        }

        [data-icon='facebook-f'] {
          margin-top: 0.05em;
          margin-left: 0.05em;
        }
        [data-icon='twitter'] {
          margin-top: 0.05em;
        }
        [data-icon='linkedin-in'] {
          margin-top: -0.05em;
          margin-bottom: -0.1em;
        }
        [data-icon='github'] {
          margin-bottom: 0.1em;
        }
      }

      p {
        margin-bottom: 0.2em;
        font-size: 3.33vw;
      }

      .circles-container-bottom {
        margin-top: 2.8em;
      }
    }
  }
}
</style>
