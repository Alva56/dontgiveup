document.addEventListener("DOMContentLoaded", function () {
  const cart = [];
  const cartItemsEl = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const checkoutBtn = document.getElementById("checkout-btn");

  document.querySelectorAll(".btn-add").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = parseInt(button.dataset.price);

      const existingItem = cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
      }

      updateCart();
    });
  });

  function updateCart() {
    cartItemsEl.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${item.name} x${item.quantity} - Rp ${(
        item.price * item.quantity
      ).toLocaleString("id-ID")}`;
      cartItemsEl.appendChild(li);
      total += item.price * item.quantity;
    });

    totalEl.textContent = `Total: Rp ${total.toLocaleString("id-ID")}`;
  }

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Keranjang Anda kosong!");
    } else {
      alert("Terima kasih telah berbelanja di Kopi Tubruk Alva!");
      cart.length = 0; // Kosongkan keranjang
      updateCart();
    }
  });
});
