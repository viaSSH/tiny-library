<template>
  <div class="md-layout md-gutter">
    <!-- <div class="md-layout-item md-size-50"> -->
    <!-- <div class="md-layout-item">
      <md-card>
        <md-card-media>
          <img src="http://image.yes24.com/Goods/97124596/L" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>
      </md-card>
    </div> -->
    <div class="md-layout-item">
      <md-card>
        <md-card-media-actions style="min-height: 350px;">
          <md-card-media>
            <img src="http://image.yes24.com/Goods/97124596/L" alt="Cover">
          </md-card-media>

          <md-card-header>
            <div class="md-title">시가 사랑을 데리고 온다</div>
            <div class="md-subhead">시인 나태주가 뽑은 명시</div>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>bookmark</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-media-actions>
      </md-card>
    </div>
    <div class="md-layout-item">
      <md-card>
        <md-card-media-actions style="min-height: 350px;">
          <md-card-media>
            <img src="http://image.yes24.com/Goods/97124596/L" alt="Cover">
          </md-card-media>

          <md-card-header>
            <div class="md-title">시가 사랑을 데리고 온다</div>
            <div class="md-subhead">시인 나태주가 뽑은 명시</div>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>bookmark</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-media-actions>
      </md-card>
    </div>
    <div class="md-layout-item">
      <md-card>
        <md-card-media-actions style="min-height: 350px;">
          <md-card-media>
            <img src="http://image.yes24.com/Goods/97124596/L" alt="Cover">
          </md-card-media>

          <md-card-header>
            <div class="md-title">시가 사랑을 데리고 온다</div>
            <div class="md-subhead">시인 나태주가 뽑은 명시</div>
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>bookmark</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-media-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalColumns'
  }
</script>

<style>
  /* @import "~vue-material/theme/engine"; */

  .md-layout-item {
    height: 40px;

    &:nth-child(1) {
      /* background: md-get-palette-color(grey, 300); */
      background: red;
    }

    &:nth-child(2) {
      /* background: md-get-palette-color(grey, 400); */
      background: blue;
    }

    &:nth-child(3) {
      /* background: md-get-palette-color(grey, 500); */
      background: yellow;
    }
  }
</style>
