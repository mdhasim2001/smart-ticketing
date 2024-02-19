const busSeats = document.getElementsByClassName("bus-set");
const totalSeat = (document.getElementById("total-seat").innerText =
  busSeats.length);

let seat = totalSeat;
let count = 0;
let countSeatNumber = [];
let price = 0;

// seat seclect function
for (const busSeat of busSeats) {
  busSeat.addEventListener("click", function (e) {
    if (count === 4) {
      alert("Sorry, you can take a maximum of 'Four'");

      return;
    }

    for (const countSeat of countSeatNumber) {
      if (countSeat === e.target.innerText) {
        alert("Sorry, you have already selected");
        return;
      }
    }
    const targetSeat = e.target;
    targetSeat.style.background = "#1DD100";
    seat--;
    document.getElementById("total-seat").innerText = seat;
    count++;
    document.getElementById("seat-count").innerText = count;
    const seatNumber = targetSeat.innerText;
    countSeatNumber.push(seatNumber);

    price += 550;

    document.getElementById("success").removeAttribute("disabled");

    seatDitels(seatNumber);
    totalPrice("total-price", price);
    totalPrice("grand-total", price);

    if (countSeatNumber.length === 4) {
      document.getElementById("coupon-input").removeAttribute("disabled");
      document.getElementById("coupon-apply").removeAttribute("disabled");
    }

    return price;
  });
}

// doscount apply function
document.getElementById("coupon-apply").addEventListener("click", function () {
  const coupunInputValue = document.getElementById("coupon-input").value;

  const couponCode1 = document.getElementById("coupon-code15").innerText;
  const couponCode2 = document.getElementById("coupon-code20").innerText;

  if (couponCode1 === coupunInputValue) {
    document.getElementById("coupon").classList.add("hidden");
    const discount = price * 0.15;
    price = price - discount;
    document.getElementById("grand-total").innerText = price;
  } else if (couponCode2 === coupunInputValue) {
    document.getElementById("coupon").classList.add("hidden");
    const discount = price * 0.2;
    price = price - discount;
    document.getElementById("grand-total").innerText = price;
  } else {
    alert("Coupon not maching");
  }
});

document.getElementById("success").addEventListener("click", function () {
  document.getElementById("success-card").classList.remove("hidden");

  document.getElementById("tickit").classList.add("hidden");
});

document.getElementById("success-card").addEventListener("click", function () {
  document.getElementById("success-card").classList.add("hidden");

  document.getElementById("tickit").classList.remove("hidden");

  window.location.reload();

  // document.reload();
});

function seatDitels(num) {
  const seatNumber = document.getElementById("seat-number");
  const div = document.createElement("div");
  div.classList.add("flex", "items-center", "justify-between");
  const p = document.createElement("p");
  p.innerText = num;
  const p2 = document.createElement("p");
  p2.innerText = "Economoy";
  const p3 = document.createElement("p");
  p3.innerText = "550";

  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(p3);

  seatNumber.appendChild(div);
}

function totalPrice(id, price) {
  document.getElementById(id).innerText = price;
}
