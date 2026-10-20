const LINKS = {
  demoReel: "https://youtu.be/ZtmmiQZFYa4?si=9cpd1Qa8R-iDkjSS",
  github: "https://github.com/kimdohyeon00/portfolio",
  gameplay1919: "https://youtu.be/ZtmmiQZFYa4?si=9cpd1Qa8R-iDkjSS",
  build1919: "#",
  room705Video: "https://youtu.be/YC2PbP2JRqc?si=_VuXCRjy3DeJiFX5",
  wantedVideo: "https://youtu.be/UGV2oSbSX5A?si=23KQMlkvFnxxxsMK",
  spidermanVideo: "https://youtu.be/FQjoJorQb2M?si=bBPkgIC69U02WawE",
  alienSoldierVideo: "https://youtu.be/poR_osfwICc?si=udZ3FOFjeON7tNfg",
  gwisamPdf: "assets/concept/gwisam_planning.pdf",
  aiVideo: "https://youtu.be/HFUd-dEekmo?si=o1UZS-bNFZ1y5BMe",
  westernVideo: "https://youtu.be/gJysqWBWjww?si=lX3oR3dwrTzTZrmI",
  mayaMuseumPdf: "assets/other-works/maya_museum.pdf",
  mayaBodyPdf: "assets/other-works/maya_body.pdf",
  mayaBikePdf: "assets/other-works/maya_bike.pdf",
  portfolioPdf: "assets/concept/gwisam_planning.pdf"
}

function isConnectedLink(url) {
  return url && url !== "#" && url.trim() !== "";
}

function openLink(key) {
  const url = LINKS[key];
  if (isConnectedLink(url)) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }
  openMessageModal(`아직 링크가 연결되지 않았습니다.<br><br><strong>${key}</strong> 값을 script.js의 LINKS에 넣어주세요.`);
}

document.querySelectorAll("[data-link]").forEach((button) => {
  button.addEventListener("click", () => openLink(button.dataset.link));
});

// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navMenu.classList.remove("open"));
  });
}

// Detail toggle
function toggleDetail(id) {
  const target = document.getElementById(id);
  if (!target) return;
  target.classList.toggle("open");
}

document.querySelectorAll("[data-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    toggleDetail(button.dataset.toggle);
    const panel = document.getElementById(button.dataset.toggle);
    const opened = panel?.classList.contains("open");
    button.textContent = opened ? "닫기" : "자세히 보기";
  });
});

// Reveal animation
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Media auto-loader
function loadMediaBox(box) {
  const src = box.dataset.src;
  const alt = box.dataset.alt || "Portfolio media";
  if (!src) return;

  const img = new Image();
  img.onload = () => {
    box.innerHTML = "";
    img.alt = alt;
    img.loading = "lazy";
    box.appendChild(img);
    box.classList.add("has-media");
  };
  img.onerror = () => {
    box.classList.remove("has-media");
  };
  img.src = src;
}

document.querySelectorAll(".media-box").forEach(loadMediaBox);

// Image modal
const modal = document.getElementById("mediaModal");
const modalMedia = document.getElementById("modalMedia");

function openMessageModal(message) {
  if (!modal || !modalMedia) return;
  modalMedia.innerHTML = `<div class="placeholder-inner"><span>${message}</span></div>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function openImageModal(src, alt) {
  if (!modal || !modalMedia) return;

  const img = new Image();
  img.onload = () => {
    modalMedia.innerHTML = "";
    img.alt = alt || "Portfolio media";
    modalMedia.appendChild(img);
  };
  img.onerror = () => {
    modalMedia.innerHTML = `<div class="placeholder-inner"><span>이미지 파일을 찾을 수 없습니다.<br><strong>${src}</strong><br><br>assets 폴더에 같은 이름으로 파일을 넣어주세요.</span></div>`;
  };
  img.src = src;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  if (!modal || !modalMedia) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalMedia.innerHTML = "";
}

document.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

document.querySelectorAll(".media-click").forEach((box) => {
  box.addEventListener("click", () => {
    const src = box.dataset.src;
    if (!src) return;
    openImageModal(src, box.dataset.alt);
  });
});

// Gwisam gallery thumbnails
const conceptMain = document.querySelector(".concept-main");
document.querySelectorAll(".thumb").forEach((thumb) => {
  const change = () => {
    if (!conceptMain) return;
    document.querySelectorAll(".thumb").forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
    conceptMain.dataset.src = thumb.dataset.src;
    conceptMain.dataset.alt = thumb.dataset.title || "귀삼 이미지";
    conceptMain.innerHTML = `<div class="placeholder-inner"><strong>${thumb.dataset.title || "귀삼 이미지"}</strong><span>${thumb.dataset.src}</span></div>`;
    loadMediaBox(conceptMain);
  };
  thumb.addEventListener("click", change);
  thumb.addEventListener("mouseenter", change);
});
