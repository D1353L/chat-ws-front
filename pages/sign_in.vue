<template>
  <section class="sign-in">
    <div class="form">
      <div class="bolts">
        <div class="bolt"></div>
        <div class="bolt"></div>
      </div>
      <h3 class="form-title">
        SAFE SIGN IN
      </h3>
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
      <p>
        You don’t need to waste your time on classic sign up.
      </p>
      <p>
        Just sign in through one of the social networks.
      </p>
      <div class="bolts bottom">
        <div class="bolt"></div>
        <div class="bolt"></div>
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
}

.form {
  width: 433px;
  height: 227px;
  background: rgba(0, 0, 0, 0.623);
  text-align: center;
  padding: 6px;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 0.225em;
    color: $white;
  }
}

.bolts {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.bolt {
  width: 9px;
  height: 9px;
  border-radius: 100px;
  background: rgb(207, 207, 207);
}

.form-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 200;
  font-size: 25px;
  line-height: 29px;
  color: $white;
  margin-top: 0.2em;
}

.social-media-list {
  width: 86%;
  margin: 2.2em auto 1.73em;
  display: flex;
  justify-content: space-between;
}
a {
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 57px;
  color: $white;

  [data-icon='google'] {
    margin-top: 0.083em;
  }
  [data-icon='facebook-f'] {
    margin-top: 0.06em;
  }
  [data-icon='twitter'] {
    margin-top: 0.15627em;
  }
  [data-icon='linkedin-in'] {
    margin-top: 0.1962em;
  }
  [data-icon='github'] {
    margin-top: 0.098em;
  }
}

.bottom {
  margin-top: 0.3em;
}
/* Media requests */
$breakpoint-tablet: 460px;
@media (max-width: $breakpoint-tablet) {
  .sign-in {
    .form {
      width: 90%;
    }
  }
}
</style>
