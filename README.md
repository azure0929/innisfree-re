## '이니스프리 리뉴얼'

- 마우스 호버에 대한 스타일 변경 효과를 적용하여 사용자와 상호작용을 강조했습니다. <br>
- 비디오 요소를 활용하여 인트로 섹션에 동영상 배경을 적용했습니다. <br>
- 메인 페이지 디자인과 퍼블리싱 작업을 진행했습니다.

<br>

### • 배포 주소: [https://innisfree-main-redesign.netlify.app/](https://innisfree-main-redesign.netlify.app/)

<br>

#### - 작업 기간: 2021.05

#### - 리팩토링: 2024.09

#### - 반응형

<br>

### 기술 스택

Development

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
</p>

Config

<p>
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/></a>
</p>

Environment

<p>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>
</p>
<br>

### 전체 페이지

<img src="https://github.com/user-attachments/assets/37cab5c1-16f6-4503-bd27-cafa2d21e058" alt="전체 페이지" />

<br><br>

### 💻 주요 기능

---

- hover effect

```html
<!-- section : event -->
<section class="event">
  <h3>EVENT</h3>
  <div class="inner">
    <div class="content">
      <div class="photo">
        <img src="images/image-01.png" alt="블랙티 신제품" loading="lazy" />
        <img src="images/image-01-2.jpg" alt="블랙티 신제품-1" loading="lazy" />
      </div>
      <p>블랙티 신제품 스킨&로션 출시 기념!</p>
      <a href="#none">자세히보기</a>
    </div>
    <div class="content">
      <div class="photo">
        <img src="images/image-02.png" alt="그린티 씨드" loading="lazy" />
        <img src="images/image-02-2.jpg" alt="그린티 씨드-2" loading="lazy" />
      </div>
      <p>그린티 씨드 세럼 세트</p>
      <a href="#none">자세히보기</a>
    </div>
    <div class="content">
      <div class="photo">
        <img src="images/image-03.png" alt="진정크림" loading="lazy" />
        <img src="images/image-03-2.jpg" alt="진정크림-2" loading="lazy" />
      </div>
      <p>진정크림 출시 리뷰 이벤트</p>
      <a href="#none">자세히보기</a>
    </div>
  </div>
</section>

<!-- section : best -->
<section class="best">
  <h3>BEST</h3>
  <div class="inner">
    <div class="content">
      <div class="photo">
        <img
          src="images/image-04.png"
          alt="트루 마데카소사이드"
          loading="lazy"
        />
        <img
          src="images/image-04-2.jpg"
          alt="트루 마데카소사이드-2"
          loading="lazy"
        />
      </div>
      <p>트루 마데카소사이드 레드 진정크림</p>
      <a href="#none">자세히보기</a>
    </div>
    <div class="content">
      <div class="photo">
        <img src="images/image-05.png" alt="노세범 파우더" loading="lazy" />
        <img src="images/image-05-2.jpg" alt="노세범 파우더-2" loading="lazy" />
      </div>
      <p>노세범 파우더 쿠션</p>
      <a href="#none">자세히보기</a>
    </div>
    <div class="content">
      <div class="photo">
        <img src="images/image-06.png" alt="글로우 틴트" loading="lazy" />
        <img src="images/image-06-2.jpg" alt="글로우 틴트-2" loading="lazy" />
      </div>
      <p>글로우 틴트 립밤</p>
      <a href="#none">자세히보기</a>
    </div>
  </div>
</section>
```

```css
.photo {
  position: relative;
  height: 280px;
}
.photo img {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  transition: 0.5s;
}
.photo img:first-child {
  z-index: 1;
  opacity: 1;
}
.photo img:last-child {
  z-index: 0;
  opacity: 0;
}
.photo:hover img:first-child {
  z-index: 0;
  opacity: 0;
}
.photo:hover img:last-child {
  z-index: 1;
  opacity: 1;
}
```
