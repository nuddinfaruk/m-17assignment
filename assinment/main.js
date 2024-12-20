

function applyPromoCode() {
      const promoCode = document.getElementById("promoCodeInput").value;
      const totalPriceElement = document.getElementById("totalPrice");
      const resultMessage = document.getElementById("resultMessage");

      // Original price
      const originalPrice = 100.00;

      if (promoCode.trim().toLowerCase() === "ostad") {
        // Apply 10% discount
        const discountedPrice = originalPrice * 0.90;
        totalPriceElement.textContent = discountedPrice.toFixed(2);
        resultMessage.textContent = `Promo code applied! Discounted price: $${discountedPrice.toFixed(2)}`;
        resultMessage.classList.remove("error");
      } else {
        // Invalid promo code
        resultMessage.textContent = "Invalid promo code!";
        resultMessage.classList.add("error");
      }
    }