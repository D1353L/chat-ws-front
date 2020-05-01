<template>
  <div class="sign-in">
    <div class="form">
      <div class="bolts">
        <div class="bolt"></div>
        <div class="bolt"></div>
      </div>
      <h3 class="form-title">
        SAFE SIGN IN
      </h3>
      <div class="social-media-list d-flex">
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.sign-in {
  .form {
    width: 481px;
    height: 253px;
    background: rgba(0, 0, 0, 0.623);
    text-align: center;
    padding: 7px;
  }
  .bolts {
    display: flex;
    justify-content: space-between;
  }
  .bolt {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background: rgb(207, 207, 207);
  }
  .form-title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 27.3px;
    line-height: 29px;
    color: $white;
    margin-top: 0.3em;
  }
  .social-media-list {
    width: 85%;
    margin: 2.65em auto 2.4em;
    justify-content: space-between;
  }
  a {
    font-style: normal;
    font-weight: normal;
    font-size: 350%;
    line-height: 57px;
    color: $white;

    [data-icon='twitter'],
    [data-icon='linkedin-in'] {
      margin-top: 0.1em;
    }
  }
  .form p {
    font-style: normal;
    font-weight: 300;
    font-size: 13.35px;
    line-height: 14px;
    margin: 0 0 0.3em;
    color: $white;
  }
  .bottom {
    margin-top: 0.5em;
  }
}
</style>
