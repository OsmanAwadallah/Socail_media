// Sidebar
const menuItem = document.querySelectorAll(".menu-item");
// Messages
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
//  Theme
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme");
const fontSize = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
// Color
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
/*----------------- Start sidebar -----------------*/

const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});
/*------------------ End sidebar ------------------*/

/*------------------ Strat messages ------------------*/

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    console.log(name);
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
    messagesNotification.querySelector(".notification-count").style.display =
      "block";
  }, 2000);
});
/*------------------- End messages -------------------*/

/*------------------- Start theme customize -------------------*/
const openThemeModel = () => {
  themeModel.style.display = "grid";
};
const closeThemeModel = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModel.style.display = "none";
  }
};

themeModel.addEventListener("click", closeThemeModel);
theme.addEventListener("click", openThemeModel);
/*-------------------- Fonts --------------------*/
const removeSizeSelector = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};
fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----stiky-top-left", "5.4rem");
      root.style.setProperty("----stiky-top-right", "5.4rem");
      console.log("Hey1");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----stiky-top-left", "5.4rem");
      root.style.setProperty("----stiky-top-right", "-7rem");
      console.log("Hey2");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----stiky-top-left", "-2rem");
      root.style.setProperty("----stiky-top-right", "-17rem");
      console.log("Hey3");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----stiky-top-left", "-5rem");
      root.style.setProperty("----stiky-top-right", "-25rem");
      console.log("Hey4");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----stiky-top-left", "-10rem");
      root.style.setProperty("----stiky-top-right", "-33rem");
      console.log("Hey5");
    }
  });

  document.querySelector("html").style.fontSize = fontSize;
});
/*-------------------- End theme customize --------------------*/

/*-------------------- Start color --------------------*/
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-hue", primaryHue);
  });
});
/*-------------------- End color --------------------*/

/*-------------------- Start bg color --------------------*/
let lightColor;
let whiteColor;
let darktColor;

const changeBg = () => {
  root.style.setProperty("--bg-light", lightColor);
  root.style.setProperty("--bg-white", whiteColor);
  root.style.setProperty("--bg-dark", darktColor);
};

bg1.addEventListener("click", () => {
  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});
bg2.addEventListener("click", () => {
  darktColor = "95%";
  whiteColor = "20%";
  lightColor = "15%";
  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});
bg3.addEventListener("click", () => {
  darktColor = "95%";
  whiteColor = "10%";
  lightColor = "0%";
  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBg();
});
/*-------------------- End bg color --------------------*/
/*-------------------- Add feature ---------------------*/ 
let liked = document.querySelectorAll(".liked i")
let increas = document.querySelectorAll(".increas")

liked.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.remove("fa-regular");
        item.classList.add("fa-solid");
        item.style.color = "red";
        console.log(increas.innerHTML++)
    });
});
let bookmark = document.querySelectorAll(".bookmark span i")

bookmark.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.remove("fa-regular");
        item.classList.add("fa-solid");
        item.style.color = "yellow";
    });
});
