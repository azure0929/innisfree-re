## '이니스프리 메인페이지 리디자인'

---

<br>

### • 배포 주소: [https://innisfree-main-redesign.netlify.app/](https://innisfree-main-redesign.netlify.app/)

<br>

#### - 작업 기간: 2021.05

#### - 리팩토링: 2024.01

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

<img src="https://github.com/azure0929/innisfree-main-redesign/assets/128226527/d751903c-bca6-40c9-8434-87b828d49236" />

<br><br>

### 💻 주요 기능

---

- hover effect

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
