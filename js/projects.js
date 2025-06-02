const projects = {
  0: {
    projecthead: "H.E.D.I.S",
    projectphoto: "images/bike.jpg",
    projecttext: "H.E.D.I.S (Helmet Detection Ignition System) is a rider safety system I developed over the span of a year with ₹1,00,000 seed funding from my uni. It uses YOLOv5 Object Detection integrated via Flask backend and a custom web front end to detect helmet usage in real time. If the rider isn’t wearing a helmet, the bike responds by gradually reducing speed with escalating alerts. I built an entire electric bike from scratch to house the HEDIS module, and it’s been fully road tested. The system is now being considered for deployment within the uni campus. This wasn’t just a prototype. It was a proof of what one idea can become when taken all the way."
  },
  1: {
    projecthead: "Online Board Game",
    projectphoto: "images/game.jpg",
    projecttext: "An online multi player board game I developed from scratch using full stack web dev skills. Built on Express with PgAdmin handling the database, it features real time gameplay powered by Web Sockets, alongside Bootstrap, HTML, CSS, and JavaScript for a custom designed interface. Players can sign up with a secure auth mechanism, store progress in a dedicated user database, create private rooms to challenge friends, or go head-to-head with an AI opponent powered by the Mini max algorithm. Every UI element was designed by hand for a clean, intuitive experience."
  },
  2: {
    projecthead: "Coral Analyzer",
    projectphoto: "images/coral.jpg",
    projecttext: "Coral Aura is a coral health analyzer web app I built using a custom trained YOLOv8 binary classifier on a dataset of 5000 images featuring healthy and bleached corals. The backend runs on Flask, enabling users to upload coral images and receive a percent breakdown of health vs. bleaching. Beyond the detection, the site also serves curated info on coral eco systems, all wrapped in a nicely crafted user interface. It’s not just a tool. It’s an experience built to blend insights with clean, responsive design."
  },
  3: {
    projecthead: "Crop Radar",
    projectphoto: "images/crop.png",
    projecttext: "Crop Radar was my first freelance project back in university. A fullstack web app built to simulate various crop field tasks. The platform features three interactive modules. The first simulates field condition analysis using a decision tree trained on a nutrient dataset, letting users input values and see real time classification in action. The second module simulates drone selection and deployment. The third offers insights into a few common crops and their diseases. With a lightweight backend and a clean, intuitive UI, Crop Radar is more about interaction and user experience than heavy computation. But it packs a solid agri-tech punch."
  },
  4: {
    projecthead: "E.L.Y.R.A",
    projectphoto: "images/elyra.png",
    projecttext: "E.L.Y.R.A (Elastic Learning Yield for Resource Allocation) is a smart system I’ve been building that uses AI to manage and improve how 5G networks work. It’s all about making things faster, smoother, and more efficient. The image above is AI-generated and just gives a rough idea. The real stuff is still under wraps because ELYRA is in active development right now. Full details are kept Classified until it’s ready to be revealed. But yeah, this one’s special. Stay tuned!"
  }
};

let currentIndex = 0;
let currentIndex2 = 1;

function fadeUpdateContent(index, ids) {
  const [p1, p2, p3] = ids.map(id => document.getElementById(id));

  // Fade out
  [p1, p2, p3].forEach(el => el.style.opacity = 0);

  setTimeout(() => {
    p1.textContent = projects[index].projecthead;
    p2.style.backgroundImage = `url('${projects[index].projectphoto}')`;
    p2.style.backgroundSize = "contain";
    p2.style.backgroundRepeat = "no-repeat";
    p2.style.backgroundPosition = "center";
    p3.textContent = projects[index].projecttext;

    // Fade in
    [p1, p2, p3].forEach(el => el.style.opacity = 1);
  }, 500);
}

// Right button
document.getElementById("pright").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % Object.keys(projects).length;
  currentIndex2 = (currentIndex2 + 1) % Object.keys(projects).length;

  fadeUpdateContent(currentIndex, ["p1", "p2", "p3"]);
  fadeUpdateContent(currentIndex2, ["p4", "p5", "p6"]);
});

// Left button
document.getElementById("pleft").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex = (currentIndex - 1 + Object.keys(projects).length) % Object.keys(projects).length;
    fadeUpdateContent(currentIndex, ["p1", "p2", "p3"]);
  }
  if (currentIndex2 > 1) {
    currentIndex2 = (currentIndex2 - 1 + Object.keys(projects).length) % Object.keys(projects).length;
    fadeUpdateContent(currentIndex2, ["p4", "p5", "p6"]);
  }
});
