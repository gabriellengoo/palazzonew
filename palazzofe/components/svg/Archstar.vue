<template>
  <!-- <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 316 477"
    width="316"
    height="477"
  >
    <defs>
      <image width="316" height="477" id="img1" href="" />
    </defs>
    <style></style>
    <use style="opacity: 0.4" href="#img1" x="0" y="0" />
  </svg> -->
  <!--     width="28"
    height="28" -->

  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44 44"

    class="svgsize w-[2vw]"
  >
    <defs>
      <image
        width="44"
        height="44"
        id="img1"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAAXNSR0IB2cksfwAAAdRQTFRFAAAAHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bHR0bgLaYIQAAAJx0Uk5TAED6zHkSAyiS/+1WaG6zTFE86A0c8E8C6X2N3LVVQhtyrcvJr3svmz9eggaKlH+TnndYMD7duqewCuugBG/37tF+jlTe4DT9Sw8m/hn79kXhOLh44pXUAWz5yPK8Ir+uLPzS+OoX2FLmOvSXu22P59PlwtoFkIGIPaoOxRV0EWC+kcPAENc2ekML76tB32U1MwlaSIzOn1wMKZnBzimvbAAAAzJJREFUeJyNlWtIVEEUx89xvXd1NR+5IT21TDQjLQXLNFPzkUVQGVlEVFhigWWBrEogiYWJUJYQKhQRRBg9iMhHZiWKipGVZWWhFvbQFNfysd7Vtpn72F3Xu5vnwzn/Ofc3Z+bO3LmDYGlITT8jzT+akWF5enR2MDHnKbD/M1sYXPTADksjqbS2YXcdOOKgoNWI/TZhTxwGtx9iYwH+4mzBsGgQHEdEZPHAvK/msBcK1inBfuSx1wdBr+hZ2mGCV2KHUmhxHuL0Vn0G8H0j6KBOv1cmeM2wG+Kw21ue6hqgYS0Bg5p5IgzbghtNcMTQO+oRW0kI7aYTDG0nHZ7xRHQzhNXNfMGQ7nHiJ6KfAMSSWhGPaTK+Vgne72VWQxnSRnwkViXSojhG3BZtG8TgQ7ml8/etJT5O51hDQsJ9gB19pHviXZCDIekR9Vv5UtsqkhFJB9AZ5GF21z0adtJaSYi3aWP3dZCH4SDekuRevEnDPiy3gNllrMqB4dxZVnVjeu+J4BfSqHoe9mAnxkHeIr1LJankYVeFNRTimvuN2oHCcyatoXAArxi18xSBnf6S2vZOrMrg0mjBHsJerpJXnhxB9cgwBkbB9vGpRPZnq9KiQ7h/6xg3OkkOmd0o2jOKEeOT9J5aq1M6fBlQweikZrJnuVXUcYrURjtmQmLVV62hqRUcPb6IjHjUIKDbAknRqntqwvW6Ma5LYEzbvfk5H9JMq3UMi6b3NsKJLXRnYgIafO6QGMu/aHqhFVhzibgE/wLIoPub8bKe+D3famThHO01gFOYD7C9mjTjA/kZzE3Jk4NzyYia6iaiVPRTj6o8U0DT2ZVNMnD2RdivPkdVXAPZtlppIXPw9Ez4bH5MeA6volrIopWQZV/dQP8A4bFZNHteYwYX5uZlCmrda4DAFqqKhKoaF8TBcs1JE7y+bWOVoAI/ASxv52Vx/VPxS0/1OW5WWcFOiveI/xeAJR/FdEQy1m36vhC5E+ZzLsm8kCYo9mgZePSCnElw6YMNWaKcrwVXQ58tGMrwiKg8DOPgMGQTLs413jOuHDC/bcLmRo6w2fH5DwxOBmqcZdrKBcTwtGX2HwbF9DwJPvj8AAAAAElFTkSuQmCC"
      />
    </defs>
    <style></style>
    <use href="#img1" x="0" y="0" />
  </svg>

  <!-- <svg width="314" height="478" viewBox="0 0 314 478" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M154.5 0.0117052C40.9 1.21171 4.16667 91.1784 0 136.012V477.512H313.5V136.012C307.833 90.1784 268.1 -1.18829 154.5 0.0117052Z" fill="#D9D9D9"/>
</svg> -->
</template>

<style scoped>

.svgsize{
  width: 2vw;
}

@media only screen and (max-width: 768px) {
  .svgsize{
  width: 8vw;
}

}
</style>
