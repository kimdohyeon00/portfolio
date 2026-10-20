# 김도현 웹 포트폴리오 v2

밝고 부드러운 Apple 스타일의 1페이지 웹 포트폴리오입니다.  
이미지와 영상은 아직 없어도 회색 Placeholder로 보이며, 파일명만 맞춰 넣으면 자동으로 표시됩니다.

## 1. 파일 구조

```text
kdh_portfolio_v3/
├─ index.html
├─ style.css
├─ script.js
└─ assets/
   ├─ profile/
   ├─ projects/
   ├─ virtual-production/
   ├─ other-works/
   └─ concept/
```

## 2. 먼저 확인하는 방법

압축을 푼 뒤 `index.html`을 더블클릭하면 브라우저에서 확인할 수 있습니다.

## 3. 이미지/GIF 넣는 위치

파일명을 아래와 같이 맞추면 자동으로 Placeholder가 실제 이미지/GIF로 바뀝니다.

```text
assets/profile/profile.jpg

assets/projects/1919_main.jpg
assets/projects/1919_interaction.gif
assets/projects/1919_inventory.gif
assets/projects/1919_use_inventory.gif
assets/projects/1919_door_lock.gif
assets/projects/1919_altar_puzzle.gif
assets/projects/room705_main.jpg

assets/virtual-production/vp_wanted_main.jpg
assets/virtual-production/vp_spiderman_thumb.jpg
assets/virtual-production/vp_alien_soldier_thumb.jpg

assets/concept/gwisam_main.jpg
assets/concept/gwisam_concept_01.jpg
assets/concept/gwisam_ui.jpg
assets/concept/gwisam_extra.jpg

assets/other-works/maya_01.jpg
assets/other-works/ai_video_thumb.jpg
assets/other-works/western_edit_thumb.jpg
```

## 4. 외부 링크 넣는 위치

`script.js` 맨 위의 `LINKS` 값을 수정하면 됩니다.

```js
const LINKS = {
  demoReel: "#",
  github: "#",
  gameplay1919: "#",
  build1919: "#",
  room705Video: "#",
  wantedVideo: "#",
  spidermanVideo: "#",
  alienSoldierVideo: "#",
  gwisamPdf: "#",
  aiVideo: "#",
  westernVideo: "#",
  portfolioPdf: "#"
};
```

예시:

```js
github: "https://github.com/kdhgo619",
gameplay1919: "https://youtu.be/영상주소",
gwisamPdf: "https://drive.google.com/기획서주소"
```

## 5. GitHub Pages 업로드 방법

1. GitHub에서 새 Repository 생성: `portfolio`
2. 압축 푼 폴더 안의 `index.html`, `style.css`, `script.js`, `assets` 폴더를 업로드
3. Repository → Settings → Pages
4. Source: Deploy from a branch
5. Branch: main / root 선택 후 Save
6. 잠시 후 `https://kdhgo619.github.io/portfolio/` 형태의 주소 생성

## 6. 주의

- `kdh_portfolio_v3` 폴더 자체를 GitHub에 넣지 말고, 그 안의 파일들이 Repository 첫 화면에 바로 보여야 합니다.
- 영상 원본은 용량이 크면 YouTube 또는 Google Drive에 올리고, 버튼 링크만 연결하는 것을 추천합니다.


## v3 수정사항

- 버튼 문구를 한국어 중심으로 통일했습니다.
- 상세 버튼은 모두 `자세히 보기 / 닫기`로 동작합니다.
- 이미지/GIF는 카드 안에서 바로 보이고, 클릭하면 확대됩니다.
- 기술 스택에 Devicon 기반 아이콘을 적용했습니다. 인터넷 연결이 없으면 일부 아이콘이 보이지 않을 수 있습니다.
- 제목 줄바꿈과 카드 비율, 그림자, 버튼 스타일을 더 세련되게 조정했습니다.


## v4 수정 메모
- 1919 대표 이미지, Room705 대표 이미지, 귀삼 이미지, Maya 작업 이미지는 이미지 파일로 사용합니다.
- 그 외 영상형 자료는 GIF 파일로 넣는 구조입니다.
- Maya PDF 링크는 `script.js`의 `mayaMuseumPdf`, `mayaBodyPdf`, `mayaBikePdf`에 넣으면 됩니다.
- Hero의 Demo Reel, GitHub, Email 버튼명은 영어 표기로 유지했습니다.
