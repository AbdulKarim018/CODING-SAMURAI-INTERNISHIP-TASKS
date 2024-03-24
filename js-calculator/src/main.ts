import "./style.css";
import {
  ChevronUp,
  createIcons,
  Delete,
  Divide,
  Equal,
  Minus,
  Plus,
  X,
} from "lucide";

createIcons({
  icons: {
    Delete,
    Divide,
    X,
    Minus,
    Plus,
    Equal,
    ChevronUp,
  },
  attrs: {
    "stroke-width": 2,
  },
});

const clear = document.getElementById("clear")!;
const del = document.getElementById("delete")!;

const display = document.getElementById("display") as HTMLInputElement;
const key_1 = document.getElementById("key_1")!;
const key_2 = document.getElementById("key_2")!;
const key_3 = document.getElementById("key_3")!;
const key_4 = document.getElementById("key_4")!;
const key_5 = document.getElementById("key_5")!;
const key_6 = document.getElementById("key_6")!;
const key_7 = document.getElementById("key_7")!;
const key_8 = document.getElementById("key_8")!;
const key_9 = document.getElementById("key_9")!;
const key_0 = document.getElementById("key_0")!;
const key_00 = document.getElementById("key_00")!;
const key_dot = document.getElementById("key_dot")!;

const plus = document.getElementById("plus")!;
const minus = document.getElementById("minus")!;
const multiply = document.getElementById("multiply")!;
const divide = document.getElementById("divide")!;
const pow = document.getElementById("pow")!;
const equal = document.getElementById("equal")!;

const keys = [
  key_1,
  key_2,
  key_3,
  key_4,
  key_5,
  key_6,
  key_7,
  key_8,
  key_9,
  key_0,
  key_00,
  key_dot,
];

const operators = [
  { key: plus, operator: "+" },
  { key: minus, operator: "-" },
  { key: multiply, operator: "×" },
  { key: divide, operator: "/" },
  { key: pow, operator: "^" },
];

keys.forEach((key) => {
  key.addEventListener("click", () => {
    display.value! += key.textContent;
  });
});

operators.forEach((operator) => {
  operator.key.addEventListener("click", () => {
    if (display.value === "") return;
    display.value += operator.operator;
  });
});

clear.addEventListener("click", () => {
  display.value = "";
});

equal.addEventListener("click", () => {
  if (display.value === "") return;
  try {
    display.value = eval(
      display.value
        .replaceAll("×", "*")
        .replaceAll("÷", "/")
        .replaceAll("^", "**")
        .replace(/^0+/, "")
    );
    display.value = display.value.toString();
    if (display.value === NaN.toString()) display.value = "Syntax Error";
    if (display.value === "undefined") display.value = "Syntax Error";
  } catch (error) {
    if (error instanceof SyntaxError) display.value = "Syntax Error";
  }
});

del.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
