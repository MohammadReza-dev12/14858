const container = document.getElementById("container");
const inputs = document.getElementById("inputs");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const minBox = document.getElementById("min-box");
const maxBox = document.getElementById("maxbox");
const total = document.getElementById("total");
const totalName = document.getElementById("totalname");
const boxes = document.querySelector(".boxes");
btn.addEventListener("click", () => {
  const IV = input.value;
  let array = [];
  let array1 = [];
  if (IV.length == 0) {
    alert("لطفا کادر را خالی نذار");
  } else {
    array = IV.split("/");
    for (var i = 0; i < array.length; i++) {
      array1.push(Number(array[i]));
    }
    function eventi(a) {
      let j = 0;
      for (var i = 0; i < array1.length; i++) {
        if (array1[i] <= 20) {
          j++;
        }
      }
      if (j == array1.length) {
        var total1 = 0;
        for (var i = 0; i < a.length; i++) {
          total1 += a[i];
        }
        let total2 = total1 / a.length;
        if (total2 >= 10) {
          totalName.innerHTML = "وضعیت : قابل قبول";
          totalName.style.color = "#16a34a";
        } else if (total2 < 10) {
          totalName.innerHTML = "وضعیت : مردود";
          totalName.style.color = "#DC2626";
        }
        let max = 0;
        for (var i = 0; i < a.length; i++) {
          if (a[i] > max) {
            max = a[i];
          }
        }
        maxBox.innerHTML = max;
        let min = 1000000000;
        for (var i = 0; i < a.length; i++) {
          if (a[i] < min) {
            min = a[i];
          }
        }
        minBox.innerHTML = min;
        total.innerHTML = total2.toFixed(2);
        boxes.style.display = "flex";
        container.style.height = "25rem";
      } else {
        alert("نمره ها نباید از 20 بیشتر باشند");
      }
    }
    eventi(array1);
  }
});

input.addEventListener("keydown", (event) => {
  if (
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    event.key === "ArrowUp" ||
    event.key === "ArrowDown" ||
    event.key === "Delete" ||
    event.key === "Backspace"
  ) {
    return;
  }
  if (!/[0-9/]/.test(event.key)) {
    event.preventDefault();
  }
});
