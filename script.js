const data = [
  { img: "/public/images/people.svg", text: "People Counting" },
  { img: "/public/images/animal.svg", text: "Animal Detecting" },
  { img: "/public/images/face.svg", text: "Face Detection" },
  { img: "/public/images/emotion.svg", text: "Emotion Analysis" },
  { img: "/public/images/gun.svg", text: "Weapon Detection" },
];

let index = 0;
const image = document.getElementById("image");
const text = document.getElementById("text");

function updateContent() {
  image.classList.remove("fade-out");
  text.classList.remove("fade-out");
  image.classList.add("fade-in");
  text.classList.add("fade-in");

  setTimeout(() => {
    image.classList.remove("fade-in");
    text.classList.remove("fade-in");
    image.classList.add("fade-out");
    text.classList.add("fade-out");
  }, 2500);

  setTimeout(() => {
    image.src = data[index].img;
    text.textContent = data[index].text;

    index = (index + 1) % data.length;
  }, 2700);
}

setInterval(updateContent, 3000);


const change = [
  { title: "Collect data", text: "Collect data for computer vision annotation with Viso Suite. Use automated collection capabilities to gather high quality training data. Control and secure all data collection. Enable continuous data collection to further improve your AI models.", link1: "Remote recording", link2: "Automated capture", link3: "Data connectors", img: "/public/images/collect.svg" },
  { title: "Annotate data", text: "Annotate image and video data with Viso Suite. Bring teams together to create high-quality datasets using a complete palette of automated and semi-automated labeling tools. Your data never leaves your workspace, keep everything safe and stay in control.", link1: "Video Annotation", link2: "Annotation Workforce", link3: "Multiple Environments", img: "/public/images/big-annote.svg" },
  { title: "Train AI models", text: "Manage AI models of all frameworks in one place. Make them available to be used in applications. Import AI models by choosing from pre-trained deep learning models. Train custom AI models in modular environments. Continuously improve your AI models.", link1: "Train Neural Networks", link2: "AI Model Manager", link3: "Pre-trained Models", img: "/public/images/big-train.svg" },
  { title: "Secure and protect", text: "Baqyla provides enterprise-grade security for the entire computer vision lifecycle. Unify user authorization and authentication across all systems. Protect your AI models and applications from theft and loss. Run automated dependency and vulnerability scans. Enforce highest security encryption and lock down Edge endpoints.", link1: "Unified Access Management", link2: "Zero Trust Security", link3: "Active Edge Defender", img: "/public/images/big-secure.svg" },
  { title: "Monitor analytics", text: "Monitor events and metrics in the cloud. Viso Suite provides real-time analytics with time-series databases. Monitor detailed hardware metrics at device level. Build custom BI dashboards and reports with ready-made charts. Explore and drill-down data, and build custom queries. Use data connectors to integrate your BI systems.", link1: "Event monitoring", link2: "Custom Dashboards", link3: "Timeseries data", img: "/public/images/big-monitor.svg" },
  { title: "Automatisation cameras", text: "Build high-performance computer vision pipelines. Wire together modular building blocks that represent cameras, AI models, image processing functions, and processing hardware. Integrate existing systems seamlessly, future-proof your computer vision applications.", link1: "Drag-and-Drop Pipelines", link2: "Hardware Independent", link3: "Modular integration", img: "/public/images/big-automate.svg" },
];

document.querySelectorAll(".section-3-choice").forEach((e, index) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".section-3-choice").forEach(i => i.classList.remove("choice"));
    e.classList.add("choice");

    const title = change[index].title;
    const text = change[index].text;
    const link1 = change[index].link1;
    const link2 = change[index].link2;
    const link3 = change[index].link3;
    const img = change[index].img;

    document.getElementById("title").textContent = title;
    document.getElementById("info").textContent = text;
    document.getElementById("link1").textContent = link1;
    document.getElementById("link2").textContent = link2;
    document.getElementById("link3").textContent = link3;
    document.getElementById("picture").src = img;
  });
});