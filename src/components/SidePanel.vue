<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-#F8F8F8 w-screen">
    <div class="app-container flex flex-row">
      <div class="side-panel">
        <div
          class="bg-#FFFFFF w-96px h-100vh text-center rounded-tr-20px rounded-br-20px m-0px p-x-15px"
        >
          <img class="p-30px" src="@/assets/images/Logo.png" alt="" />
          <hr class="" />
          <div class="nav-items">
            <RouterLink to="/app">
              <img class="item" src="/avatar.svg" alt="" />
            </RouterLink>
            <RouterLink to="/app/information">
              <img class="item" src="@/assets/images/descargar.png" alt="" />
            </RouterLink>
            <RouterLink to="/app/configuration">
              <img class="item" src="@/assets/images/imagen.png" alt="" />
            </RouterLink>
          </div>
          <img class="item last-item" src="@/assets/images/confi.png" alt="" />
        </div>
      </div>
      <div class="bg-#F6F6F6 app-content h-100%">
        <div class="search-bar p-40px">
          <img
            class="flex flex-row w-24px h-24px"
            src="@/assets/images/buscar.png"
            alt=""
          />
          <input
            class="bg-transparent w-45px h-20px b-0px ml-11px font-sans text-14px"
            placeholder="Search"
          />
        </div>
        <div class="main-view p-40px h-100%">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-content {
  width: calc(100% - 200px);
  .search-bar {
    display: flex;
    height: 100%;
    input {
      width: 100%;
    }
  }
  .main-view{
    height: calc(100vh - 200px);
  }
}

.nav-items {
  margin: auto 0;
  .item {
    margin: 35px;
  }
}
</style>
