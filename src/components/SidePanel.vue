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
            <img class="item" src="@//assets/images/avatar.png" alt="" />
            <img class="item" src="@/assets/images/descargar.png" alt="" />
            <img class="item" src="@/assets/images/imagen.png" alt="" />
            <img class="item" src="@/assets/images/calendario.png" alt="" />
            <img class="item" src="@/assets/images/top.png" alt="" />
            <img class="item" src="@/assets/images/tiempo.png" alt="" />
          </div>
          <img class="item last-item" src="@/assets/images/confi.png" alt="" />
        </div>
      </div>
      <div class="app-content">
        <div class="search-bar">
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
        <h1>Hola</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-content {
  width: calc(100% - 200px);
  height: 100%;
  padding: 40px;
  .search-bar {
    display: flex;
    height: 100%;
    input {
      width: 100%;
    }
  }
}

.nav-items {
  margin: auto 0;
}

.item {
  margin: 35px;
}

.last-item {
}
</style>
