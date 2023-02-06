<script>
import * as $ from "jquery";

export default {
  data() {
    return {
      expire: null,
      productFilter: null,
      change: false,
    };
  },
  mounted() {
    this.getMobileOperatingSystem();
  },
  methods: {
    getMobileOperatingSystem() {
      if ("product" in this.$route.query) {
        this.productFilter = this.$route.query.product;
      }

      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (/windows phone/i.test(userAgent)) {
        this.expire = "Windows Phone";
        return;
      }

      if (/android/i.test(userAgent)) {
        this.expire = "Android";
        var deeplinkUrl = `https://com.myunitel`;
        var that = this;

        $(window).on("focus", function () {
          that.change = true;
        });

        $(window).on("blur", function () {
          that.change = true;
        });

        setTimeout(() => {
          if (!that.change) {
            var redirectUrl =
              "https://play.google.com/store/apps/details?id=com.myunitel.activities";
            window.location = redirectUrl;
          }
        }, 3000);

        window.location = deeplinkUrl;
        return;
      }

      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        this.expire = "iOS";
        var deeplinkUrl = `com.myunitel://`;
        var that = this;

        setTimeout(() => {
          if (!that.change) {
            var redirectUrl =
              "https://apps.apple.com/mn/app/unitel/id591293253";
            window.location = redirectUrl;
          }
        }, 3000);

        window.location = deeplinkUrl;

        window.onblur = function () {
          that.change = true;
        };

        window.onfocus = function () {
          that.change = false;
        };
        return;
      }
      this.expire = "unknown";
      return;
    },
  },
};
</script>

<template>
  <div
    v-if="expire === 'unknown'"
    class="h-screen bg-[url('/img/bg_logo.png')] bg-contain bg-center bg-no-repeat">
    <div
      class="h-full w-full flex bg-gradient-to-tr from-[#0d00a4]/10 via-white/10 to-[#eef0f2]/10">
      <div class="flex mx-auto">
        <div class="w-[700px] flex flex-col">
          <div class="m-auto">
            <p class="text-center font-manrope-bold text-6xl">
              Аппликейшнээ Татаарай
            </p>
            <p class="px-8 py-16 font-thin text-xl">
              “Юнител” аппликейшнийг үргэлжлүүлэн ашиглах нь, хаанаас ч Юнител,
              Юнивишн, Гэр интернэт, IP77 зэрэг Юнител Группийн бүх төрлийн
              бүтээгдэхүүн, үйлчилгээ авах боломжтой.
            </p>
            <div class="flex">
              <div class="w-full flex">
                <a href="https://apps.apple.com/mn/app/unitel/id591293253">
                  <button>
                    <img
                      src="/img/app_store.png"
                      class="px-2 py-2 h-[80px] m-auto" />
                  </button>
                </a>
                <a href="https://apps.apple.com/mn/app/unitel/id591293253">
                  <button>
                    <img
                      src="/img/google_play.png"
                      class="px-2 py-2 h-[80px] m-auto" />
                  </button>
                </a>
                <a href="https://apps.apple.com/mn/app/unitel/id591293253">
                  <button>
                    <img
                      src="/img/huawei_store.png"
                      class="px-2 py-2 h-[83px] m-auto" />
                  </button>
                </a>
              </div>
              <!-- <div class="w-[50%]">
                <img src="/img/QR.png" class="h-48 mx-auto" />
              </div> -->
            </div>
          </div>
        </div>
        <div class="flex">
          <img src="/img/unitel_logo.png" class="h-[60%] px-8 m-auto" />
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="
      expire === 'iOS' || expire === 'Android' || expire === 'Windows Phone'
    "
    class="min-h-screen bg-[url('/img/color_bg_logo.png')] bg-scroll bg-top bg-no-repeat flex flex-col">
    <div class="flex flex-grow w-full">
      <div class="mx-auto">
        <div>
          <img src="/img/unitel_logo_word.png" class="h-[100px] py-5 m-auto" />
        </div>
        <div>
          <div>
            <p class="text-center font-manrope-bold text-4xl text-[#172A3A]">
              Аппликейшнээ Татаарай
            </p>
            <div class="py-16 flex flex-col">
              <a
                href="https://apps.apple.com/mn/app/unitel/id591293253"
                class="m-auto">
                <button>
                  <img src="/img/app_store.png" class="p-2 h-24" />
                </button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.myunitel.activities"
                class="m-auto">
                <button>
                  <img src="/img/google_play.png" class="p-2 h-24" />
                </button>
              </a>
              <a
                href="https://appgallery.huawei.com/app/C103204211"
                class="m-auto">
                <button>
                  <img src="/img/huawei_store.png" class="p-2 h-24" />
                </button>
              </a>
            </div>
            <p class="p-4 text-center font-thin max-w-3xl text-lg">
              “Юнител” аппликейшнийг үргэлжлүүлэн ашиглах нь, хаанаас ч Юнител,
              Юнивишн, Гэр интернэт, IP77 зэрэг Юнител Группийн бүх төрлийн
              бүтээгдэхүүн, үйлчилгээ авах боломжтой.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
